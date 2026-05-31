import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logoImg from './harpy-logo.png';

export default function Footer() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const revealThreshold = docHeight - 350; // offset based on average footer height
      if (scrolled >= revealThreshold) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className={`fixed bottom-0 left-0 right-0 -z-10 w-full bg-gradient-to-b from-[#08080c] to-[#050507] pt-20 pb-8 px-6 overflow-hidden transition-all duration-300`}
    >
      {/* Upper radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top_center,rgba(219,36,41,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* Grid wrapper */}
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${
        revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start text-left">
          
          {/* Brand & Contacts */}
          <div className="lg:col-span-4">
            <a href="#" onClick={handleScrollToTop} className="flex items-center select-none group mb-4">
              <img 
                src={logoImg} 
                alt="Harpy Assessoria Logo" 
                className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-xs mb-6">
              Assessoria especializada em Mercado Livre e Amazon. Aumente seu faturamento e escale sua operação com estratégias de alta performance e tecnologia global.
            </p>
            <div className="flex flex-col gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-red" /> São Vicente, SP - Brasil</span>
              <a href="mailto:harpyacessory@gmail.com" className="flex items-center gap-2 hover:text-brand-red transition-colors"><Mail className="w-4 h-4 text-brand-red" /> harpyacessory@gmail.com</a>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-red" /> (13) 98115-0810</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-white mb-6">Serviços</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold text-neutral-500">
              <li><a href="#" className="hover:text-brand-red transition-colors">Mercado Livre</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Amazon Seller</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Setup de ADS</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Otimização Grid</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Buy Box</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-white mb-6">Empresa</h4>
            <ul className="flex flex-col gap-4 text-xs font-bold text-neutral-500">
              <li><a href="#" className="hover:text-brand-red transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Como Trabalhamos</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Política</a></li>
            </ul>
          </div>

          {/* Column 4: WhatsApp CTA */}
          <div className="lg:col-span-4 bg-neutral-900/40 border border-white/5 rounded-2xl p-6.5">
            <h4 className="text-[10px] font-black tracking-widest uppercase text-white mb-2">Começar agora</h4>
            <p className="text-neutral-500 text-xs mb-4">Receba um diagnóstico gratuito da sua conta de marketplaces hoje mesmo.</p>
            <a 
              href="https://wa.me/5513981150810?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20loja." 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3.5 bg-brand-red hover:bg-brand-red/90 text-white font-black text-xxs tracking-widest uppercase rounded-xl flex items-center justify-center gap-1.5 shadow-[0_8px_24px_rgba(219,36,41,0.25)] select-none cursor-pointer"
            >
              Falar no WhatsApp
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Harpy Accessory. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
