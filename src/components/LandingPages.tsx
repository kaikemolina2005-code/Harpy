import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface LandingPagesProps {
  onCtaClick: () => void;
  onLearnMoreClick: () => void;
}

export default function LandingPages({ onCtaClick, onLearnMoreClick }: LandingPagesProps) {
  return (
    <section className="bg-transparent py-20 px-6 relative overflow-hidden text-white" id="landing-pages">
      
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Compact, elegant Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xxs font-black tracking-widest uppercase mb-5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            🎯 LANDING PAGES DE ALTA CONVERSÃO
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 tracking-tight">
            Landing pages que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">vendem</span> enquanto você dorme.
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Seus produtos campeões merecem uma oferta exclusiva de alta performance, sem dividir a atenção com a concorrência visual do marketplace.
          </p>
        </div>

        {/* Persuasive Sales Card Pitch */}
        <div className="stay-dark bg-neutral-900/45 border border-white/5 hover:border-blue-500/10 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Persuasive copy content */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-white font-extrabold text-base sm:text-lg tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Blindagem de Tráfego & Margem
              </h3>
              
              <p className="text-white text-sm leading-relaxed">
                Anúncios normais em marketplaces convertem na média de <strong className="text-white">2% a 4%</strong> devido a taxas excessivas, distrações e anúncios concorrentes recomendados na mesma tela. 
              </p>
              
              <p className="text-white text-sm leading-relaxed">
                Com uma <strong className="text-blue-400">Landing Page Harpy Premium</strong> focado no mobile, a experiência é canalizada: copywriter sênior redige sua oferta direto na mente do leitor, reduzindo o abandono de carrinho. A taxa salta para <strong className="text-emerald-400 font-extrabold">8% a 15% de conversão real</strong>.
              </p>

              {/* Core Feature bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-extrabold uppercase tracking-wide text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Entrega Express em 48h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Copy Persuasiva Inclusa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Pixel & Capi Integrados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Checkout Simplificado</span>
                </div>
              </div>
            </div>

            {/* Interactive Badge and High-Conversion Stats CTA card */}
            <div className="md:col-span-5 bg-blue-650/10 border border-blue-500/20 rounded-2xl p-6 text-center flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full pointer-events-none" />
              
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest block mb-2">Foco em Performance</span>
              <div className="text-5xl font-black text-white mb-2 selection:bg-blue-600">
                8% a 15%
              </div>
              <p className="text-xs text-white uppercase tracking-wider mb-6">
                Taxa de conversão média projetada em campanhas de tráfego direto.
              </p>

              {/* "Saber mais" is the primary button in this card */}
              <button
                onClick={onLearnMoreClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm py-3.5 px-4 rounded-xl tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-blue-950/25 border border-blue-500/35"
              >
                Saber Mais e Ver Planos
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Small subtext to create visual trust */}
        <div className="stay-dark flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-xxs font-black tracking-widest text-white uppercase select-none">
          <span>⚡ CÓDIGO LIMPO & VELOZ</span>
          <span className="hidden sm:inline">•</span>
          <span>🔒 CHECKOUT CONFIRMADO</span>
          <span className="hidden sm:inline">•</span>
          <span>👑 SUPORTE COMPLETO</span>
        </div>

      </div>
    </section>
  );
}
