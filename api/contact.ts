import type { VercelRequest, VercelResponse } from '@vercel/node';

// Types for the payload
interface ContactPayload {
  fullName: string;
  workEmail: string;
  whatsapp?: string;
  companyName: string;
  role: string;
  companySize: string;
  industry?: string;
  challenge: string;
  needs: string[];
  budgetRange: string;
  timing: string;
  sourceUrl?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  clientTime?: string;
  honeypot?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Method Validation
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // 2. Honeypot Check
  const body = req.body as ContactPayload;
  if (body.honeypot) {
    // Silent success for bots
    return res.status(200).json({ ok: true });
  }

  // 3. Basic Validation
  if (!body.fullName || !body.workEmail || !body.companyName || !body.challenge) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const TWENTY_URL = process.env.TWENTY_BASE_URL || 'https://api.twenty.com';
  const API_KEY = process.env.TWENTY_API_KEY;

  if (!API_KEY) {
    console.error('Missing TWENTY_API_KEY');
    return res.status(500).json({ ok: false, error: 'Server configuration error' });
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  };

  const executeGraphQL = async (query: string, variables: any = {}) => {
    const response = await fetch(`${TWENTY_URL}/graphql`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
    
    const json = await response.json();
    if (json.errors) {
      console.error('GraphQL Errors:', JSON.stringify(json.errors, null, 2));
      throw new Error(json.errors[0].message);
    }
    return json.data;
  };

  try {
    // A. Search/Create Person
    const normalizedEmail = body.workEmail.toLowerCase().trim();
    
    const findPersonQuery = `
      query FindPerson($email: String!) {
        people(filter: { emails: { primaryEmail: { eq: $email } } }, first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    `;
    
    let personId: string;
    const personData = await executeGraphQL(findPersonQuery, { email: normalizedEmail });
    
    if (personData.people.edges.length > 0) {
      personId = personData.people.edges[0].node.id;
    } else {
      const createPersonMutation = `
        mutation CreatePerson($input: PersonCreateInput!) {
          createPerson(data: $input) {
            id
          }
        }
      `;
      
      const names = body.fullName.trim().split(' ');
      const firstName = names[0];
      const lastName = names.slice(1).join(' ') || '-';

      const newPerson = await executeGraphQL(createPersonMutation, {
        input: {
          name: { firstName, lastName },
          emails: { primaryEmail: normalizedEmail },
          phones: body.whatsapp ? { primaryPhone: body.whatsapp } : undefined,
          jobTitle: body.role,
        }
      });
      personId = newPerson.createPerson.id;
    }

    // B. Search/Create Company
    const normalizedCompany = body.companyName.trim();
    const findCompanyQuery = `
      query FindCompany($name: String!) {
        companies(filter: { name: { eq: $name } }, first: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    `;

    let companyId: string;
    const companyData = await executeGraphQL(findCompanyQuery, { name: normalizedCompany });

    if (companyData.companies.edges.length > 0) {
      companyId = companyData.companies.edges[0].node.id;
    } else {
      const createCompanyMutation = `
        mutation CreateCompany($input: CompanyCreateInput!) {
          createCompany(data: $input) {
            id
          }
        }
      `;
      // Note: Omitted domainName for now as it requires complex Link handling
      const newCompany = await executeGraphQL(createCompanyMutation, {
        input: {
          name: normalizedCompany,
          employees: body.companySize === '200+' ? 200 : parseInt(body.companySize.split('-')[0]) || 1,
        }
      });
      companyId = newCompany.createCompany.id;
    }

    // C. Create Opportunity/Lead
    // Note: description field is missing in standard OpportunityCreateInput in this workspace,
    // so we omit it for now to ensure creation success.
    const createOpportunityMutation = `
      mutation CreateOpportunity($input: OpportunityCreateInput!) {
        createOpportunity(data: $input) {
          id
        }
      }
    `;

    const newOpportunity = await executeGraphQL(createOpportunityMutation, {
      input: {
        name: `${normalizedCompany} - Inbound Opportunity`,
        amount: { 
            amountMicros: body.budgetRange === 'discuss' ? 0 : parseInt(body.budgetRange.split('-')[0]) * 1000000, 
            currencyCode: 'USD' 
        },
        // stage: 'NEW', // Omitted as stage enum/ID is strictly validated
        pointOfContactId: personId,
        companyId: companyId,
      }
    });
    const opportunityId = newOpportunity.createOpportunity.id;

    // D. Create Note with Details (Challenge, Needs, Timing)
    const noteBody = `
**Challenge:**
${body.challenge}

**Needs:**
${body.needs.join(', ')}

**Timing:**
${body.timing}

**Budget:**
${body.budgetRange}

**Industry:**
${body.industry || 'N/A'}

**Source:**
${body.sourceUrl || 'Direct'}
    `.trim();

    const createNoteMutation = `
      mutation CreateNote($input: NoteCreateInput!) {
        createNote(data: $input) {
          id
        }
      }
    `;

    const noteData = await executeGraphQL(createNoteMutation, {
      input: {
        title: 'Form Submission Details',
        bodyV2: { markdown: noteBody }
      }
    });
    const noteId = noteData.createNote.id;

    // E. Link Note to Opportunity, Person and Company
    const createNoteTargetMutation = `
      mutation CreateNoteTarget($input: NoteTargetCreateInput!) {
        createNoteTarget(data: $input) {
          id
        }
      }
    `;

    // Link to Person
    await executeGraphQL(createNoteTargetMutation, {
      input: {
        noteId: noteId,
        personId: personId
      }
    });
    
    // Link to Company
    await executeGraphQL(createNoteTargetMutation, {
        input: {
          noteId: noteId,
          companyId: companyId
        }
    });

    // Link to Opportunity
    await executeGraphQL(createNoteTargetMutation, {
        input: {
          noteId: noteId,
          opportunityId: opportunityId
        }
    });

    return res.status(200).json({ ok: true });

  } catch (error: any) {
    console.error('Integration Error:', error);
    return res.status(500).json({ ok: false, error: 'Internal processing error' });
  }
}
