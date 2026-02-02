import { Zap, Phone, MessageSquare, Layers, FileText, Cpu, Binoculars, Scale, BookOpen, Ear, ShieldCheck, FileSignature, UserPlus } from 'lucide-react';

export const WORKFORCE_CARDS = [
  {
    id: "01",
    tag: "Comercial",
    title: "Motor de ventas",
    desc: "Contacta, califica y hace seguimiento automático de leads para que ninguna oportunidad se pierda.",
    hook: "Tu mejor vendedor, activo 24/7.",
    problem: "Leads fríos y seguimiento inconsistente",
    metrics: "+40% Tasa de Conversión",
    stack: ["HubSpot", "LinkedIn", "n8n"],
    icon: Zap
  },
  {
    id: "02",
    tag: "Atención",
    title: "Atención telefónica con IA",
    desc: "Atiende llamadas, gestiona turnos y responde consultas con voz natural, sin esperas ni saturación.",
    hook: "Contesta todas las llamadas, siempre.",
    problem: "Llamadas perdidas fuera de horario",
    metrics: "0 Llamadas Perdidas",
    stack: ["Vapi", "OpenAI", "Twilio"],
    icon: Phone
  },
  {
    id: "03",
    tag: "Operaciones",
    title: "Atención al cliente",
    desc: "Centraliza WhatsApp, mail y web. Responde al instante y escala solo cuando hace falta.",
    hook: "Siempre responde. Sabe cuándo escalar.",
    problem: "Soporte saturado y respuestas lentas",
    metrics: "-70% Tickets Manuales",
    stack: ["Chatwoot", "Zendesk", "n8n"],
    icon: MessageSquare
  },
  {
    id: "04",
    tag: "Dirección",
    title: "Copiloto del dueño",
    desc: "Accede a toda la información de tu negocio (CRM, ERP, reportes) y te devuelve claridad para decidir mejor.",
    hook: "Toda tu empresa, en tu cabeza.",
    problem: "Datos dispersos y ceguera operativa",
    metrics: "Reportes en Segundos",
    stack: ["LangChain", "Python", "G.Sheets"],
    icon: Layers
  },
  {
    id: "05",
    tag: "Legales / Compras",
    title: "Experto en licitaciones",
    desc: "Lee pliegos, detecta oportunidades en tiempo real y analiza riesgos antes de presentar una oferta.",
    hook: "Llegá antes, con más información.",
    problem: "Lectura lenta de pliegos extensos",
    metrics: "-90% Tiempo de Análisis",
    stack: ["RAG", "Vector DB", "OpenAI"],
    icon: FileText
  },
  {
    id: "06",
    tag: "Gestión Interna",
    title: "Arquitecto de procesos por voz",
    desc: "Escucha cómo trabaja tu equipo y transforma conversaciones en procesos y manuales operativos.",
    hook: "Mapeá toda tu empresa hablando.",
    problem: "Procesos no documentados (Tribal Knowledge)",
    metrics: "Documentación Automática",
    stack: ["Whisper", "Mermaid", "Lucid"],
    icon: Cpu
  },
  {
    id: "07",
    tag: "Estrategia",
    title: "Analista de Competencia",
    desc: "Monitorea competidores, analiza precios, propuestas y movimientos clave. Resume lo importante para tomar decisiones estratégicas sin perder tiempo.",
    hook: "Sabé qué están haciendo antes que vos.",
    problem: "Desconocimiento de movimientos de la competencia",
    metrics: "Alertas en Tiempo Real",
    stack: ["Scrapers", "RAG", "Vector DB", "OpenAI"],
    icon: Binoculars
  },
  {
    id: "08",
    tag: "Legales",
    title: "Agente Legal / Contractual",
    desc: "Lee contratos y documentos legales, extrae cláusulas clave, detecta riesgos y responde consultas frecuentes en segundos.",
    hook: "Leé contratos sin ser abogado.",
    problem: "Cuellos de botella en revisión legal",
    metrics: "Revisión 10x Más Rápida",
    stack: ["RAG", "PDF Parser", "Vector DB", "OpenAI"],
    icon: Scale
  },
  {
    id: "09",
    tag: "Operaciones",
    title: "Agente de Soporte Técnico / SOPs",
    desc: "Responde cómo ejecutar procesos internos consultando manuales, procedimientos y documentación operativa con lenguaje natural.",
    hook: "Tu operación, siempre consultable.",
    problem: "Errores operativos por falta de consulta",
    metrics: "-50% Errores Operativos",
    stack: ["RAG", "Confluence / Docs", "Chat Interface", "OpenAI"],
    icon: BookOpen
  },
  {
    id: "10",
    tag: "Experiencia de Cliente",
    title: "Agente de Reclamos y Feedback",
    desc: "Clasifica reclamos, prioriza impacto y detecta patrones para convertir quejas en mejoras reales del negocio.",
    hook: "Escuchá a tus clientes sin ruido.",
    problem: "Feedback de clientes ignorado o perdido",
    metrics: "100% Feedback Procesado",
    stack: ["NLP", "Sentiment Analysis", "CRM", "OpenAI"],
    icon: Ear
  },
  {
    id: "11",
    tag: "Compliance",
    title: "Agente Regulatorio / Compliance",
    desc: "Monitorea cambios normativos, resume qué cambió y explica el impacto real en tu operación.",
    hook: "Enterate antes de que sea un problema.",
    problem: "Riesgo de multas por incumplimiento",
    metrics: "Monitoreo 24/7",
    stack: ["Scrapers", "Alerting", "RAG", "OpenAI"],
    icon: ShieldCheck
  },
  {
    id: "12",
    tag: "Ventas",
    title: "Agente de Propuestas y Cotizaciones",
    desc: "Genera propuestas comerciales y cotizaciones personalizadas usando plantillas, historial de clientes y reglas del negocio.",
    hook: "Propuestas listas en minutos, no en días.",
    problem: "Demora en envío de cotizaciones",
    metrics: "Propuestas en < 5 min",
    stack: ["Templates", "CRM", "Docs / PDF", "OpenAI"],
    icon: FileSignature
  },
  {
    id: "13",
    tag: "RRHH",
    title: "Agente de Onboarding Interno",
    desc: "Acompaña a nuevos empleados, responde dudas frecuentes y explica procesos, herramientas y políticas internas.",
    hook: "El primer día, sin fricción.",
    problem: "Onboarding lento y costoso",
    metrics: "-60% Tiempo de HR",
    stack: ["RAG", "Docs", "Chat Interface", "OpenAI"],
    icon: UserPlus
  }
];
