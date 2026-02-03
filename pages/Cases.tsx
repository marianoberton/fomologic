
import React, { useEffect } from 'react';
import Closing from '../components/Closing';
import CaseSection, { Stat } from '../components/cases/CaseSection';

const Cases: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      number: '01',
      slug: 'marketpaper',
      client: 'MarketPaper',
      category: 'High Volume Automation',
      description: 'Transformamos una operación caótica de mayorista en una máquina de ventas automatizada.',
      problem: 'Dependencia absoluta del ánimo de cada vendedor y pérdida de leads por desborde.',
      stats: [
        { value: '+37%', label: 'Tasa de Respuesta' },
        { value: '100%', label: 'Trazabilidad' }
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      color: '#CED600'
    },
    {
      number: '02',
      slug: 'inted',
      client: 'Inted',
      category: 'Real Estate Data Mining',
      description: 'Un clúster de bots que monitorea el mercado inmobiliario en tiempo real para encontrar oportunidades antes que nadie.',
      problem: 'El mercado es volátil. Las mejores propiedades desaparecen en minutos si usas búsqueda manual.',
      stats: [
        { value: '0s', label: 'Latencia' },
        { value: '50+', label: 'Deals Cerrados' }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      color: '#CED600'
    },
    {
      number: '03',
      slug: 'velvet',
      client: 'Velvet',
      category: 'AI Customer Support',
      description: 'Soporte al cliente de e-commerce escalado con Agentes RAG que conocen cada política y pedido.',
      problem: 'Equipo humano colapsado por preguntas repetitivas sobre tallas y envíos.',
      stats: [
        { value: '-60%', label: 'Costos Operativos' },
        { value: '24/7', label: 'Disponibilidad' }
      ],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
      color: '#CED600'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-ink font-sans">
      
      <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="mb-12">
              <span className="font-body text-xs uppercase tracking-widest text-ink border border-ink px-2 py-0.5 rounded-full">Archive</span>
              <h1 className="font-display font-black text-[12vw] leading-[0.85] tracking-tighter text-[#171717] mt-8 mb-8">
                selected <br/>
                <span className="text-gray-300">works.</span>
              </h1>
          </div>
      </div>

      <div className="flex flex-col">
        {cases.map((c) => (
          <CaseSection key={c.number} {...c} />
        ))}
      </div>

      <Closing />
    </div>
  );
};

export default Cases;
