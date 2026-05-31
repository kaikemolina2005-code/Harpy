import { SolutionNode, Testimonial, FAQItem, PricingPlan } from './types';

export const solutions: SolutionNode[] = [
  {
    id: 1,
    icon: '👑',
    title: 'Buy Box & Posicionamento',
    cat: 'STRATEGY',
    desc: 'Estratégias avançadas para conquistar e manter a Buy Box na Amazon e posições de destaque no Mercado Livre. Otimizamos preço, estoque, avaliações e performance competitiva.',
    energy: 95,
    status: 'CORE',
    relatedIds: [2, 4]
  },
  {
    id: 2,
    icon: '🗂️',
    title: 'Otimização de Catálogo',
    cat: 'CONTENT',
    desc: 'Otimização completa de títulos, fotos e descrições focada em SEO e conversão (Copywriting persuasivo). Transformamos seus anúncios comuns em campeões de vendas.',
    energy: 90,
    status: 'CORE',
    relatedIds: [1, 3]
  },
  {
    id: 3,
    icon: '🏷️',
    title: 'Engenharia de Ofertas',
    cat: 'PRICING',
    desc: 'Análise profunda de rentabilidade para criar canais de ofertas que vendem muito sem sacrificar seu lucro líquido. Precificação estratégica inteligente.',
    energy: 85,
    status: 'ACTIVE',
    relatedIds: [2, 4]
  },
  {
    id: 4,
    icon: '📊',
    title: 'Gestão de ADS & Tráfego',
    cat: 'TRAFFIC',
    desc: 'Gestão profissional de Mercado Ads, Amazon Sponsored e Shopee Ads. Foco total em ROAS positivo e escala sustentável do seu investimento.',
    energy: 100,
    status: 'ACTIVE',
    relatedIds: [1, 3, 5]
  },
  {
    id: 5,
    icon: '🔄',
    title: 'Fidelização & LTV',
    cat: 'RETENTION',
    desc: 'Estratégias para fidelizar clientes e aumentar o LTV. Criamos fluxos de recompra e comunicação ativa dentro de regras de conformidade.',
    energy: 75,
    status: 'GROWTH',
    relatedIds: [4]
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    q: 'Como funciona o fee mensal da Harpy Accessory?',
    a: 'Trabalhamos com um modelo híbrido: um valor fixo mensal (setup/manutenção) somado a uma comissão variável baseada estritamente no crescimento do faturamento nos canais assessorados. Isso garante alinhamento total de interesses.'
  },
  {
    id: 2,
    q: 'A Harpy atende quais marketplaces?',
    a: 'Somos especialistas de ponta no Mercado Livre, Amazon Brasil e Shopee, prestando assessoria completa e campanhas de anúncios nativos.'
  },
  {
    id: 3,
    q: 'Qual é o tempo médio para ver os primeiros resultados?',
    a: 'Normalmente identificamos "Quick Wins" (melhorias rápidas de SEO, precificação e redirecionamento de anúncios) que se refletem em vendas já nas primeiras 2 a 4 semanas. A escala sustentável consolida-se em um plano de 90 dias.'
  },
  {
    id: 4,
    q: 'O que é a Assessoria Global?',
    a: 'É a nossa assessoria premium focada na independência de canais. Desenvolvemos o seu e-commerce próprio utilizando um stack tecnológico global de ponta (Clerk, Ecwid, Vercel) com velocidade máxima, totalmente integrado com sua logística atual.'
  },
  {
    id: 5,
    q: 'Como realizamos o acompanhamento e relatórios?',
    a: 'Fornecemos análises em reuniões quinzenais, além de canais abertos de atendimento diretamente com os especialistas que cuidam da sua conta, garantindo máxima proximidade e agilidade.'
  },
  {
    id: 6,
    q: 'Preciso enviar fotos ou vídeos de alta qualidade?',
    a: 'O cliente envia os insumos brutos do produto e nossa equipe de design elabora layouts enriquecidos, conteúdo A+ na Amazon e banners de conversão.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    text: 'Nossas vendas no Mercado Livre estavam estagnadas, até conhecermos a assessoria da Harpy. A reorganização do nosso catálogo e os anúncios patrocinados mudaram tudo.',
    result: '📈 +280% de faturamento no ML',
    colorType: 'green',
    author: 'Ricardo Mendes',
    role: 'CEO · Eletrônicos Mendes',
    avatarText: 'RM'
  },
  {
    id: 2,
    stars: 5,
    text: 'Vendemos para um nicho industrial altamente competitivo. Com o trabalho estratégico de palavras-chave da Harpy na Amazon, reduzimos nosso ACoS pela metade.',
    result: '🎯 ACoS reduzido em 50%',
    colorType: 'orange',
    author: 'Juliana Santos',
    role: 'Sócia · Industrial Pro',
    avatarText: 'JS'
  },
  {
    id: 3,
    stars: 5,
    text: 'A velocidade com que a Harpy entregou nossa landing page e o criativo foi impressionante. Em 48 horas tínhamos um funil ativo gerando vendas no tráfego direto.',
    result: '🚀 Landing Page ativa em 48h',
    colorType: 'red',
    author: 'Carlos Ferreira',
    role: 'Founder · Casa Decor',
    avatarText: 'CF'
  },
  {
    id: 4,
    stars: 5,
    text: 'A transição para canal próprio com a Assessoria Global foi incrivelmente fluida. Agora temos margem limpa e nossa própria marca forte no ar.',
    result: '⚡ Lançamento e-commerce próprio',
    colorType: 'green',
    author: 'Patrícia Almeida',
    role: 'Diretora · Beauty+ Brasil',
    avatarText: 'PA'
  },
  {
    id: 5,
    stars: 5,
    text: 'Conquistamos o Buy Box em mais de 80% do nosso catálogo em pouquíssimo tempo. O suporte deles pelo Slack/WhatsApp é incrivelmente ágil.',
    result: '🏆 Conquista de Buy Box Amazon',
    colorType: 'orange',
    author: 'Lucas Oliveira',
    role: 'Importador · Tech Imports',
    avatarText: 'LO'
  },
  {
    id: 6,
    stars: 5,
    text: 'A transparência que eles têm no traqueamento de dados e ROAS é insuperável. Finalmente entendemos para onde vai cada centavo investido em publicidade.',
    result: '📊 Gestão 100% transparente',
    colorType: 'red',
    author: 'Mariana Rocha',
    role: 'Fundadora · Moda Trends',
    avatarText: 'MR'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'solo',
    name: 'Landing Solo',
    tag: 'ESSENCIAL',
    price: 'R$ 1.997',
    period: 'pagamento único',
    benefits: [
      '1 Landing Page de alta performance',
      'Copywriting persuasivo focado em vendas',
      'Design responsivo mobile-first',
      'Checkout de pagamento integrado',
      'Instalação de Pixel e acompanhamento básico',
      'Entrega garantida em até 48 horas*'
    ]
  },
  {
    id: 'pro',
    name: 'Landing Pro',
    tag: 'FUNIL COMPLETO',
    price: 'R$ 4.497',
    period: 'pagamento único',
    benefits: [
      'Estrutura de Solo-Page + Obrigado + Upsell',
      'Order Bump e Downsell prontos para ativação',
      'Setup inicial do provedor de e-mail marketing',
      '2 variações de Headlines e Oferta para Teste A/B',
      'Criação de criativos de alta conversão (Kits de Ads)',
      'Suporte técnico estendido de 30 dias'
    ]
  },
  {
    id: 'elite',
    name: 'Landing Elite',
    tag: 'ESCALA CORPORATIVA',
    price: 'R$ 8.997',
    period: 'pagamento único',
    benefits: [
      'Tudo dos pacotes Solo & Pro incluído',
      'Elaboração de Roteiro de VSL profissional',
      'Funil dinâmico multi-step com qualificação',
      'Automações customizadas (WhatsApp + CRM)',
      'Acompanhamento de mapa de calor em tempo real',
      '90 dias de suporte com testes A/B contínuos'
    ]
  }
];
