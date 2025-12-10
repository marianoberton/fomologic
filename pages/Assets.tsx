import React, { useEffect } from 'react';

const assets3d = [
  { id: '01', name: 'Iso_Base_Slab', concept: 'Base sólida, fundamento', use: 'Preparación Operativa (Base del negocio)', src: '/svg/illustrations/01-Iso_Base_Slab.svg' },
  { id: '02', name: 'Iso_Delta_Prism', concept: 'Dirección, foco', use: 'Botones o indicadores de "Siguiente"', src: '/svg/illustrations/02-Iso_Delta_Prism.svg' },
  { id: '03', name: 'Iso_Capsule', concept: 'Contenedor, módulo', use: 'Elementos de UI flotantes', src: '/svg/illustrations/03-Iso_Capsule.svg' },
  { id: '04', name: 'Iso_Magnet_Link', concept: 'Atracción, unión', use: 'Integración de APIs', src: '/svg/illustrations/04-Iso_Magnet_Link.svg' },
  { id: '05', name: 'Iso_Cloud_Stack', concept: 'Nube, abstracto, soft', use: 'Agentes de IA (Cerebro digital)', src: '/svg/illustrations/05-Iso_Cloud_Stack.svg' },
  { id: '06', name: 'Iso_Tri_Core', concept: 'Núcleo central', use: 'Hero Sections secundarios', src: '/svg/illustrations/06-Iso_Tri_Core.svg' },
  { id: '07', name: 'Iso_Helix_Twist', concept: 'Transformación, cambio', use: 'Automatización (Cambio de estado)', src: '/svg/illustrations/07-Iso_Helix_Twist.svg' },
  { id: '08', name: 'Iso_Link_Node', concept: 'Conexión fuerte', use: 'Red de Partners', src: '/svg/illustrations/08-Iso_Link_Node.svg' },
  { id: '09', name: 'Iso_Tetris_Block', concept: 'Construcción, pieza', use: 'Staff Augmentation / Careers', src: '/svg/illustrations/09-Iso_Tetris_Block.svg' },
  { id: '10', name: 'Iso_Infinity_Loop', concept: 'Ciclo continuo, flujo', use: 'Automatización de Flujos (Loop)', src: '/svg/illustrations/10-Iso_Infinity_Loop.svg' },
  { id: '11', name: 'Iso_Cross_Hub', concept: 'Intersección, centro', use: 'Centro de Ayuda / Contacto', src: '/svg/illustrations/11-Iso_Cross_Hub.svg' },
  { id: '12', name: 'Iso_X_Factor', concept: 'Multiplicador', use: 'Métricas (el "X" veces más rápido)', src: '/svg/illustrations/12-Iso_X_Factor.svg' },
  { id: '13', name: 'Iso_Hourglass', concept: 'Tiempo, proceso', use: 'Roadmap / Tiempos de entrega', src: '/svg/illustrations/13-Iso_Hourglass.svg' },
  { id: '14', name: 'Iso_Fluid_Path', concept: 'Camino, serpiente', use: 'User Journey', src: '/svg/illustrations/14-Iso_Fluid_Path.svg' },
  { id: '15', name: 'Iso_Data_Stack', concept: 'Acumulación, capas', use: 'Business Intelligence (Capas de datos)', src: '/svg/illustrations/15-Iso_Data_Stack.svg' },
];

const assets2d = [
  { id: '01', name: 'Flat_Rect_Rounded', concept: 'Pantalla, ventana', use: 'Fondos de iconos', src: '/svg/illustrations/01-Flat_Rect_Rounded.svg' },
  { id: '02', name: 'Flat_Butterfly', concept: 'Simetría, espejo', use: 'Decoración Hero', src: '/svg/illustrations/02-Flat_Butterfly.svg' },
  { id: '03', name: 'Flat_Stack_Pill', concept: 'Lista, orden', use: 'Items de listas', src: '/svg/illustrations/03-Flat_Stack_Pill.svg' },
  { id: '04', name: 'Flat_I_Beam', concept: 'Soporte, columna', use: 'Separadores verticales', src: '/svg/illustrations/04-Flat_I_Beam.svg' },
  { id: '05', name: 'Flat_Triangle', concept: 'Alerta, play', use: 'Iconos de Video / Play', src: '/svg/illustrations/05-Flat_Triangle.svg' },
  { id: '06', name: 'Flat_L_Corner', concept: 'Marco, encuadre', use: 'Esquinas de fotos (Founders)', src: '/svg/illustrations/06-Flat_L_Corner.svg' },
  { id: '07', name: 'Flat_Window_Grid', concept: 'Visión, transparencia', use: 'Icono menú / Dashboard', src: '/svg/illustrations/07-Flat_Window_Grid.svg' },
  { id: '08', name: 'Flat_Minus_Dash', concept: 'Pausa, enlace', use: 'Separadores horizontales', src: '/svg/illustrations/08-Flat_Minus_Dash.svg' },
  { id: '09', name: 'Flat_Plus_Sign', concept: 'Añadir, positivo', use: 'Acordeones (Desplegar)', src: '/svg/illustrations/09-Flat_Plus_Sign.svg' },
  { id: '10', name: 'Flat_Geo_Cluster', concept: 'Grupo, variedad', use: 'Pattern de fondo', src: '/svg/illustrations/10-Flat_Geo_Cluster.svg' },
  { id: '11', name: 'Flat_Wavy_Stack', concept: 'Frecuencia, voz', use: 'Agentes de IA (Voz/Audio)', src: '/svg/illustrations/11-Flat_Wavy_Stack.svg' },
  { id: '12', name: 'Flat_Abstract_D', concept: 'Dato, unidad', use: 'Bullet points destacados', src: '/svg/illustrations/12-Flat_Abstract_D.svg' },
  { id: '13', name: 'Flat_Sunrise', concept: 'Amanecer, inicio', use: 'Footer (Nuevo comienzo)', src: '/svg/illustrations/13-Flat_Sunrise.svg' },
  { id: '14', name: 'Flat_Totem', concept: 'Semáforo, pasos', use: 'Pasos del proceso (1, 2, 3)', src: '/svg/illustrations/14-Flat_Totem.svg' },
  { id: '15', name: 'Flat_Tri_Cluster', concept: 'Comunidad', use: 'Red de Partners (Icono)', src: '/svg/illustrations/15-Flat_Tri_Cluster.svg' },
];

const Assets: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="w-full bg-canvas text-ink font-sans">
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-6xl tracking-tighter">Assets</h1>
          <p className="font-body text-gray-500 mt-2">SVGs 3D y 2D con índice de referencia</p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-3xl font-bold tracking-tight">SVG 3D</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">{assets3d.length} items</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {assets3d.map((a, i) => (
              <div key={i} className="relative border border-gray-200 rounded-2xl bg-white/70 hover:bg-white transition-colors p-4 h-44 flex items-center justify-center" title={`${a.concept} — ${a.use}`}>
                <img src={a.src} alt={a.name} className="max-h-full max-w-full object-contain" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-ink text-white rounded-md">
                  <span className="font-mono text-xs">{a.id}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-body text-xs text-gray-500 truncate">{a.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-3xl font-bold tracking-tight">SVG 2D</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">{assets2d.length} items</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {assets2d.map((a, i) => (
              <div key={i} className="relative border border-gray-200 rounded-2xl bg-white/70 hover:bg-white transition-colors p-4 h-44 flex items-center justify-center" title={`${a.concept} — ${a.use}`}>
                <img src={a.src} alt={a.name} className="max-h-full max-w-full object-contain" />
                <div className="absolute top-3 left-3 px-2 py-1 bg-ink text-white rounded-md">
                  <span className="font-mono text-xs">{a.id}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-body text-xs text-gray-500 truncate">{a.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Assets;
