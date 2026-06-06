import { ArrowRight, Sparkles } from 'lucide-react';
import heroBgImg from './coloque_esse_menino_no_lugar_202605221737.jpeg';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-24 pb-12 overflow-hidden bg-black stay-dark">
      
      {/* Background Graphic & Premium Custom Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 select-none z-0 brightness-110 saturate-105 contrast-105"
        style={{
          backgroundImage: `url(${heroBgImg})`,
        }}
      />

      {/* Cinematic Overlays: darker on the left for maximum text readability, much softer and clear on the right */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(100deg, 
              rgba(10, 10, 14, 0.90) 0%, 
              rgba(10, 10, 14, 0.70) 35%, 
              rgba(10, 10, 14, 0.20) 60%, 
              transparent 100%
            ),
            linear-gradient(to bottom,
              rgba(10, 10, 14, 0.2) 0%,
              transparent 25%,
              transparent 80%,
              rgba(10, 10, 14, 0.6) 100%
            )
          `
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Persuasive copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-black tracking-widest uppercase mb-6 animate-pulse select-none">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            Assessoria #1 em Marketplaces
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none tracking-tight mb-6">
            DOMINE OS <br />
            <span className="text-brand-blue">MARKETPLACES:</span> <br />
            VENDA ATÉ 10X MAIS <br />
            <span className="text-brand-red">COM A HARPY.</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-8">
            Enquanto você tenta decifrar algoritmos sozinho, seus concorrentes dominam o espaço mais valioso do comércio digital. Nossa assessoria reescreve essa história através de tráfego, SEO de alta conversão e inteligência estratégica.
          </p>

          <button
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-500 text-black py-4.5 px-8 rounded-full text-base sm:text-lg font-black tracking-wider uppercase transition-all duration-300 transform hover:scale-103 shadow-[0_10px_30px_rgba(234,179,8,0.3)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.5)] cursor-pointer"
          >
            Quero Vender Mais com a Harpy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Right column: Empty/space so background is visible, or visual accent */}
        <div className="hidden lg:block lg:col-span-5" />

      </div>
    </section>
  );
}
