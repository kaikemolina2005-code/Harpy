import React, { useEffect, useState } from 'react';
import {
  ArrowLeft, HelpCircle, ChevronDown, ChevronUp,
  ShieldCheck, Zap, TrendingUp, Search, Image, BarChart3,
  Target, Star, Package, Users
} from 'lucide-react';

interface AssessoriaMarketplaceDetailsProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string) => void;
  theme?: 'dark' | 'light';
}

const faqs = [
  {
    q: "Em quais marketplaces vocês atuam?",
    a: "Atuamos em todos os principais canais do Brasil: Mercado Livre, Amazon, Shopee, Magalu, Americanas, Casas Bahia e Via Varejo. Nossa equipe tem especialistas dedicados a cada plataforma, conhecendo profundamente os algoritmos e regras de ranqueamento de cada uma."
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "Os primeiros resultados de otimização de SEO e imagens costumam aparecer nas primeiras 2 a 4 semanas. Para campanhas de Product Ads, os resultados são imediatos — já no primeiro dia de ativação você vê aumento de impressões e cliques. Em média, nossos clientes registram crescimento de 30% a 80% no faturamento nos primeiros 60 dias."
  },
  {
    q: "Como funciona a otimização de anúncios?",
    a: "Nossa equipe analisa seus títulos, descrições, bullet points e imagens com base nas palavras-chave mais buscadas em cada marketplace. Reescrevemos tudo com foco em ranqueamento orgânico e conversão, e produzimos até 20 imagens profissionais por mês para destacar seus produtos da concorrência."
  },
  {
    q: "Vocês fazem gestão de Product Ads (anúncios patrocinados)?",
    a: "Sim. Criamos e gerenciamos campanhas de Product Ads no Mercado Livre, Amazon Sponsored Products, Shopee Ads e demais plataformas. Monitoramos diariamente os lances, palavras-chave e orçamento para garantir o melhor ACOS (custo por venda) possível."
  },
  {
    q: "E se minha conta tiver reputação baixa ou penalizações?",
    a: "Temos um protocolo específico de recuperação de reputação. Identificamos as causas raízes (atrasos, devoluções, reclamações), implementamos melhorias operacionais e trabalhamos ativamente para aumentar as avaliações positivas. Já recuperamos dezenas de contas que estavam em situação crítica."
  }
];

const pilares = [
  { icon: <Search className="w-5 h-5" />, titulo: "SEO de Marketplace", desc: "Títulos e descrições otimizados com as palavras-chave de maior volume para aparecer no topo das buscas orgânicas." },
  { icon: <Image className="w-5 h-5" />, titulo: "Imagens de Alta Conversão", desc: "Até 20 fotos profissionais por mês que destacam seus produtos e aumentam a taxa de clique (CTR)." },
  { icon: <BarChart3 className="w-5 h-5" />, titulo: "Product Ads Gerenciados", desc: "Campanhas patrocinadas com gestão diária de lances para o máximo retorno com o menor custo por venda." },
  { icon: <Star className="w-5 h-5" />, titulo: "Reputação & Reviews", desc: "Estratégias para aumentar avaliações positivas e manter sua conta com reputação verde e badge MercadoLíder." },
  { icon: <Package className="w-5 h-5" />, titulo: "Precificação Estratégica", desc: "Análise de concorrência em tempo real para posicionar seus preços de forma competitiva sem destruir margem." },
  { icon: <TrendingUp className="w-5 h-5" />, titulo: "Relatórios Semanais", desc: "Dashboard exclusivo com métricas de faturamento, ROAS, posição de ranqueamento e evolução mês a mês." },
];

const planos = [
  {
    nome: "Start",
    preco: "R$ 1.200/mês",
    destaque: false,
    desc: "Ideal para quem está começando nos marketplaces e quer estruturar a operação com inteligência.",
    inclui: [
      "Otimização de até 30 anúncios",
      "10 imagens produzidas/mês",
      "Gestão de Product Ads (1 canal)",
      "2 reuniões mensais",
      "Relatório mensal de performance",
    ]
  },
  {
    nome: "Growth",
    preco: "R$ 2.200/mês",
    destaque: true,
    desc: "Para vendedores que já faturam e querem escalar para múltiplos canais com operação profissional.",
    inclui: [
      "Otimização de até 100 anúncios",
      "20 imagens produzidas/mês",
      "Gestão de Product Ads (até 3 canais)",
      "4 reuniões mensais",
      "Relatório semanal + dashboard",
      "Estratégia de reputação",
      "Precificação competitiva",
    ]
  },
  {
    nome: "Elite",
    preco: "Sob consulta",
    destaque: false,
    desc: "Operação completa para grandes sellers com alto volume de SKUs e múltiplos canais simultâneos.",
    inclui: [
      "Catálogo completo sem limite de SKUs",
      "Imagens ilimitadas/mês",
      "Gestão full em todos os canais",
      "Reuniões semanais + gestor dedicado",
      "BI avançado com dados em tempo real",
      "Suporte prioritário 7 dias/semana",
      "Estratégia de expansão de canais",
    ]
  }
];

export default function AssessoriaMarketplaceDetails({ onBackToHome, onSelectPlan, theme = 'dark' }: AssessoriaMarketplaceDetailsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen py-24 px-4 sm:px-6 relative overflow-hidden animate-fade-in ${
      isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'
    }`}>

      {/* Ambient red glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-brand-red/8 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <button
          onClick={onBackToHome}
          className={`inline-flex items-center gap-2 text-xs font-bold mb-12 group transition-colors cursor-pointer px-4 py-2.5 rounded-full ${
            isDark
              ? 'bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10'
              : 'bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 shadow-sm'
          }`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Soluções Harpy
        </button>

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-[10px] font-black tracking-widest uppercase mb-6 select-none">
              <Zap className="w-3.5 h-3.5" />
              SERVIÇO PRINCIPAL HARPY
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-6">
              Domine os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-rose-500">
                Marketplaces
              </span>
              <br />e Escale seu<br />Faturamento
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mb-8 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Nossa assessoria técnica coloca seus produtos no topo das buscas do Mercado Livre, Amazon, Shopee e muito mais. Combinamos SEO de marketplace, imagens profissionais e gestão de anúncios patrocinados para multiplicar suas vendas sem desperdiçar verba.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center shadow-[0_15px_30px_rgba(219,36,41,0.3)] transition-all cursor-pointer"
              >
                Ver Planos e Preços
              </a>
              <button
                onClick={() => onSelectPlan('Assessoria Marketplace')}
                className={`font-black text-xs py-4 px-8 rounded-xl tracking-wider uppercase text-center transition-all cursor-pointer ${
                  isDark
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800'
                }`}
              >
                Falar com Especialista
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:col-span-5">
            <div className={`border rounded-3xl p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
              isDark
                ? 'bg-gradient-to-b from-brand-red/10 to-neutral-900/60 border-brand-red/20'
                : 'bg-white border-red-200'
            }`}>
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-brand-red animate-pulse" />

              <h3 className={`font-display font-black text-lg mb-6 uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-800'
              }`}>
                Resultados Médios dos Nossos Clientes
              </h3>

              <div className="space-y-5">
                {[
                  { label: "Crescimento de Faturamento", valor: "+67%", bar: 67, cor: "from-brand-red to-red-600" },
                  { label: "Redução de ACOS (custo/venda)", valor: "-38%", bar: 38, cor: "from-brand-red to-rose-500" },
                  { label: "Aumento de Posição Orgânica", valor: "+82%", bar: 82, cor: "from-red-500 to-brand-red" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-1.5">
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>{item.label}</span>
                      <span className="text-sm font-black text-brand-red">{item.valor}</span>
                    </div>
                    <div className={`h-2 w-full rounded-full overflow-hidden ${
                      isDark ? 'bg-neutral-900' : 'bg-neutral-200'
                    }`}>
                      <div className={`h-full bg-gradient-to-r ${item.cor} rounded-full`} style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest border-t ${
                isDark ? 'border-white/5 text-neutral-400' : 'border-neutral-200 text-neutral-500'
              }`}>
                <span>📊 Média dos últimos 12 meses</span>
                <span>•</span>
                <span>+300 clientes ativos</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── PILARES ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              O Que Fazemos por Você
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
              Cobertura completa para dominar cada aspecto da sua operação nos marketplaces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((p, i) => (
              <div key={i} className={`rounded-2xl p-6 transition-all duration-300 relative group overflow-hidden border ${
                isDark
                  ? 'bg-white/[0.025] hover:bg-white/5 border-white/5 hover:border-brand-red/30'
                  : 'bg-white border-neutral-200 hover:border-red-300 shadow-sm hover:shadow-md'
              }`}>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red to-transparent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                <div className="w-11 h-11 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-4 group-hover:scale-105 transition-transform border border-brand-red/20">
                  {p.icon}
                </div>
                <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-2 ${
                  isDark ? 'text-white' : 'text-neutral-800'
                }`}>{p.titulo}</h3>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CANAIS ── */}
        <div className={`mb-24 border rounded-3xl p-8 sm:p-12 ${
          isDark ? 'bg-neutral-900/30 border-white/5' : 'bg-white border-neutral-200 shadow-sm'
        }`}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-black text-brand-red uppercase tracking-widest block mb-1">Presença Total</span>
            <h3 className={`font-display font-black text-xl sm:text-2xl uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>Canais que Gerenciamos</h3>
            <p className={`text-xs mt-2 leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}>Especialistas dedicados a cada plataforma, com conhecimento profundo de seus algoritmos.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { nome: "Mercado Livre", emoji: "🛒", cor: "from-yellow-500/20 to-yellow-600/10", borda: "border-yellow-500/20" },
              { nome: "Amazon", emoji: "📦", cor: "from-orange-500/20 to-orange-600/10", borda: "border-orange-500/20" },
              { nome: "Shopee", emoji: "🛍️", cor: "from-orange-600/20 to-red-500/10", borda: "border-orange-600/20" },
              { nome: "Magalu", emoji: "🏪", cor: "from-blue-500/20 to-blue-600/10", borda: "border-blue-500/20" },
              { nome: "Americanas", emoji: "🔴", cor: "from-red-500/20 to-red-600/10", borda: "border-red-500/20" },
              { nome: "Via Varejo", emoji: "🏬", cor: "from-purple-500/20 to-purple-600/10", borda: "border-purple-500/20" },
            ].map((canal, i) => (
              <div key={i} className={`rounded-2xl p-4 text-center border bg-gradient-to-b ${canal.cor} ${canal.borda} transition-all hover:scale-105`}>
                <div className="text-3xl mb-2">{canal.emoji}</div>
                <div className={`text-[11px] font-black uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-neutral-800'
                }`}>{canal.nome}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROCESSO ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Como Funciona a Assessoria
            </h2>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-2">
              Processo estruturado para resultados consistentes e crescimento sustentável
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", titulo: "Diagnóstico", desc: "Auditoria completa da sua conta, anúncios, reputação e concorrência." },
              { num: "02", titulo: "Estratégia", desc: "Plano personalizado com metas de faturamento e cronograma de ações." },
              { num: "03", titulo: "Otimização", desc: "Reescrita de títulos, imagens profissionais e configuração de ads." },
              { num: "04", titulo: "Escala", desc: "Expansão para novos canais e aumento gradual de verba em ads." },
              { num: "05", titulo: "Relatório", desc: "Reuniões periódicas com dados, aprendizados e próximos passos." },
            ].map((step, i) => (
              <div key={i} className={`border rounded-xl p-5 text-center transition-all duration-300 ${
                isDark
                  ? 'bg-neutral-950 border-white/5 hover:border-brand-red/30'
                  : 'bg-neutral-50 border-neutral-200 hover:border-red-300'
              }`}>
                <div className="font-display font-black text-2xl text-brand-red mb-2">{step.num}</div>
                <h4 className={`font-extrabold text-[11px] uppercase tracking-wider mb-2 ${
                  isDark ? 'text-white' : 'text-neutral-800'
                }`}>{step.titulo}</h4>
                <p className={`text-[10px] leading-relaxed ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PLANOS ── */}
        <section id="planos" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-3xl mb-2 uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Planos de Assessoria
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Escolha o plano que mais se encaixa no tamanho da sua operação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planos.map((plano, i) => (
              <div key={i} className={`rounded-2xl p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                plano.destaque
                  ? isDark
                    ? 'bg-gradient-to-b from-brand-red/15 to-neutral-900/80 border-brand-red/40 shadow-[0_20px_40px_rgba(219,36,41,0.2)]'
                    : 'bg-white border-brand-red/40 shadow-[0_20px_40px_rgba(219,36,41,0.15)]'
                  : isDark
                    ? 'bg-neutral-900/50 border-white/5 hover:border-brand-red/20'
                    : 'bg-white border-neutral-200 hover:border-red-200 shadow-sm'
              }`}>
                {plano.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-red text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-md">
                    Mais Popular
                  </div>
                )}
                <div>
                  <h4 className={`font-display font-black text-lg uppercase tracking-wider mb-1 ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>{plano.nome}</h4>
                  <div className="text-2xl font-black text-brand-red mb-3">{plano.preco}</div>
                  <p className={`text-xs leading-relaxed mb-5 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>{plano.desc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {plano.inclui.map((item, j) => (
                      <li key={j} className={`flex items-start gap-2.5 text-xs ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}>
                        <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onSelectPlan(`Assessoria Marketplace: ${plano.nome}`)}
                  className={`w-full font-black text-xs py-3 rounded-xl tracking-wider uppercase cursor-pointer transition-all ${
                    plano.destaque
                      ? 'bg-brand-red hover:bg-brand-red/90 text-white shadow-[0_8px_20px_rgba(219,36,41,0.3)]'
                      : isDark
                        ? 'bg-white/5 hover:bg-brand-red/10 hover:text-brand-red text-white border border-white/10 hover:border-brand-red/30'
                        : 'bg-neutral-100 hover:bg-red-50 hover:text-brand-red text-neutral-800 border border-neutral-200 hover:border-red-200'
                  }`}
                >
                  Contratar {plano.nome}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-10">
            * Todos os planos incluem relatório de performance. Contrato sem fidelidade mínima.
          </p>
        </section>

        {/* ── FAQ ── */}
        <div className={`mb-24 max-w-3xl mx-auto border-t pt-20 ${
          isDark ? 'border-white/5' : 'border-neutral-200'
        }`}>
          <div className="text-center mb-12">
            <h2 className={`font-display font-black text-2xl uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Dúvidas Frequentes
            </h2>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mt-2">
              Tudo o que você precisa saber antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`w-full border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isDark ? 'bg-neutral-900/30 border-white/5' : 'bg-white border-neutral-200 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors ${
                      isDark ? 'hover:bg-white/5' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <span className={`font-bold text-sm flex items-center gap-2.5 ${
                      isDark ? 'text-neutral-200' : 'text-neutral-800'
                    }`}>
                      <HelpCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    }
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden border-t ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } ${isDark ? 'border-white/5' : 'border-neutral-100'}`}>
                    <div className={`p-6 text-xs leading-relaxed ${
                      isDark ? 'text-neutral-400 bg-neutral-950/20' : 'text-neutral-600 bg-neutral-50'
                    }`}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA FINAL ── */}
        <div className={`border rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden flex flex-col items-center ${
          isDark
            ? 'bg-gradient-to-r from-brand-red/15 via-neutral-950/60 to-red-900/15 border-brand-red/20'
            : 'bg-gradient-to-r from-red-50 via-white to-rose-50 border-red-200'
        }`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl z-0 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-3">
                {['ML', 'AM', 'SH', 'MG'].map((sig, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-brand-red/20 border-2 border-brand-red/40 flex items-center justify-center text-[10px] font-black text-brand-red">
                    {sig}
                  </div>
                ))}
              </div>
            </div>

            <h3 className={`font-display font-black text-2xl sm:text-3xl mb-4 uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Pronto para Dominar os Marketplaces?
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Nossos especialistas analisam sua operação gratuitamente e mostram exatamente onde você está perdendo dinheiro e como recuperar. Sem compromisso.
            </p>

            <button
              onClick={() => onSelectPlan('Assessoria Marketplace Diagnóstico')}
              className="bg-brand-red hover:bg-brand-red/90 text-white font-black text-xs py-4 px-10 rounded-full tracking-wider uppercase shadow-[0_15px_40px_rgba(219,36,41,0.35)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              Solicitar Diagnóstico Gratuito
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
