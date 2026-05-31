import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface AssessoriaClutchProps {
  onCtaClick: () => void;
  onLearnMoreClick: () => void;
}

export default function AssessoriaClutch({ onCtaClick, onLearnMoreClick }: AssessoriaClutchProps) {
  return (
    <section className="bg-transparent py-20 px-6 relative overflow-hidden text-white border-t border-white/5" id="assessoria-clutch">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,197,94,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Compact Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xxs font-black tracking-widest uppercase mb-5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ⚡ NOVO PRODUTO HARPY
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 tracking-tight">
            ASSESSORIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">CLUTCH</span>
          </h2>
          <div className="text-emerald-400 text-xxs font-black tracking-widest uppercase mb-4">Soberania & Independência para E-commerce de Performance</div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Pare de sofrer com os algoritmos e taxas de comissionamento exorbitantes. Portamos sua operação consolidada para uma estrutura independente moderna e veloz.
          </p>
        </div>

        {/* Persuasive Sales Card Pitch */}
        <div className="stay-dark bg-emerald-950/40 border border-emerald-400/20 hover:border-emerald-400/35 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto backdrop-blur-md shadow-[inset_2px_2px_1px_0_rgba(110,231,183,0.08),_inset_-1px_-1px_1px_1px_rgba(110,231,183,0.05),_0_15px_40px_rgba(5,40,25,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Persuasive copy content */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-white font-extrabold text-base sm:text-lg tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Dono Absoluto dos seus Clientes
              </h3>
              
              <p className="text-white text-sm leading-relaxed">
                Manter sua marca restrita aos marketplaces significa pagar de <strong className="text-white">16% a 22% de taxa por transação</strong>, sem poder falar diretamente com o cliente e dividindo espaço com anúncios de concorrentes diretos na sua própria página.
              </p>
              
              <p className="text-white text-sm leading-relaxed">
                A <strong className="text-emerald-400">Assessoria Global</strong> constrói um ecossistema serverless de altíssima velocidade (Vercel, Clerk e Ecwid), totalmente integrado ao seu estoque logístico (Bling ou Tiny). Você passa a vender direto, reter os dados e escalar o LTV com margem cheia e blindada.
              </p>

              {/* Core Feature bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-extrabold uppercase tracking-wide text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Ativo 100% de sua Propriedade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Sincronização de Estoque ERP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Hospedagem Edge Serverless</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Login Seguro Social Infiltrado</span>
                </div>
              </div>
            </div>

            {/* Interactive Badge and High-Conversion Stats CTA card */}
            <div className="md:col-span-5 bg-emerald-600/25 backdrop-blur-md border border-emerald-400/40 rounded-2xl p-6 text-center flex flex-col justify-center relative overflow-hidden group shadow-[inset_2px_2px_1px_0_rgba(110,231,183,0.2),_inset_-1px_-1px_1px_1px_rgba(110,231,183,0.1),_0_8px_32px_rgba(5,150,80,0.2)]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mb-2">Padrão Ouro Tecnológico</span>
              <div className="text-5xl font-black text-white mb-2 selection:bg-emerald-600">
                Margem Cheia
              </div>
              <p className="text-xs text-white uppercase tracking-wider mb-6">
                Reduza as taxas de comissões abusivas criando canais diretos de recompra permanente.
              </p>

              {/* "Saber mais" is the primary button in this card */}
              <button
                onClick={onLearnMoreClick}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm py-3.5 px-4 rounded-xl tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/25 border border-emerald-500/35"
              >
                Saber Mais e Ver Planos
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Small subtext to create visual trust */}
        <div className="stay-dark flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 text-xxs font-black tracking-widest text-white uppercase select-none">
          <span>⚡ SEM VALOR DE MANUTENÇÃO ABUSIVA</span>
          <span className="hidden sm:inline">•</span>
          <span>🔒 INTEGRADO À SUA LOGÍSTICA ATUAL</span>
          <span className="hidden sm:inline">•</span>
          <span>📈 CONTROLE INTEGRAL DE VENDAS</span>
        </div>

      </div>
    </section>
  );
}
