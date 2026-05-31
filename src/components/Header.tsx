import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Wind, Sun, Moon, LayoutTemplate } from 'lucide-react';
import logoImg from './harpy-logo.png';
import logoDarkImg from './harpy-logo-dark.png';

interface HeaderProps {
  onDiagnosticoClick: () => void;
  onAssessoriaClick: () => void;
  currentView?: 'home' | 'landing-page-details' | 'clutch-details';
  onNavigateHome?: (sectionId?: string) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export default function Header({ 
  onDiagnosticoClick, 
  onAssessoriaClick, 
  currentView = 'home', 
  onNavigateHome,
  theme = 'dark',
  onToggleTheme
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home' && onNavigateHome) {
      onNavigateHome(anchorId);
      return;
    }
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentView !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
          scrolled ? 'pt-2 pb-1' : 'pt-5 pb-2'
        }`}
      >
        <div
          className="relative max-w-6xl mx-auto rounded-3xl h-18 flex items-center justify-between px-6 text-white cursor-default transition-all duration-700 shadow-2xl overflow-visible"
          style={{
            isolation: 'isolate',
          }}
        >
          {/* Glass background */}
          <div
            className="header-glass-bg absolute inset-0 rounded-3xl -z-20 backdrop-blur-md bg-gradient-to-br from-neutral-900/60 via-neutral-950/70 to-neutral-900/60"
            style={{
              WebkitBackdropFilter: 'blur(12px) saturate(160%)',
            }}
          />

          {/* Radial highlighted overlay */}
          <div className="header-radial-glow absolute inset-0 rounded-3xl -z-10 bg-[radial-gradient(ellipse_at_right,rgba(219,36,41,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Innermost shine highlights */}
          <div className="header-inner-border absolute inset-0 rounded-3xl border border-white/15 pointer-events-none shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.15),_inset_-1px_-1px_1px_1px_rgba(255,255,255,0.1)]" />

          {/* Subtle gradient border */}
          <div
            className="header-gradient-border absolute inset-0 rounded-3xl pointer-events-none -z-10"
            style={{
              padding: '1px',
              background: 'linear-gradient(135deg, rgba(219,36,41,0.45) 0%, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.08) 50%, rgba(30,61,149,0.3) 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center transition-transform duration-200 hover:scale-102 select-none group">
            <img 
              src={theme === 'dark' ? logoDarkImg : logoImg} 
              alt="Harpy Assessoria Logo" 
              className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Nav Menu */}
          <nav className="hidden md:flex items-center gap-1.5 bg-neutral-900/30 rounded-2xl p-1 border border-white/5">
            <button
              onClick={() => handleMenuClick('solucoes')}
              className="text-neutral-300 hover:text-white hover:bg-white/5 font-extrabold text-sm px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              Soluções
            </button>
            <button
              onClick={onAssessoriaClick}
              className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 font-extrabold text-sm px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Wind className="w-4 h-4 text-emerald-400" /> Assessoria Global
            </button>
            <button
              onClick={() => handleMenuClick('landing-pages')}
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 font-extrabold text-sm px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <LayoutTemplate className="w-4 h-4 text-blue-400" /> Landing Pages
            </button>
            <button
              onClick={() => handleMenuClick('especialistas')}
              className="text-neutral-300 hover:text-white hover:bg-white/5 font-extrabold text-sm px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              Especialistas
            </button>
            <button
              onClick={() => handleMenuClick('cases')}
              className="text-neutral-300 hover:text-white hover:bg-white/5 font-extrabold text-sm px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              Cases
            </button>
            <button
              onClick={() => handleMenuClick('faq')}
              className="text-neutral-300 hover:text-white hover:bg-white/5 font-extrabold text-sm px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTA & Toggle button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                aria-label="Alternar tema"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-105 transition-all cursor-pointer shadow-md select-none"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-brand-blue" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-400 rotate-hover animate-pulse" />
                )}
              </button>
            )}

            <button
              onClick={onDiagnosticoClick}
              className="hidden sm:inline-flex relative items-center gap-1.5 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-[0_4px_14px_rgba(219,36,41,0.4)] hover:shadow-[0_6px_20px_rgba(219,36,41,0.55)] active:translate-y-0.5 cursor-pointer"
            >
              Solicitar Consultoria
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-950/80 backdrop-blur-lg flex flex-col justify-center items-center text-center p-6 gap-6 transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <button
            onClick={() => handleMenuClick('solucoes')}
            className="text-xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer"
          >
            Soluções
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onAssessoriaClick();
            }}
            className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-2"
          >
            <Wind className="w-5 h-5 text-emerald-400" /> Assessoria Global
          </button>
          <button
            onClick={() => handleMenuClick('landing-pages')}
            className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer flex items-center gap-2"
          >
            <LayoutTemplate className="w-5 h-5 text-blue-400" /> Landing Pages
          </button>
          <button
            onClick={() => handleMenuClick('especialistas')}
            className="text-xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer"
          >
            Especialistas
          </button>
          <button
            onClick={() => handleMenuClick('cases')}
            className="text-xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer"
          >
            Cases
          </button>
          <button
            onClick={() => handleMenuClick('faq')}
            className="text-xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer"
          >
            FAQ
          </button>
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDiagnosticoClick();
            }}
            className="mt-4 bg-brand-red hover:bg-brand-red/90 text-white font-extrabold text-sm px-6 py-4 rounded-xl shadow-lg cursor-pointer"
          >
            Solicitar Consultoria
          </button>
        </div>
      )}
    </>
  );
}
