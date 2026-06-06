import { useState } from 'react';
import { faqItems } from '../data';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden stay-dark" id="faq">
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Esclareça suas principais dúvidas operacionais</p>
        </div>

        {/* List */}
        <div className="flex flex-col gap-3">
          {faqItems.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div 
                key={item.id} 
                className="bg-neutral-900/40 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                
                {/* Button header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left text-white bg-transparent hover:bg-white/[0.02] border-none outline-none cursor-pointer transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-red transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Answer body */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 text-neutral-300 text-xs sm:text-sm leading-relaxed text-left ${
                    isOpen ? 'pb-5 opacity-100 max-h-32' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.a}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export {};
