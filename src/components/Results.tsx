import React, { useState } from 'react';
import amazonAntesImg from './amazon-antes.png';
import amazonDepoisImg from './amazon-depois.png';
import shopeeAntesImg from './shopee-antes.png';
import shopeeDepoisImg from './shopee-depois.png';
import mlAntesImg from './ml-antes.png';
import mlDepoisImg from './ml-depois.png';

interface ResultCase {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  beforeImg: string;
  afterImg: string;
  align: 'left' | 'right';
}

const cases: ResultCase[] = [
  {
    id: 1,
    title: 'Mercado Livre',
    subtitle: 'Reorganização de catálogo, ofertas e ADS estratégicos',
    text: 'Saímos de uma operação reativa para uma dominância total de categoria. Implementamos precificação dinâmica e o Mercado Ads com foco em rentabilidade.',
    beforeImg: mlAntesImg,
    afterImg: mlDepoisImg,
    align: 'left'
  },
  {
    id: 2,
    title: 'Shopee',
    subtitle: 'Conquista de Selo Oficial e Ganho de Buy Box',
    text: 'Transformamos uma loja comum em uma referência na plataforma. Através de campanhas de Flash Sales e otimização SEO, o volume de pedidos triplicou em 60 dias.',
    beforeImg: shopeeAntesImg,
    afterImg: shopeeDepoisImg,
    align: 'right'
  },
  {
    id: 3,
    title: 'Amazon',
    subtitle: 'FBA Optimization e A+ Content Conversão',
    text: 'Focamos na experiência do cliente Amazon. Com conteúdos A+ e Enhanced Brand, a taxa de conversão saltou de 3.2% para 8.7%, reduzindo drasticamente o ACoS.',
    beforeImg: amazonAntesImg,
    afterImg: amazonDepoisImg,
    align: 'left'
  }
];

const ImageComparison = ({ beforeImg, afterImg, beforeLabel = "ANTES", afterLabel = "DEPOIS" }: { beforeImg: string, afterImg: string, beforeLabel?: string, afterLabel?: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-video lg:aspect-[16/10] rounded-2xl overflow-hidden select-none border border-white/10 group shadow-2xl bg-neutral-900">
      
      {/* After Image (Background) */}
      <img src={afterImg} alt="Depois" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
      
      {/* Before Image (Clipped) */}
      <img 
        src={beforeImg} 
        alt="Antes" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />

      {/* Labels */}
      <div className={`absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-white text-[10px] md:text-xs tracking-widest font-black uppercase z-10 transition-opacity duration-300 ${sliderPosition < 20 ? 'opacity-0' : 'opacity-100'}`}>
        {beforeLabel}
      </div>
      <div className={`absolute top-4 right-4 bg-brand-red/90 backdrop-blur-sm px-3 py-1.5 rounded text-white text-[10px] md:text-xs tracking-widest font-black uppercase z-10 transition-opacity duration-300 ${sliderPosition > 80 ? 'opacity-0' : 'opacity-100'}`}>
        {afterLabel}
      </div>

      {/* Invisible Range Input for accessibility & mobile-friendly smooth drag */}
      <input 
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
        aria-label="Controle de antes e depois"
      />

      {/* Slider Visuals */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20 pointer-events-none flex items-center justify-center transition-all duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-brand-red shadow-[0_4px_15px_rgba(219,36,41,0.8)] flex items-center justify-center absolute -left-[19px] border-2 border-white">
          <div className="flex gap-1.5">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M5 9L1 5L5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 9L5 5L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default function Results() {
  return (
    <section className="bg-black stay-dark py-24 px-6 relative overflow-hidden text-white w-full">
      {/* Dark overlay specifically calibrated for rich contrast and text readability */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none stay-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none stay-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(219,36,41,0.08)_0%,transparent_60%)] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
        <h2 className="text-white font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
          Resultados <span className="text-white">Reais</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-medium max-w-2xl mx-auto">
          A transformação que levamos para os nossos parceiros.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {cases.map((block) => (
          <div 
            key={block.id} 
            className={`flex flex-col gap-8 md:gap-16 items-center ${
              block.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            {/* Text Side */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center text-left">
              <div className="mb-4">
                <span className="inline-block bg-brand-red/10 border border-brand-red/20 text-brand-red font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  Case Study {block.id}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 dropdown-blur-md">
                  {block.title}
                </h3>
                <h4 className="text-brand-blue font-semibold text-lg max-w-sm mb-6 leading-tight">
                  {block.subtitle}
                </h4>
              </div>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                {block.text}
              </p>
            </div>

            {/* Slider Side */}
            <div className="w-full lg:w-7/12">
              <ImageComparison 
                beforeImg={block.beforeImg} 
                afterImg={block.afterImg} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
