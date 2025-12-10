import React from 'react';
import { Layers, Zap, Brain, BarChart3, ArrowRight, Check } from 'lucide-react';
import VisualOperationalPrep from './VisualOperationalPrep';
import VisualAutomation from './VisualAutomation';
import VisualAIAgents from './VisualAIAgents';
import VisualBI from './VisualBI';

interface Service {
  id: string;
  title: string;
  description: string;
  theme: 'light' | 'dark';
  icon: React.ElementType;
  features: string[];
}

const services: Service[] = [
  {
    id: '01',
    title: 'Preparación Operativa',
    description: 'Auditoría profunda de procesos. Estandarizamos el caos antes de automatizarlo. Convertimos tu "know-how" informal en reglas claras.',
    theme: 'light',
    icon: Layers,
    features: ['Mapeo de Procesos', 'Detección de Fugas', 'Manual de Operaciones']
  },
  {
    id: '02',
    title: 'Automatización de Flujos',
    description: 'Conectamos tu CRM, Email y bases de datos. El sistema empieza a mover la información por ti. Lo que antes tomaba horas, ahora ocurre en milisegundos.',
    theme: 'dark',
    icon: Zap,
    features: ['Conexión de Sistemas (APIs)', 'Eliminación de Excel', 'Flujos Automáticos']
  },
  {
    id: '03',
    title: 'Agentes de IA',
    description: 'Tu fuerza laboral digital que trabaja 24/7. Entrenamos Agentes con tu información para que atiendan clientes, coticen y asistan a tu equipo al instante.',
    theme: 'light',
    icon: Brain,
    features: ['Chatbots Entrenados', 'Asistentes de Venta', 'Lectura de Documentos']
  },
  {
    id: '04',
    title: 'Business Intelligence',
    description: 'Visibilidad en vivo. Un panel centralizado que traduce la actividad de tus bots y tu equipo en métricas de dinero. Pasas de suponer a saber.',
    theme: 'light',
    icon: BarChart3,
    features: ['Tableros en Tiempo Real', 'Alertas de Rentabilidad', 'Limpieza de Datos']
  }
];

const ServicesSection: React.FC = () => {
  return (
    <div className="w-full bg-canvas">
      {services.map((service, index) => {
        const isInverted = index === 1; // The "Dark" card (Index 1)
        const isTextRight = index % 2 !== 0; // Index 1, 3 have Text on Right

        return (
          <section 
            key={service.id} 
            className={`py-24 md:py-32 w-full ${isInverted ? 'bg-charcoal text-white' : 'bg-canvas text-ink'}`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className={`flex flex-col-reverse gap-16 lg:gap-24 lg:items-center ${isTextRight ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className={`font-body text-xs uppercase tracking-widest px-2 py-1 rounded border ${
                      isInverted 
                        ? 'text-accent-lime border-accent-lime/30 bg-accent-lime/10' 
                        : 'text-accent-orange border-accent-orange/30 bg-accent-orange/10'
                    }`}>
                      Phase {service.id}
                    </span>
                  </div>

                  <h2 className={`font-display font-bold text-4xl md:text-5xl tracking-tight ${isInverted ? 'text-white' : 'text-ink'}`}>
                    {service.title}
                  </h2>

                  <p className={`font-body text-xl font-light leading-relaxed max-w-lg ${isInverted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 pt-4 pb-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1">
                           <Check size={18} className="text-accent-lime" />
                        </div>
                        <span className={`font-body text-lg ${isInverted ? 'text-gray-200' : 'text-ink'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                   {service.id === '01' ? (
                     <VisualOperationalPrep />
                   ) : service.id === '02' ? (
                     <VisualAutomation />
                   ) : service.id === '03' ? (
                     <VisualAIAgents />
                   ) : service.id === '04' ? (
                     <VisualBI />
                   ) : (
                     <div className={`w-full aspect-[4/3] rounded-[2.5rem] flex items-center justify-center transition-colors duration-500 ${
                       isInverted ? 'bg-gray-800 border border-white/10' : 'bg-gray-100 border border-gray-200'
                     }`}>
                        {/* Icon Placeholder */}
                        <service.icon 
                          size={64} 
                          strokeWidth={1}
                          className={`${isInverted ? 'text-accent-lime' : 'text-gray-400'}`} 
                        />
                     </div>
                   )}
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServicesSection;
