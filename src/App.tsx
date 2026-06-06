import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Scaling from './components/Scaling';
import Marketplaces from './components/Marketplaces';
import Results from './components/Results';
import ProductCanvas from './components/ProductCanvas';
import LandingPages from './components/LandingPages';
import LandingProductDetails from './components/LandingProductDetails';
import AssessoriaClutch from './components/AssessoriaClutch';
import AssessoriaClutchDetails from './components/AssessoriaClutchDetails';
import Testimonials from './components/Testimonials';
import DiagnosticForm from './components/DiagnosticForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'landing-page-details' | 'clutch-details'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('harpy-theme');
      return (saved as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  const diagnosticRef = useRef<HTMLDivElement>(null);
  const assessoriaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('harpy-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHomeAndScroll = (sectionId?: string) => {
    setCurrentView('home');
    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setCurrentView('home');
    setTimeout(() => {
      scrollToSection('diagnostico');
    }, 150);
  };

  return (
    <div className="bg-neutral-950 font-sans min-h-screen text-white select-none">
      
      {/* Scrollable Main Content wrapper with rounded bottom base for the reveal effect */}
      <div className="relative z-10 bg-neutral-950 pb-0 rounded-b-none shadow-none overflow-hidden">
        
        {/* Ambient background decoration spread across the entire length of the page */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle high-tech dotted grid pattern repeating throughout the page */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-80" />

          {/* Left guiding performance line */}
          <div className="absolute left-4 xl:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-red/0 via-brand-red/10 via-brand-blue/10 via-emerald-500/15 via-brand-blue/10 to-brand-red/0 hidden sm:block" />
          
          {/* Right guiding performance line */}
          <div className="absolute right-4 xl:right-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-red/0 via-brand-blue/10 via-brand-red/10 via-emerald-500/15 via-brand-blue/10 to-brand-red/0 hidden sm:block" />

          {/* Floating graphic element: Left margin eagle/harpy design cues (very subtle) */}
          <div className="absolute left-6 xl:left-16 top-[400px] text-brand-red/10 max-w-[120px] filter blur-[0.5px]">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16 animate-pulse duration-[8000ms]">
              <path d="M10 20 C 30 20, 50 10, 90 40 C 60 40, 40 45, 10 20 Z" />
              <path d="M15 30 C 35 30, 55 25, 85 50 C 65 50, 45 55, 15 30 Z" />
              <path d="M20 40 C 40 40, 60 35, 80 60 C 65 60, 50 65, 20 40 Z" />
            </svg>
          </div>

          <div className="absolute right-6 xl:right-16 top-[1500px] text-brand-blue/8 max-w-[120px]">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-20 h-20 rotate-180 opacity-60">
              <path d="M10 20 C 30 20, 50 10, 90 40 C 60 40, 40 45, 10 20 Z" />
              <path d="M15 30 C 35 30, 55 25, 85 50 C 65 50, 45 55, 15 30 Z" />
            </svg>
          </div>

          <div className="absolute left-8 xl:left-20 top-[3500px] text-emerald-500/10 max-w-[120px]">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16">
              <path d="M10 20 C 30 20, 50 10, 90 40 C 60 40, 40 45, 10 20 Z" />
            </svg>
          </div>

          {/* Large Ambient Glow Blobs dispersed throughout */}
          {/* Spot 1: Red glow left of Trust section */}
          <div className="absolute left-[-20%] top-[400px] w-[60%] aspect-square rounded-full bg-brand-red/5 filter blur-[120px] mix-blend-screen" />

          {/* Spot 2: Blue glow right of scaling section */}
          <div className="absolute right-[-25%] top-[1100px] w-[65%] aspect-square rounded-full bg-brand-blue/5 filter blur-[140px] mix-blend-screen" />

          {/* Spot 3: Red glow right of results section */}
          <div className="absolute right-[-15%] top-[2000px] w-[50%] aspect-square rounded-full bg-brand-red/5 filter blur-[110px] mix-blend-screen" />

          {/* Spot 4: Blue/Indigo glow left of Landing Pages */}
          <div className="absolute left-[-25%] top-[2800px] w-[60%] aspect-square rounded-full bg-brand-blue/5 filter blur-[130px] mix-blend-screen" />

          {/* Spot 5: Emerald glow right of Assessoria Clutch */}
          <div className="absolute right-[-20%] top-[3700px] w-[55%] aspect-square rounded-full bg-emerald-500/6 filter blur-[120px] mix-blend-screen" />

          {/* Spot 6: Red glow left of Testimonials / Diagnostic form */}
          <div className="absolute left-[-25%] top-[4600px] w-[60%] aspect-square rounded-full bg-brand-red/5 filter blur-[130px] mix-blend-screen" />

          {/* Spot 7: Blue glow right of FAQ */}
          <div className="absolute right-[-25%] top-[5400px] w-[55%] aspect-square rounded-full bg-brand-blue/4 filter blur-[120px] mix-blend-screen" />

          {/* Technical Grid Accents / Dynamic Concentric Rings dispersed at the borders */}
          <div className="absolute left-[-50px] xl:left-[-20px] top-[900px] w-24 h-24 rounded-full border border-neutral-800/40 flex items-center justify-center opacity-60">
            <div className="w-16 h-16 rounded-full border border-neutral-800/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-neutral-800/20" />
            </div>
          </div>

          <div className="absolute right-[-50px] xl:right-[-20px] top-[2400px] w-36 h-36 rounded-full border border-neutral-800/40 flex items-center justify-center opacity-60">
            <div className="w-24 h-24 rounded-full border border-neutral-800/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-neutral-800/20" />
            </div>
          </div>

          <div className="absolute left-[2%] top-[4800px] w-16 h-16 border-l border-t border-brand-red/10 opacity-70" />
          <div className="absolute right-[2%] top-[1800px] w-16 h-16 border-r border-b border-brand-blue/10 opacity-70" />
          <div className="absolute left-[3%] top-[2900px] w-12 h-12 border border-dashed border-neutral-800/30 rounded-full animate-spin-slow opacity-80" />
          <div className="absolute right-[4%] top-[4100px] w-14 h-14 border border-dashed border-emerald-500/20 rounded-full animate-spin-slow opacity-80" />
        </div>

        {/* Header with pass-down props */}
        <Header 
          onDiagnosticoClick={() => navigateToHomeAndScroll('diagnostico')}
          onAssessoriaClick={() => navigateToHomeAndScroll('assessoria-clutch-target')}
          currentView={currentView}
          onNavigateHome={navigateToHomeAndScroll}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {currentView === 'home' ? (
          <>
            {/* Hero Banner copy linking directly to form anchor */}
            <Hero onCtaClick={() => scrollToSection('diagnostico')} />

            {/* Trust Proofing & Media Section */}
            <Trust />

            {/* Scaling section containing KPI dashboards */}
            <Scaling onDiagnosticoClick={() => scrollToSection('diagnostico')} />

            {/* Essential Marketplaces coverage */}
            <Marketplaces onCtaClick={() => scrollToSection('diagnostico')} />
            
            {/* Product canvas solutions section */}
            <ProductCanvas />

            {/* Practical Transformation Results */}
            <Results />

            {/* Landing pages of high conversion */}
            <LandingPages 
              onCtaClick={() => scrollToSection('diagnostico')} 
              onLearnMoreClick={() => setCurrentView('landing-page-details')}
            />

            {/* Assessoria Clutch independent e-commerce solution */}
            <div id="assessoria-clutch-target" ref={assessoriaRef}>
              <AssessoriaClutch 
                onCtaClick={() => scrollToSection('diagnostico')} 
                onLearnMoreClick={() => setCurrentView('clutch-details')}
              />
            </div>

            {/* Testimonials moving 3D lane marquee */}
            <Testimonials onCtaClick={() => scrollToSection('diagnostico')} />

            {/* Lead capturing form */}
            <div id="diagnostic-target" ref={diagnosticRef}>
              <DiagnosticForm />
            </div>

            {/* Frequently Asked Questions */}
            <FAQ />
          </>
        ) : currentView === 'landing-page-details' ? (
          <LandingProductDetails 
            onBackToHome={() => navigateToHomeAndScroll()}
            onSelectPlan={handleSelectPlan}
            theme={theme}
          />
        ) : (
          <AssessoriaClutchDetails 
            onBackToHome={() => navigateToHomeAndScroll()}
            onSelectPlan={handleSelectPlan}
            theme={theme}
          />
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/5513981150810?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20loja."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center shadow-lg hover:scale-108 transition-all duration-300"
          title="Fale conosco no WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

      </div>

      <Footer theme={theme} />

    </div>
  );
}
export {};
