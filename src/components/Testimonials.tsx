import { useState } from 'react';
import { testimonials, Testimonial } from '../data';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  onCtaClick: () => void;
}

export default function Testimonials({ onCtaClick }: TestimonialsProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);

  // Divide testimonials into 3 arrays to form 3 distinct vertical lanes
  const sliceCount = Math.ceil(testimonials.length / 3);
  const lane1 = [...testimonials.slice(0, sliceCount), ...testimonials.slice(0, sliceCount)];
  const lane2 = [...testimonials.slice(sliceCount, sliceCount * 2), ...testimonials.slice(sliceCount, sliceCount * 2)];
  const lane3 = [...testimonials.slice(sliceCount * 2), ...testimonials.slice(sliceCount * 2)];

  const renderTestimonial = (item: Testimonial, key: string) => (
    <div 
      key={key} 
      onClick={() => setActiveTestimonial(item)}
      className="bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 rounded-2xl p-5 hover:border-brand-red/40 transition-colors backdrop-blur-md shadow-lg flex flex-col cursor-pointer group"
    >
      <div className="flex gap-0.5 text-yellow-500 text-xs mb-3 group-hover:scale-105 transition-transform origin-left">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
        ))}
      </div>
      <p className="text-neutral-300 text-xs leading-relaxed italic mb-4 line-clamp-4 group-hover:text-white transition-colors">"{item.text}"</p>
      <span className="inline-block self-start text-[10px] font-black px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">{item.result}</span>
      
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white ${
          item.colorType === 'green' ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : item.colorType === 'orange' ? 'bg-gradient-to-br from-brand-blue to-brand-blue/80' : 'bg-gradient-to-br from-brand-red to-brand-red/80'
        }`}>
          {item.avatarText}
        </div>
        <div>
          <div className="font-extrabold text-xs text-white leading-none mb-1">{item.author}</div>
          <div className="text-[10px] text-neutral-500 font-semibold">{item.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-black py-24 relative overflow-hidden text-white stay-dark" id="cases">
      
      {/* Soft light leaks */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Decorative Grid backdrop */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-dodge z-0 select-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-black tracking-widest uppercase mb-6 select-none">
            <Star className="w-3.5 h-3.5 fill-brand-red text-brand-red" />
            Cases Reais · Resultados Comprovados
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight mb-6">
            O que dizem <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">nossos parceiros</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nada fala mais alto do que o sucesso de quem confiou na nossa metodologia. Veja os dados de crescimento real de quem escalou com a Harpy.
          </p>
        </div>

        {/* Global Portfolio Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
          <div className="text-center p-2">
            <div className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent leading-none mb-2 select-none">+300</div>
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Contas Ativas</span>
          </div>
          <div className="text-center p-2">
            <div className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent leading-none mb-2 select-none">4.9/5</div>
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Avaliação Média</span>
          </div>
          <div className="text-center p-2">
            <div className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent leading-none mb-2 select-none">+500M</div>
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Faturamento Gerado</span>
          </div>
          <div className="text-center p-2">
            <div className="font-display font-black text-2xl sm:text-3xl bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent leading-none mb-2 select-none">98%</div>
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Taxa de Conversão</span>
          </div>
        </div>
      </div>

      {/* 3D Moving Marquee Block */}
      <div className="relative w-full h-[620px] overflow-hidden mb-16" style={{ perspective: '800px' }}>
        
        {/* Rotating Stages to mimic true 3D space depth */}
        <div 
          className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-auto"
          style={{
            transform: 'translateX(0) translateY(0) translateZ(-80px) rotateX(16deg) rotateZ(-4deg)',
            transformStyle: 'preserve-3d',
            width: '150vw',
            left: '-25vw'
          }}
        >
          
          {/* COLUMN 1 - MOVES UP */}
          <div 
            className="hidden lg:flex relative flex-col gap-5 h-full overflow-hidden w-72 flex-shrink-0"
            onMouseEnter={() => setHoveredColumn(5)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div 
              className={`flex flex-col gap-5 flex-shrink-0 animate-marquee-up`}
              style={{
                animationDuration: '40s',
                animationPlayState: hoveredColumn === 5 || activeTestimonial ? 'paused' : 'running'
              }}
            >
              {[...lane3, ...lane1].map((item, idx) => renderTestimonial(item, `${item.id}-${idx}-c5`))}
            </div>
          </div>

          {/* COLUMN 2 - MOVES DOWN */}
          <div 
            className="hidden md:flex relative flex-col gap-5 h-full overflow-hidden w-72 flex-shrink-0"
            onMouseEnter={() => setHoveredColumn(4)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div 
              className={`flex flex-col gap-5 flex-shrink-0 animate-marquee-down`}
              style={{
                animationDuration: '45s',
                animationPlayState: hoveredColumn === 4 || activeTestimonial ? 'paused' : 'running'
              }}
            >
              {[...lane2, ...lane3].map((item, idx) => renderTestimonial(item, `${item.id}-${idx}-c4`))}
            </div>
          </div>

          <div 
            className="relative flex flex-col gap-5 h-full overflow-hidden w-72 flex-shrink-0"
            onMouseEnter={() => setHoveredColumn(1)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div 
              className={`flex flex-col gap-5 flex-shrink-0 animate-marquee-up`}
              style={{
                animationPlayState: hoveredColumn === 1 || activeTestimonial ? 'paused' : 'running'
              }}
            >
              {lane1.map((item, idx) => renderTestimonial(item, `${item.id}-${idx}-c1`))}
            </div>
          </div>

          <div 
            className="relative flex flex-col gap-5 h-full overflow-hidden w-72 flex-shrink-0"
            onMouseEnter={() => setHoveredColumn(2)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div 
              className={`flex flex-col gap-5 flex-shrink-0 animate-marquee-down`}
              style={{
                animationPlayState: hoveredColumn === 2 || activeTestimonial ? 'paused' : 'running'
              }}
            >
              {lane2.map((item, idx) => renderTestimonial(item, `${item.id}-${idx}-c2`))}
            </div>
          </div>

          <div 
            className="hidden sm:flex relative flex-col gap-5 h-full overflow-hidden w-72 flex-shrink-0"
            onMouseEnter={() => setHoveredColumn(3)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <div 
              className={`flex flex-col gap-5 flex-shrink-0 animate-marquee-up`}
              style={{
                animationDuration: '50s',
                animationPlayState: hoveredColumn === 3 || activeTestimonial ? 'paused' : 'running'
              }}
            >
              {lane3.map((item, idx) => renderTestimonial(item, `${item.id}-${idx}-c3`))}
            </div>
          </div>

        </div>

        {/* Gradients to fade away boundaries smoothly */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none z-30 testimonial-gradient-top" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none z-30 testimonial-gradient-bottom" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white py-4 px-8 rounded-full text-xs font-black tracking-widest uppercase transition-all transform hover:scale-102 shadow-[0_10px_30px_rgba(219,36,41,0.3)] hover:shadow-[0_15px_40px_rgba(219,36,41,0.5)] cursor-pointer"
          >
            Quero ser o próximo case de sucesso
          </button>
        </div>
      </div>

      {/* Testimonial Modal Focus View */}
      <AnimatePresence>
        {activeTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md overflow-hidden"
            onClick={() => setActiveTestimonial(null)}
          >
            {/* Dynamic Background Lights */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand-red/30 rounded-full blur-[128px] pointer-events-none mix-blend-screen"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-brand-blue/30 rounded-full blur-[128px] pointer-events-none mix-blend-screen"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-neutral-900 border border-white/10 p-8 rounded-3xl max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveTestimonial(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white ${
                  activeTestimonial.colorType === 'green' ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : activeTestimonial.colorType === 'orange' ? 'bg-gradient-to-br from-brand-blue to-brand-blue/80' : 'bg-gradient-to-br from-brand-red to-brand-red/80'
                }`}>
                  {activeTestimonial.avatarText}
                </div>
                <div>
                  <div className="font-extrabold text-lg text-white leading-none mb-1">{activeTestimonial.author}</div>
                  <div className="text-sm text-neutral-400 font-semibold">{activeTestimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(activeTestimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-neutral-200 mb-8 italic">
                "{activeTestimonial.text}"
              </blockquote>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-neutral-400 text-sm font-medium uppercase tracking-wider">Resultado Alcançado</span>
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-black text-sm">
                  {activeTestimonial.result}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export {};
