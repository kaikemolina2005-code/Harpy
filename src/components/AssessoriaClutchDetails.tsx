import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Check, ChevronRight, KeyRound, ShoppingCart, 
  Server, ShieldCheck, Zap, HelpCircle, ChevronDown, ChevronUp,
  Award, Layers, Code2, Sparkles, Building2, Terminal
} from 'lucide-react';

interface AssessoriaClutchDetailsProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string) => void;
}

export default function AssessoriaClutchDetails({ onBackToHome, onSelectPlan }: AssessoriaClutchDetailsProps) {
  const [activeTab, setActiveTab] = useState<'court' | 'offense'>('court');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const clutchFaqs = [
    {
      q: "Como funciona a integração de estoque e faturamento?",
      a: "Nossa arquitetura Global se integra de forma invisível ao seu ERP (como Bling, Tiny) ou diretamente à sua conta de marketplace. Quando uma venda ocorre em sua loja própria ou no Mercado Livre, o estoque é sincronizado em tempo real de forma automática, evitando qualquer quebra ou duplicidade."
    },
    {
      q: "O código da loja realmente é meu por completo?",
      a: "Sim, sem amarras! Diferente de agências tradicionais que criam taxas de royalties ou retenção técnica, nós entregamos o repositório Git limpo, os arquivos brutos e a conta de hospedagem diretamente em seu nome. O ativo é 100% da sua empresa."
    },
    {
      q: "Por que usar o stack Vercel, Clerk e Ecwid?",
      a: "Porque é o padrão ouro das maiores startups americanas de e-commerce. A Vercel distribui seu site de forma instantânea e global (Edge Network), eliminando quedas mesmo durante grandes picos de tráfego. O Clerk cuida de logins blindados e o Ecwid gerencia o motor de catálogo, mantendo o checkout seguro e certificado pelo PCI Compliance."
    },
    {
      q: "A assessoria Global cuida também da captação de clientes para o site?",
      a: "Temos duas frentes: 'The Court' cuida de todo o design, engenharia de software e publicação inicial. Se você pretender que a nossa equipe de elite também opere as suas campanhas de publicidade paga (Meta Ads, Google Ads) e SEO para tracionar o site, oferecemos a recorrência mensal 'The Offense' de gestão premium de escala."
    },
    {
      q: "Quais são as formas de pagamento disponíveis no checkout?",
      a: "O checkout integrado suporta todas as carteiras e gateways do mercado brasileiro: Pix instantâneo com geração automática de QR Code, cartão de crédito com taxas competitivas de parcelamento de até 12x, boleto bancário e wallets seguras (Google Pay e Apple Pay), garantindo transições de compra fluidas e conversão altíssima."
    }
  ];

  return (
    <main className="bg-neutral-950 text-white min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden animate-fade-in animate-scale-up">
      
      {/* Decorative emerald ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white mb-12 group transition-colors cursor-pointer bg-neutral-900/50 border border-white/5 hover:border-white/10 px-4 py-2.5 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Soluções Harpy
        </button>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-6 select-none animate-bounce">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              SOLUÇÃO PREMIUM INDEPENDENTE
            </div>
            
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
              Portabilidade & <br />
              Independência com a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500">
                Assessoria Global
              </span>
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              Deixe de ser dependente apenas dos comissionamentos altos, regras mutáveis e concorrência indireta das buscas internas de marketplaces. Movemos seu faturamento consolidado de Mercado Livre ou Amazon para um canal 100% próprio de e-commerce sem travar sua logística atual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#arsenal"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center shadow-[0_15px_30px_rgba(16,185,129,0.25)] transition-all cursor-pointer"
              >
                Conhecer Nosso Arsenal (Planos)
              </a>
              <button 
                onClick={() => onSelectPlan('Assessoria Global')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center transition-all cursor-pointer"
              >
                Falar com Consultor Senior
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-b from-emerald-950/40 to-neutral-900/60 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              
              <h3 className="font-display font-black text-lg text-white mb-6 uppercase tracking-wider">
                Eficiência da Operação Global
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Independência de Taxas</span>
                    <span className="text-sm font-black text-emerald-400">Margem Blindada (Suas Regras)</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Velocidade (Site Serverless)</span>
                    <span className="text-sm font-black text-emerald-400">Nota Ótima (Edge Delivery)</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Domínio de Dados (LTV)</span>
                    <span className="text-sm font-black text-blue-400">Controle de Clientes (100%)</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-[92%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-neutral-400 text-xxs font-black uppercase tracking-widest">
                <span>⚡ Sem custos mensais de Plataforma</span>
                <span>•</span>
                <span>🔒 Segurança SSL & API</span>
              </div>
            </div>
          </div>

        </div>

        {/* SOLUTIONS GRID */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Soberania do seu Canal Próprio
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
              Pilares projetados para transformar sua marca em uma autoridade inabalável
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/[0.025] hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4 select-none group-hover:scale-105 transition-transform">
                ⚙️
              </div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-2">Base Técnica Pura</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Código JavaScript veloz, sem construtores pesados e engessados. Máxima experiência de navegação do usuário.</p>
            </div>

            <div className="bg-white/[0.025] hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4 select-none group-hover:scale-105 transition-transform">
                🏗️
              </div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-2">Omnichannel e ERPs</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Integração nativa total com Bling, Tiny e parceiros logísticos, sincronizando estoques e faturamento sem esforço.</p>
            </div>

            <div className="bg-white/[0.025] hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4 select-none group-hover:scale-105 transition-transform">
                🎯
              </div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-2">UX Otimizada</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Desenho de interface concebido por especialistas em neurovendas, reduzindo fricções ao carrinho de compra.</p>
            </div>

            <div className="bg-white/[0.025] hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 text-xl font-bold mb-4 select-none group-hover:scale-105 transition-transform">
                👑
              </div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-2">Dono Absoluto</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">Repositório Git entregue sem contratos de fidelização técnica. Seu site é seu patrimônio intelectual.</p>
            </div>

          </div>
        </div>

        {/* GLOBAL TECH STACK */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Arquitetura de Softwares de Elite
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
              Utilizamos tecnologias robustas e modernas para escalar sem gargalos e lentidão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6c47ff] text-white rounded-lg font-black text-xs mb-5">
                <KeyRound className="w-3.5 h-3.5" />
                🔐 Clerk Security
              </div>
              <span className="block text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-1">AUTENTICAÇÃO INTEGRADA</span>
              <h4 className="text-white font-extrabold text-base mb-3">Login Social & Contas Integradas</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Integração descomplicada de login para seus clientes via Google, Apple ou e-mail. Dispensa a infraestrutura pesada de manter bases de dados de senhas sensíveis, aumentando a conformidade com a LGPD.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-600 text-white rounded-lg font-black text-xs mb-5">
                <ShoppingCart className="w-3.5 h-3.5" />
                🛒 Ecwid Catalog
              </div>
              <span className="block text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-1">CATÁLOGO OTIMIZADO</span>
              <h4 className="text-white font-extrabold text-base mb-3">Sincronização de Dados Global</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Um motor de catálogo extremamente adaptável que mantém dados do seu e-commerce integrados com segurança. Fornece ferramentas robustas de cálculo de envios e prevenção antifraude nativa em tempo de processamento.
              </p>
            </div>

            <div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/30 text-white rounded-lg font-black text-xs mb-5">
                <Server className="w-3.5 h-3.5" />
                ▲ Vercel Platform
              </div>
              <span className="block text-emerald-400 text-[10px] font-black tracking-widest uppercase mb-1">INFRAESTRUTURA EDGE</span>
              <h4 className="text-white font-extrabold text-base mb-3">Hospedagem & CDN de Alta Performance</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">
                 Deploy automatizado que distribui sua loja em centenas de pontos de presença globais. Isso garante que a página responda aos cliques em milissegundos e suportará grandes picos de tráfego de campanhas patrocinadas.
              </p>
            </div>

          </div>
        </div>

        {/* TRANSPARENCY BLOCK */}
        <div className="mb-24 bg-neutral-900/30 border border-white/5 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Nosso Compromisso de Transparência</span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">Ativos de Código Real Que Rendem</h3>
            <p className="text-neutral-400 text-xs mt-1 leading-relaxed">Sua loja Global é gerada via código e permanece sua em definitivo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Estruturação Limpa', desc: 'Códigos escritos de forma clara, rápida de ajustar por qualquer programador sênior.' },
              { num: '02', title: 'Nenhum Lock-In', desc: 'Diferente de agências que trancam sua loja em servidores ocultos, você recebe tudo.' },
              { num: '03', title: 'Escala Saudável', desc: 'Sem custos de mensalidade proporcional a metas de vendas. O seu lucro permanece seu.' },
              { num: '04', title: 'Fácil de Auditar', desc: 'Repositório Git versionado, integrado e totalmente documentado sob demanda.' },
              { num: '05', title: 'Foco no Mobile', desc: 'Mais que apenas responsivo, projetado para o tamanho milimétrico da mão e celular.' }
            ].map((step, i) => (
              <div key={i} className="bg-neutral-950 border border-white/5 rounded-xl p-5 text-center transition-all duration-300 hover:border-emerald-500/30">
                <div className="font-display font-black text-2xl text-emerald-400 mb-2 glow-sm">{step.num}</div>
                <h4 className="text-white font-extrabold text-[11px] uppercase tracking-wider mb-2">{step.title}</h4>
                <p className="text-neutral-400 text-[10px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ARSENAL PLANS SECTION */}
        <section id="arsenal" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl text-white mb-2 uppercase tracking-tight">
              The Golden Arsenal
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Selecione os módulos necessários para o crescimento e dominância da sua marca
            </p>

            <div className="flex justify-center gap-4 mt-8 flex-wrap select-none">
              <button 
                onClick={() => setActiveTab('court')}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer border transition-all ${
                  activeTab === 'court' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 border-transparent text-white shadow-lg shadow-emerald-550/20' 
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                🏟️ Módulo Court (Desenvolvimento Único)
              </button>
              <button 
                onClick={() => setActiveTab('offense')}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer border transition-all ${
                  activeTab === 'offense' 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 border-transparent text-white shadow-lg shadow-emerald-550/20' 
                    : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                ⚡ Módulo Offense (Gestão Recorrente)
              </button>
            </div>
          </div>

          {activeTab === 'court' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Setup de Plataforma', price: 'R$ 3.500', desc: 'Configuração integral de ERPs (Bling, Tiny), gateway bancário de pagamento, frete nacional e suas políticas fiscais.' },
                { name: 'Branding Conceito', price: 'R$ 6.500', desc: 'Construção visual e conceitual de marca, criando livro de identidade, grafismos e guias de tom verbal persuasivos.' },
                { name: 'Design UX/UI Exclusivo', price: 'R$ 4.000', desc: 'Design exclusivo de rotas de conversão com layouts blindados contra desistência de compras e fluxo expressivo.' },
                { name: 'Catálogo de Produtos', price: 'R$ 2.000', desc: 'Estruturação estratégica voltada para SEO e indexação de buscas Google para seus 50 principais produtos campeões.' }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900/60 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-2">{item.name}</h4>
                    <div className="text-xl font-black text-emerald-400 mb-3">{item.price}</div>
                    <p className="text-neutral-400 text-xxs leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => onSelectPlan(`Global: ${item.name}`)}
                    className="w-full bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 text-white border border-white/10 hover:border-emerald-500/30 text-xxs font-black tracking-wider uppercase py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Contratar Setup
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Gestão de Tráfego Ads', price: 'R$ 3.500/mês', desc: 'Planejamento e execução de contingências, leilões diários de Meta Ads e Google Shopping focando em taxas de ROAS saudáveis.', label: 'ROAS & CAC' },
                { name: 'Rotina de SEO Orgânico', price: 'R$ 2.000/mês', desc: 'Link building ativo, posicionamento editorial técnico e ranqueamento sustentável nas buscas gratuitas do Google.', label: 'Tráfego Orgânico' },
                { name: 'Canais Sociais & Mídia', price: 'R$ 1.500/mês', desc: 'Garantimos ideias de formatos novos de conteúdos nativos, roteirização criativa e fomento estratégico de audiência.', label: 'Novos Seguidores' },
                { name: 'E-mail, CRM & WhatsApp', price: 'R$ 1.500/mês', desc: 'Automações expressas de recuperação de carrinhos de compra, campanhas de cupom e fortalecimento de recompra direta.', label: 'LTV Líquido' }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900/60 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[8px] font-black tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase border border-emerald-500/20 mb-2">{item.label}</span>
                    <h4 className="text-white font-extrabold text-xs uppercase tracking-wider mb-2">{item.name}</h4>
                    <div className="text-xl font-black text-emerald-400 mb-3">{item.price}</div>
                    <p className="text-neutral-400 text-xxs leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => onSelectPlan(`Global Recorrência: ${item.name}`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xxs font-black tracking-wider uppercase py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Contratar Gestão
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-xxs text-neutral-500 font-extrabold uppercase tracking-widest mt-12">
            * Para operações em escala que combinam múltiplos módulos de Setup e Gestão, nossa equipe desenha propostas integradas de faturamento.
          </p>
        </section>

        {/* EXCLUSIVE FAQ FOR CLUTCH */}
        <div className="mb-24 max-w-3xl mx-auto border-t border-white/5 pt-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              Dúvidas Frequentes da Assessoria Global
            </h2>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-2">
              Tudo o que você precisa dominar sobre a nossa soberania e e-commerce de performance
            </p>
          </div>

          <div className="space-y-4">
            {clutchFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-sm text-neutral-200 flex items-center gap-2.5">
                      <HelpCircle className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-4.5 h-4.5 text-neutral-400" /> : <ChevronDown className="w-4.5 h-4.5 text-neutral-400" />}
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 text-xs text-neutral-400 leading-relaxed bg-neutral-950/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACTION CARD */}
        <div className="bg-gradient-to-r from-emerald-900/20 via-emerald-950/40 to-teal-950/20 border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden flex flex-col items-center">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-4 uppercase tracking-wider">
              Pronto para Conquistar a Soberania Comercial?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
              Deixe de depender de algoritmos misteriosos e taxas exorbitantes de plataformas terceiras. Vamos analisar sua operação atual e desenhar uma transição assertiva e de alto impacto de canais.
            </p>

            <button
              onClick={() => onSelectPlan('Assessoria Global Geral')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-4.5 px-10 rounded-full tracking-wider uppercase shadow-[0_15px_40px_rgba(16,185,129,0.35)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              Solicitar Diagnóstico para Canal Próprio
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
