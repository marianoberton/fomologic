import { Zap, Phone, MessageSquare, Layers, FileText, Cpu } from 'lucide-react';

export const WORKFORCE_CARDS = [
  {
    id: "01",
    tag: "Comercial",
    title: "Motor de ventas",
    desc: "Contacta, califica y hace seguimiento automático de leads para que ninguna oportunidad se pierda.",
    hook: "Tu mejor vendedor, activo 24/7.",
    stack: ["HubSpot", "LinkedIn", "n8n"],
    icon: Zap
  },
  {
    id: "02",
    tag: "Atención",
    title: "Atención telefónica con IA",
    desc: "Atiende llamadas, gestiona turnos y responde consultas con voz natural, sin esperas ni saturación.",
    hook: "Contesta todas las llamadas, siempre.",
    stack: ["Vapi", "OpenAI", "Twilio"],
    icon: Phone
  },
  {
    id: "03",
    tag: "Operaciones",
    title: "Atención al cliente",
    desc: "Centraliza WhatsApp, mail y web. Responde al instante y escala solo cuando hace falta.",
    hook: "Siempre responde. Sabe cuándo escalar.",
    stack: ["Chatwoot", "Zendesk", "n8n"],
    icon: MessageSquare
  },
  {
    id: "04",
    tag: "Dirección",
    title: "Copiloto del dueño",
    desc: "Accede a toda la información de tu negocio (CRM, ERP, reportes) y te devuelve claridad para decidir mejor.",
    hook: "Toda tu empresa, en tu cabeza.",
    stack: ["LangChain", "Python", "G.Sheets"],
    icon: Layers
  },
  {
    id: "05",
    tag: "Legales / Compras",
    title: "Experto en licitaciones",
    desc: "Lee pliegos, detecta oportunidades en tiempo real y analiza riesgos antes de presentar una oferta.",
    hook: "Llegá antes, con más información.",
    stack: ["RAG", "Vector DB", "OpenAI"],
    icon: FileText
  },
  {
    id: "06",
    tag: "Gestión Interna",
    title: "Arquitecto de procesos por voz",
    desc: "Escucha cómo trabaja tu equipo y transforma conversaciones en procesos y manuales operativos.",
    hook: "Mapeá toda tu empresa hablando.",
    stack: ["Whisper", "Mermaid", "Lucid"],
    icon: Cpu
  }
];
