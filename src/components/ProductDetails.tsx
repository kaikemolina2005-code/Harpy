import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailsProps {
  productRoute: string;
  onBackToHome: () => void;
}

const productData: Record<string, any> = {
  'google-ads': {
    titulo: 'Google Ads',
    descricao: 'O pacote completo para dominar as buscas locais e aumentar a conversão da sua empresa.',
    icone: 'fa-brands fa-google',
    cor: '#4285F4',
  },
  'meta-ads': {
    titulo: 'Meta Ads',
    descricao: 'Estratégias de alto impacto no Facebook e Instagram para atrair e converter seu público-alvo.',
    icone: 'fa-brands fa-meta',
    cor: '#1877F2',
  },
  'ecommerce': {
    titulo: 'E-commerce',
    descricao: 'Lojas virtuais modernas, muito rápidas e totalmente otimizadas para escalar suas vendas online.',
    icone: 'fa-solid fa-cart-shopping',
    cor: '#FF6B6B',
  },
  'assessoria-marketplace': {
    titulo: 'Assessoria Mktplace',
    descricao: 'Operação técnica focada em ranquear seus produtos e escalar suas vendas nos principais canais.',
    icone: 'fa-solid fa-store',
    cor: '#FF9500',
  },
  'consultoria-marketplace': {
    titulo: 'Consultoria Mktplace',
    descricao: 'Inteligência e direcionamento estratégico para o seu time interno saber exatamente o que executar.',
    icone: 'fa-solid fa-lightbulb',
    cor: '#FFD700',
  },
};

export default function ProductDetails({ productRoute, onBackToHome }: ProductDetailsProps) {
  const product = productData[productRoute];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 mb-12 text-brand-blue hover:text-brand-blue/80 transition font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para soluções
        </button>

        {/* Product Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-brand-red/10 border border-brand-red/30 mb-6">
            <i className={`${product.icone} text-2xl`} style={{ color: product.cor }} />
          </div>

          <h1 className="text-5xl font-black mb-4 leading-tight">
            {product.titulo}
          </h1>

          <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {product.descricao}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Features Section */}
          <div>
            <h2 className="text-2xl font-black mb-6 text-brand-red">Recursos Principais</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red block" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Estratégia Personalizada</h3>
                  <p className="text-sm text-neutral-400">Adaptado especificamente para seu nicho e margem de lucro</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red block" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Execução Rápida</h3>
                  <p className="text-sm text-neutral-400">Implementação em dias, não em meses</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red block" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Otimização Contínua</h3>
                  <p className="text-sm text-neutral-400">Testes A/B e refinamento constante de resultados</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 border border-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red block" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Suporte Dedicado</h3>
                  <p className="text-sm text-neutral-400">Atendimento via WhatsApp e reuniões mensais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h2 className="text-2xl font-black mb-6 text-brand-blue">Por Que Escolher</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-brand-blue/5 border border-brand-blue/20">
                <h3 className="font-semibold mb-2 text-brand-blue">Expertise Comprovada</h3>
                <p className="text-sm text-neutral-300">Equipe com anos de experiência em estratégia e conversão digital</p>
              </div>

              <div className="p-4 rounded-lg bg-brand-red/5 border border-brand-red/20">
                <h3 className="font-semibold mb-2 text-brand-red">Resultados Mensuráveis</h3>
                <p className="text-sm text-neutral-300">Relatórios detalhados e KPIs acompanhados constantemente</p>
              </div>

              <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                <h3 className="font-semibold mb-2 text-yellow-400">ROI Positivo</h3>
                <p className="text-sm text-neutral-300">Modelo de serviço que coloca seu crescimento em primeiro lugar</p>
              </div>

              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h3 className="font-semibold mb-2 text-green-400">Escalabilidade</h3>
                <p className="text-sm text-neutral-300">Estrutura preparada para crescer com seu negócio</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brand-red/10 to-brand-blue/10 border border-brand-red/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Pronto para começar?</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como podemos transformar seu negócio em uma máquina previsível de vendas.
          </p>
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-black rounded-full hover:bg-brand-red/90 transition shadow-lg shadow-brand-red/20"
          >
            Quero um diagnóstico gratuito
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
