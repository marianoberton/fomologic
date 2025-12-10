import React, { useEffect } from 'react';

interface Item { src: string; name: string }

const brandMonoLogos: Item[] = [
  { src: '/logos/brand/mono/AbreviadoSVG-black.svg', name: 'Abreviado (Black)' },
  { src: '/logos/brand/mono/horizontalSVG.svg', name: 'Horizontal' },
  { src: '/logos/brand/mono/integradoSVG.svg', name: 'Integrado' },
  { src: '/logos/brand/mono/tipograficoSVG.svg', name: 'Tipográfico' },
  { src: '/logos/brand/mono/verticalSVG.svg', name: 'Vertical' },
];

const Logos: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full bg-canvas text-ink font-sans">
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter">Logos</h1>
          <p className="font-body text-gray-500 mt-2">Brand Mono</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brandMonoLogos.map((item, i) => (
            <div key={i} className="relative border border-gray-200 rounded-2xl bg-white/70 hover:bg-white transition-colors p-4 h-44 flex items-center justify-center">
              <img src={item.src} alt={item.name} className="max-h-full max-w-full object-contain" />
              <div className="absolute top-3 left-3 px-2 py-1 bg-ink text-white rounded-md">
                <span className="font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-body text-xs text-gray-500 truncate">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Logos;
