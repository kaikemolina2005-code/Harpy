import React, { useEffect, useState } from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import logoImg from './harpy-logo.png';
import logoDarkImg from './harpy-logo-dark.png';
import PrivacyPolicyModal from './PrivacyPolicyModal';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export default function Footer({ theme = 'dark' }: FooterProps) {
  const [revealed, setRevealed] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const revealThreshold = docHeight - 350;
      setRevealed(scrolled >= revealThreshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}

      <footer
        className="fixed bottom-0 left-0 right-0 -z-10 w-full bg-gradient-to-b from-[#08080c] to-[#050507] pt-16 pb-8 px-6 overflow-hidden transition-all duration-300"
      >
        {/* Upper radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top_center,rgba(219,36,41,0.06)_0%,transparent_60%)] pointer-events-none" />

        <div className={`max-w-6xl mx-auto transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Main row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-10">

            {/* LEFT: brand info */}
            <div className="flex flex-col gap-3 min-w-[220px]">
              <a href="#" onClick={handleScrollToTop} className="select-none group inline-flex">
                <img
                  src={theme === 'dark' ? logoDarkImg : logoImg}
                  alt="Harpy Assessoria Logo"
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </a>
              <p className="text-neutral-400 text-xs">Todos os direitos reservados.</p>
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-brand-red text-xs font-bold hover:underline text-left w-fit"
              >
                [Política de Privacidade]
              </button>
              <div className="mt-2 text-neutral-500 text-xs leading-relaxed space-y-0.5">
                <p>HARPY ASSESSORIA DE MARKETPLACE</p>
                <p>São Vicente – SP, Brasil</p>
                <p>harpyacessory@gmail.com</p>
                <p>(13) 98115-0810</p>
              </div>
            </div>

            {/* RIGHT: CTA + social */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-neutral-400 text-xs font-bold tracking-widest uppercase mb-1">Pronto para escalar?</p>
                <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight">
                  Fale com um<br />
                  <span className="text-brand-red">#especialistaHarpy</span>
                </h3>
              </div>
              <a
                href="https://wa.me/5513981150810?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20loja."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-black tracking-wide hover:bg-white/5 transition-colors w-fit"
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Diagnóstico Gratuito
              </a>
              <div>
                <p className="text-neutral-500 text-xs mb-3">Siga-nos nas redes sociais:</p>
                <div className="flex items-center gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/10 hover:border-brand-red/50 flex items-center justify-center text-neutral-400 hover:text-brand-red transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/10 hover:border-brand-red/50 flex items-center justify-center text-neutral-400 hover:text-brand-red transition-all">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/10 hover:border-brand-blue/50 flex items-center justify-center text-neutral-400 hover:text-brand-blue transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/5513981150810" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full border border-white/10 hover:border-emerald-500/50 flex items-center justify-center text-neutral-400 hover:text-emerald-400 transition-all">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-600">
            <p>© 2026 Harpy Assessoria. Todos os direitos reservados.</p>
            <button onClick={() => setShowPrivacy(true)} className="hover:text-neutral-400 transition-colors">
              Política de Privacidade
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}

