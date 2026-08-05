import { useState } from 'react';
import { ShoppingCart, Award, Play, CheckCircle2, ShieldCheck, X } from 'lucide-react';

export default function Trust() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-black pt-36 pb-20 px-6 overflow-visible relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Mercado Livre Card */}
          <div className="trust-glass-card lg:col-span-3 bg-neutral-900/60 hover:bg-neutral-900/80 border border-white/5 hover:border-yellow-500/20 rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden">
            {/* Liquid glass inner glow & shine overlays */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_right,rgba(250,204,21,0.08)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.08),_inset_-1px_-1px_1px_0_rgba(255,255,255,0.03)] glass-glow-highlight" />
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-bl-full group-hover:bg-yellow-400/10 transition-colors" />
            

            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-3">Estratégia de Crescimento LATAM</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Estratégias consolidadas para expandir e dominar o maior marketplace da América Latina. Otimizamos sua conta de ponta a ponta.
              </p>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Execução Cross-Border
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Otimização Local
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Video Frame */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div 
              onClick={() => setVideoOpen(true)}
              className="relative w-full aspect-video rounded-3xl border-3 border-brand-red/30 hover:border-brand-red/60 overflow-hidden bg-neutral-900 cursor-pointer shadow-[0_0_50px_rgba(219,36,41,0.15)] hover:shadow-[0_0_60px_rgba(219,36,41,0.3)] transition-all duration-300 group"
            >
              {/* Cover/Thumbnail Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:scale-103 transition-transform duration-500"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop')"
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 z-20">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                <h4 className="font-extrabold text-sm text-white mb-0.5 uppercase tracking-wide">Como funciona a Harpy</h4>
                <p className="text-xxs text-neutral-400 font-bold uppercase tracking-wider">Aceleração com Inteligência e Execução</p>
              </div>
            </div>
          </div>

          {/* Amazon Card */}
          <div className="trust-glass-card lg:col-span-3 bg-neutral-900/60 hover:bg-neutral-900/80 border border-white/5 hover:border-brand-blue/20 rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden">
            {/* Liquid glass inner glow & shine overlays */}
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_right,rgba(30,61,149,0.08)_0%,transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.08),_inset_-1px_-1px_1px_0_rgba(255,255,255,0.03)] glass-glow-highlight" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full group-hover:bg-brand-blue/10 transition-colors" />


            <div className="relative z-10">
              <h3 className="text-xl font-black text-white mb-3">Construção de Marca Global</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Construção técnica da sua marca no maior ecossistema de compras global, unindo otimização de campanhas ao poder das avaliações.
              </p>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Campanhas PPC e Orçamento
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Conteúdo A+ e Design de Loja
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="trust-glass-stats relative grid grid-cols-1 md:grid-cols-3 gap-8 py-11 border border-white/5 bg-neutral-950/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Liquid glass glow & shine overlays */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_bottom,rgba(219,36,41,0.05)_0%,transparent_80%)] pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none shadow-[inset_1px_1px_1px_0_rgba(255,255,255,0.08),_inset_-1px_-1px_1px_0_rgba(255,255,255,0.03)] glass-glow-highlight" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 text-brand-red mb-2 font-display text-4xl font-extrabold select-none">
              <Award className="w-8 h-8" />
              +50
            </div>
            <span className="text-neutral-300 text-xs font-bold uppercase tracking-wider leading-relaxed">
              Especialistas <br /> Harpy
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 text-sky-500 mb-2 font-display text-4xl font-extrabold select-none">
              <ShoppingCart className="w-8 h-8" />
              +300
            </div>
            <span className="text-neutral-300 text-xs font-bold uppercase tracking-wider leading-relaxed">
              Clientes <br /> Ativos
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 text-emerald-500 mb-2 font-display text-4xl font-extrabold select-none">
              <ShieldCheck className="w-8 h-8" />
              +500M
            </div>
            <span className="text-neutral-300 text-xs font-bold uppercase tracking-wider leading-relaxed">
              Faturamento no <br /> Portfólio
            </span>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {videoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-neutral-900 rounded-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Harpy Accessory" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
