import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Check, ChevronRight, Flame, Smartphone, 
  CreditCard, BarChart3, FastForward, Sliders, Sparkles, 
  HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Zap
} from 'lucide-react';
import { pricingPlans } from '../data';

interface LandingProductDetailsProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string) => void;
  theme?: 'dark' | 'light';
}

export default function LandingProductDetails({ onBackToHome, onSelectPlan, theme = 'dark' }: LandingProductDetailsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const productFaqs = [
    {
      q: "O prazo de 48 horas realmente é garantido?",
      a: "Sim, para o plano Landing Solo! O prazo inicia imediatamente após o preenchimento do nosso formulário de briefing e o envio de todos os arquivos brutos do produto (fotos, vídeos e manual técnico)."
    },
    {
      q: "Preciso pagar mensalidade ou hospedagem?",
      a: "Diferente de plataformas comuns que exigem custos mensais de assinatura, nós entregamos o código limpo e otimizado. Você só precisará de um domínio próprio e de um serviço básico de hospedagem (com custo aproximado de R$ 15/mês) — nós cuidamos de toda a configuração inicial e publicação sem taxas adicionais de manutenção."
    },
    {
      q: "Quem cria os textos e o roteiro de vendas?",
      a: "Toda a copy do seu produto é elaborada por nossos redatores seniors especializados em e-commerce de performance. Desenvolvemosheadlines persuasivas, listas de benefícios, gatilhos de dor e urgência, e quebra sistemática de objeções."
    },
    {
      q: "Como as Landing Pages ajudam nas campanhas de tráfego pago (Meta/Google Ads)?",
      a: "Elas canalizam a atenção. Enquanto em um marketplace convencional o seu lead se depara com anúncios concorrentes e banners chamativos que dispersam a venda, a Landing Page blinda o tráfego. Adicionalmente, integramos a API de Conversões do Meta (CAPI) e Google Analytics no nível de código mais veloz, fornecendo inteligência precisa de pixel para que suas campanhas otimizem para o público ideal."
    },
    {
      q: "Quais são as opções de Checkout e Integrações?",
      a: "Suportamos todos os principais gateways e processadores de pagamento do mercado brasileiro, incluindo Yampi, Cartpanda, Appmax, Shopify, Mercado Pago e Stripe. Seu cliente clica e é redirecionado instantaneamente para concluir o pagamento de forma segura e limpa."
    }
  ];

  return (
    <main className={`min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden animate-fade-in animate-scale-up ${
      theme === 'light' ? 'bg-neutral-50 text-neutral-900' : 'bg-neutral-950 text-white'
    }`}>
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 text-xs font-bold mb-12 group transition-colors cursor-pointer px-4 py-2.5 rounded-full ${
            theme === 'light'
              ? 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 shadow-sm'
              : 'bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10'
          }`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Soluções Harpy
        </button>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-6 select-none animate-bounce">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Produto Exclusivo Harpy Accessory
            </div>
            
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
              A Máquina de Vendas <br />
              Definitiva para seu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
                Produto Campeão
              </span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mb-8 ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              Parar de depender apenas da busca orgânica e concorrência direta do Mercado Livre ou Amazon é o seu próximo grande salto. Fornecemos estruturas independentes de conversão implacável, onde sua oferta brilha sozinha com copy profissional, velocidade extrema no mobile e checkout blindado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#planos"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition-all cursor-pointer"
              >
                Explorar Estrutura de Planos
              </a>
              <button 
                onClick={() => onSelectPlan('Landing Geral')}
                className={`font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                }`}
              >
                Falar com Especialista
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className={`border rounded-3xl p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
              theme === 'light' ? 'bg-white border-blue-200' : 'bg-gradient-to-b from-blue-950/40 to-neutral-900/60 border-blue-500/20'
            }`}>
              
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              
              <h3 className={`font-display font-black text-lg mb-6 uppercase tracking-wider ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>
                Métricas de Impacto
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>Taxa de Conversão</span>
                    <span className="text-sm font-black text-blue-400">Até +350% vs Marketplace</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${
                    theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-900'
                  }`}>
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[92%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>Velocidade Mobile (PageSpeed)</span>
                    <span className="text-sm font-black text-emerald-400">Excelente (Nota 95+)</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${
                    theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-900'
                  }`}>
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[97%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>Retenção de Tráfego Direto</span>
                    <span className="text-sm font-black text-brand-red">Audiência Blindada (Foco 100%)</span>
                  </div>
                  <div className={`h-2 w-full rounded-full overflow-hidden ${
                    theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-900'
                  }`}>
                    <div className="h-full bg-gradient-to-r from-brand-red to-brand-blue rounded-full w-[95%]" />
                  </div>
                </div>
              </div>

              <div className={`mt-8 pt-6 flex items-center justify-between text-xxs font-black uppercase tracking-widest border-t ${
                theme === 'light' ? 'border-neutral-200 text-neutral-500' : 'border-white/5 text-neutral-400'
              }`}>
                <span>⚡ Otimizado para Meta Ads</span>
                <span>•</span>
                <span>📈 Escala com Margem Limpa</span>
              </div>
            </div>
          </div>

        </div>

        {/* COMPARISON BLOCK */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-wider ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Sua Oferta Blindada vs Concorrência
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wide mt-2">
              A matemática simples das margens de marketing digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Marketplace Comum */}
            <div className={`border rounded-3xl p-8 relative flex flex-col justify-between ${
              theme === 'light' ? 'bg-neutral-100 border-neutral-200' : 'bg-neutral-900/40 border-white/5'
            }`}>
              <div>
                <span className={`block text-xxs font-black tracking-wider uppercase mb-2 ${
                  theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
                }`}>Anúncio Comum de Marketplace</span>
                <div className={`text-5xl font-black mb-4 select-none ${
                  theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                }`}>2-4% CONV</div>
                <h4 className={`font-bold text-sm mb-2 ${
                  theme === 'light' ? 'text-neutral-700' : 'text-neutral-200'
                }`}>Fricção e Dispersão Elevada</h4>
                <p className={`text-xs leading-relaxed ${
                  theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
                }${
                  ''
                }`}>
                  Margens comprimidas por comissões altas, anúncios de rivais na sua própria página recomendados pela plataforma e zero controle do funil de dados de rastreamento.
                </p>
              </div>
              <div className={`mt-6 pt-4 border-t text-xxs font-medium uppercase tracking-widest select-none ${
                theme === 'light' ? 'border-neutral-300 text-neutral-500' : 'border-white/5 text-neutral-500'
              }`}>
                ❌ Dependência Cega de Terceiros
              </div>
            </div>

            {/* Premium Landing Page */}
            <div className="bg-blue-600/10 border-2 border-blue-500/60 rounded-3xl p-8 relative flex flex-col justify-between shadow-[0_15px_40px_rgba(29,78,216,0.15)] overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full group-hover:bg-blue-500/20 transition-colors" />
              <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full select-none">
                HARPY POWERED
              </div>

              <div>
                <span className="block text-xxs font-black text-blue-400 tracking-wider uppercase mb-2">Página de Venda dedicada</span>
                <div className="text-6xl font-black text-white mb-4 select-none">8-15% CONV</div>
                <h4 className="text-blue-400 font-bold text-sm mb-2">Atenção Canalizada ao Máximo</h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  Copywriting cirúrgico focado em criar um desejo ardente pelo produto, design mobile-first focado na leitura do dedo humano e fechamento instantâneo integrado sem distrações visuais.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-500/20 text-blue-300 text-xxs font-black uppercase tracking-widest select-none flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-blue-300 animate-pulse" /> Atração de Tráfego Altamente Rentável
              </div>
            </div>

          </div>
        </div>

        {/* TIMELINE METRICS */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-wider ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Pipeline de Desenvolvimento Expresso
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
              Estruturada em fases ágeis para colocar sua campanha no ar com precisão
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 select-none">
            
            <div className={`border rounded-2xl p-6 relative transition-all ${
              theme === 'light' ? 'bg-white border-neutral-200 hover:border-blue-300 shadow-sm' : 'bg-neutral-900/20 border-white/5 hover:border-blue-500/20'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">
                🎯
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>Fase 01</span>
              <h4 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Briefing & Ângulo</h4>
              <p className={`text-xxs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Estudamos seu produto campeão, seu público-alvo e os pontos mais profundos de quebra de objeção para direcionar o ângulo certo da oferta.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 relative transition-all ${
              theme === 'light' ? 'bg-white border-neutral-200 hover:border-blue-300 shadow-sm' : 'bg-neutral-900/20 border-white/5 hover:border-blue-500/20'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">
                ✍️
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>Fase 02</span>
              <h4 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Escrita Persuasiva</h4>
              <p className={`text-xxs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Nossos copywriters criam headlines magnéticas, a história do produto, bullets funcionais e estímulos de compra focados unicamente na sua mercadoria.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 relative transition-all ${
              theme === 'light' ? 'bg-white border-neutral-200 hover:border-blue-300 shadow-sm' : 'bg-neutral-900/20 border-white/5 hover:border-blue-500/20'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">
                🎨
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>Fase 03</span>
              <h4 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Design & Checkout</h4>
              <p className={`text-xxs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Unimos a copy a um design limpo, de alta conversão, totalmente veloz no ecossistema de celulares e perfeitamente integrado à sua marca.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 relative transition-all ${
              theme === 'light' ? 'bg-white border-neutral-200 hover:border-blue-300 shadow-sm' : 'bg-neutral-900/20 border-white/5 hover:border-blue-500/20'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">
                📊
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${
                theme === 'light' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>Fase 04</span>
              <h4 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Código & Pixels</h4>
              <p className={`text-xxs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Configuração dos pixels de rastreamento do Meta Ads, Google Analytics e a entrega da página limpa e operando com máxima eficiência de velocidade.
              </p>
            </div>

          </div>
        </div>

        {/* DETAILED BENEFITS GRID */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-wider ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Tecnologia Integrada & Otimizações
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wide mt-2">
              Os pilares que transformam tráfego pago em faturamento de alta conversão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Copy Estratégica de Conversão</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Técnicas de copywriting refinadas para converter visitantes céticos em compradores fervorosos. Headlines magnéticas, quebra de objeção e ancoragem de preço impecável.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Design Mobile-First Absoluto</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Mais de 80% do tráfego web é originado em smartphones. Nossas criações são testadas obsessivamente para telas pequenas, priorizando a densidade visual e acessibilidade para o toque de dedos.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Checkout Otimizado de Um Clique</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Integração fluida com os maiores gateways líderes de checkout. Menos cliques e formulários simplificados que reduzem a zero o abandono de carrinho gerando eficiência imediata.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Tracking & Pixel Integrado</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Acompanhamento preciso das ações. Instalação de Meta API (CAPI) e do Google Analytics 4 no nível bruto de código para evitar perdas de rastreio e otimizar os seus leilões de tráfego.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <FastForward className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Carregamento Ultra Veloz</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Segundos perdidos são lucros perdidos. Código ultra-otimizado e imagens severamente compactadas garantem o menor Load Time do mercado, maximizando pontos de qualidade em canais de mídia paga.
              </p>
            </div>

            <div className={`border rounded-2xl p-6 transition-all duration-300 ${
              theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 select-none">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-neutral-800' : 'text-white'
              }`}>Engenharia de Ofertas Integrada</h3>
              <p className={`text-xs leading-relaxed ${
                theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
              }`}>
                Auxílio no desenho dos kits de produtos e na estrutura de descontos de atacado (ofertas progressivas) para impulsionar brutalmente o ticket médio (AOV) de cada sessão.
              </p>
            </div>

          </div>
        </div>

        {/* PRICING PLANS SECTION */}
        <section id="planos" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-3xl mb-2 uppercase tracking-tight ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Investimento em Alta Conversão
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Acelere suas campanhas de tráfego próprio com a melhor estrutura do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 items-stretch">
            {pricingPlans.map((plan) => {
              const isPro = plan.id === 'pro';
              return (
                <div 
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 border transition-all duration-300 ${
                    isPro 
                      ? 'bg-blue-700/20 border-blue-500 shadow-[0_20px_50px_rgba(29,78,216,0.2)] md:scale-105 z-10' 
                      : theme === 'light'
                        ? 'bg-white border-neutral-200 hover:border-blue-400/50 shadow-sm'
                        : 'bg-neutral-905 border-white/5 hover:border-blue-500/30'
                  }`}
                >
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 rounded-full text-black text-[10px] font-black tracking-widest uppercase select-none">
                      Recomendado para Escala
                    </div>
                  )}

                  <div>
                    <span className="block text-xxs font-black text-neutral-500 mb-1.5 uppercase tracking-widest">{plan.tag}</span>
                    <h4 className={`font-display font-black text-lg mb-4 ${
                      isPro ? 'text-white' : theme === 'light' ? 'text-neutral-900' : 'text-white'
                    }`}>{plan.name}</h4>
                    
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className={`text-3xl font-black ${
                        isPro ? 'text-white' : theme === 'light' ? 'text-neutral-900' : 'text-white'
                      }`}>{plan.price}</span>
                    </div>
                    <span className={`block text-xxs font-bold uppercase tracking-wider mb-8 ${
                      isPro ? 'text-blue-200' : theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>{plan.period}</span>

                    <ul className="flex flex-col gap-3.5 mb-8">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-xs text-left ${
                          isPro ? 'text-white/90' : theme === 'light' ? 'text-neutral-700' : 'text-neutral-300'
                        }`}>
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => onSelectPlan(`Plano ${plan.name}`)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                      isPro 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 shadow-md' 
                        : theme === 'light'
                          ? 'bg-neutral-100 hover:bg-blue-50 hover:text-blue-700 border border-neutral-300 hover:border-blue-400 text-neutral-800'
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    }`}
                  >
                    Selecionar {plan.name}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              );
            })}
          </div>

          <p className="text-center text-xxs text-neutral-500 font-extrabold uppercase tracking-widest">
            * Prazos contados a partir do fornecimento completo de briefing e materiais gráficos. Garantias e termos sob contrato.
          </p>
        </section>

        {/* EXCLUSIVE FAQ */}
        <div className={`mb-24 max-w-3xl mx-auto border-t pt-20 ${
          theme === 'light' ? 'border-neutral-200' : 'border-white/5'
        }`}>
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl uppercase tracking-wider ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Dúvidas Frequentes
            </h2>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-2">
              Esclarecendo suas dúvidas sobre o ecossistema de Landing Pages
            </p>
          </div>

          <div className="space-y-4">
            {productFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    theme === 'light' ? 'bg-white border-neutral-200 shadow-sm' : 'bg-neutral-900/30 border-white/5'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors ${
                      theme === 'light' ? 'hover:bg-neutral-50' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className={`font-bold text-sm flex items-center gap-2.5 ${
                      theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'
                    }`}>
                      <HelpCircle className="w-4.5 h-4.5 text-blue-500 flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-4.5 h-4.5 text-neutral-400" /> : <ChevronDown className="w-4.5 h-4.5 text-neutral-400" />}
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden border-t ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } ${
                      theme === 'light' ? 'border-neutral-100' : 'border-white/5'
                    }`}
                  >
                    <div className={`p-6 text-xs leading-relaxed ${
                      theme === 'light' ? 'text-neutral-600 bg-neutral-50' : 'text-neutral-400 bg-neutral-950/20'
                    }`}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACTION CARD */}
        <div className={`border rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden flex flex-col items-center ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-blue-200'
            : 'bg-gradient-to-r from-blue-900/20 via-blue-950/40 to-indigo-950/20 border-blue-500/20'
        }`}>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className={`font-display font-black text-2xl sm:text-3xl mb-4 uppercase tracking-wider ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              Pronto para Estruturar sua Máquina de Lucro Líquido?
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${
              theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'
            }`}>
              Fale agora mesmo com nossa equipe e receba um direcionamento completo de qual pacote de Landing Pages ou Funis é o ideal para o estágio atual do seu faturamento em marketplace.
            </p>

            <button
              onClick={() => onSelectPlan('Landing Pages Geral')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs py-4.5 px-10 rounded-full tracking-wider uppercase shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              Solicitar Contato para Landing Page
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
