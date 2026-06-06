import React from 'react';
import { Check, Star, ShoppingCart, Package, Zap, Target, BarChart2, CircleDollarSign, Rocket, FileText, Search, Tv, Globe, Coins } from 'lucide-react';
import CardFlip from './ui/flip-card';

const Marketplaces = ({ onCtaClick }: { onCtaClick?: () => void }) => {
  const marketplaces = [
    {
      id: 1,
      title: 'Mercado Livre',
      logo: '/ml-logo.png',
      centerIcon: null, 
      logoClassName: 'scale-[1.8] mt-2',
      customCenterNode: (
        <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-b from-[#4A3B12] to-[#1F190D] p-[1px] shadow-[0_0_30px_rgba(245,199,84,0.15)] flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-b from-[#1A150A] to-[#0A0804] rounded-[1.25rem] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#F5C754] opacity-[0.05]"></div>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF4D1] via-[#F5C754] to-[#B37B14] relative z-10 shadow-[inset_-3px_-3px_8px_rgba(100,50,0,0.6),_inset_2px_2px_4px_rgba(255,255,255,0.8),_0_4px_15px_rgba(245,199,84,0.5)]">
                <div className="absolute top-1 left-1.5 w-3 h-2 bg-white rounded-full blur-[1px] opacity-60 mix-blend-overlay rotate-[-30deg]"></div>
             </div>
          </div>
        </div>
      ),
      description: 'Estratégia completa para o #1 marketplace do Brasil.',
      hoverDescription: 'Desde SEO de anúncios até gestão de Mercado Ads e Buy Box: dominamos cada detalhe da plataforma para colocar sua marca no topo.',
      features: [
        { text: 'Otimização SEO de anúncios', icon: Check, iconColor: 'text-[#EAB308]', iconBg: 'bg-[#EAB308]/15' },
        { text: 'Gestão Mercado Ads Premium', icon: Zap, iconColor: 'text-[#F97316]', iconBg: 'bg-[#F97316]/15' },
        { text: 'Análise de Buy Box ML', icon: Target, iconColor: 'text-[#EC4899]', iconBg: 'bg-[#EC4899]/15' },
        { text: 'Otimização de catálogo', icon: BarChart2, iconColor: 'text-[#10B981]', iconBg: 'bg-[#10B981]/15' },
        { text: 'Gestão de reputação', icon: Star, iconColor: 'text-[#EAB308]', iconBg: 'bg-[#EAB308]/15' },
        { text: 'Estratégias de precificação', icon: CircleDollarSign, iconColor: 'text-[#D97706]', iconBg: 'bg-[#D97706]/15' },
      ]
    },
    {
      id: 2,
      title: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      centerIcon: null,
      customCenterNode: (
        <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-b from-[#162A4A] to-[#09151F] p-[1px] shadow-[0_0_30px_rgba(84,160,255,0.15)] flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-b from-[#07131A] to-[#03080A] rounded-[1.25rem] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#54A0FF] opacity-[0.05]"></div>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#BFE0FF] via-[#54A0FF] to-[#0B56B3] relative z-10 shadow-[inset_-3px_-3px_8px_rgba(0,30,100,0.6),_inset_2px_2px_4px_rgba(255,255,255,0.8),_0_4px_15px_rgba(84,160,255,0.4)]">
                <div className="absolute top-1 left-1.5 w-3 h-2 bg-white rounded-full blur-[1px] opacity-60 mix-blend-overlay rotate-[-30deg]"></div>
             </div>
          </div>
        </div>
      ),
      description: 'Especialistas no marketplace mais competitivo do mundo.',
      hoverDescription: 'Conquista de Buy Box, Sponsored Products, A+ Content e otimização FBA. Estratégias para escalar globalmente com ROAS positivo.',
      features: [
        { text: 'Conquista e manutenção Buy Box', icon: Check, iconColor: 'text-[#F59E0B]', iconBg: 'bg-[#F59E0B]/15' },
        { text: 'Campanhas Sponsored Products', icon: Rocket, iconColor: 'text-[#EC4899]', iconBg: 'bg-[#EC4899]/15' },
        { text: 'A+ Content e Enhanced Brand', icon: FileText, iconColor: 'text-[#F97316]', iconBg: 'bg-[#F97316]/15' },
        { text: 'Keyword research avançada', icon: Search, iconColor: 'text-[#3B82F6]', iconBg: 'bg-[#3B82F6]/15' },
        { text: 'Gestão de reviews e ratings', icon: Star, iconColor: 'text-[#EAB308]', iconBg: 'bg-[#EAB308]/15' },
        { text: 'FBA optimization', icon: Package, iconColor: 'text-[#8B5CF6]', iconBg: 'bg-[#8B5CF6]/15' },
      ]
    },
    {
      id: 3,
      title: 'Shopee',
      logo: 'https://logodownload.org/wp-content/uploads/2021/03/shopee-logo.png',
      centerIcon: ShoppingCart,
      customCenterNode: (
        <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-b from-[#4A1D11] to-[#1F0A06] p-[1px] shadow-[0_0_30px_rgba(255,107,0,0.15)] flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-b from-[#1A0804] to-[#0A0301] rounded-[1.25rem] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#FF6B00] opacity-[0.05]"></div>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD6B8] via-[#FF6B00] to-[#B32900] relative z-10 shadow-[inset_-3px_-3px_8px_rgba(100,15,0,0.6),_inset_2px_2px_4px_rgba(255,255,255,0.8),_0_4px_15px_rgba(255,107,0,0.4)]">
                <div className="absolute top-1 left-1.5 w-3 h-2 bg-white rounded-full blur-[1px] opacity-60 mix-blend-overlay rotate-[-30deg]"></div>
             </div>
          </div>
        </div>
      ),
      description: 'Cresça no marketplace que mais explode no Brasil.',
      hoverDescription: 'Gestão de Shopee Ads, Flash Sales, Lives e cashback. Estratégias específicas para o público da plataforma escalar suas vendas.',
      features: [
        { text: 'Shopee Ads Management', icon: Check, iconColor: 'text-[#F97316]', iconBg: 'bg-[#F97316]/15' },
        { text: 'Flash Sales e promoções', icon: Zap, iconColor: 'text-[#F97316]', iconBg: 'bg-[#F97316]/15' },
        { text: 'Seller Center optimization', icon: Target, iconColor: 'text-[#EC4899]', iconBg: 'bg-[#EC4899]/15' },
        { text: 'Live streaming strategy', icon: Tv, iconColor: 'text-[#06B6D4]', iconBg: 'bg-[#06B6D4]/15' },
        { text: 'Coin cashback campaigns', icon: Coins, iconColor: 'text-[#F59E0B]', iconBg: 'bg-[#F59E0B]/15' },
        { text: 'Cross-border facilitation', icon: Globe, iconColor: 'text-[#3B82F6]', iconBg: 'bg-[#3B82F6]/15' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden z-10" id="marketplaces">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Especialistas em cada Marketplace
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
            Estratégias específicas e otimizadas para cada plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketplaces.map((item) => (
            <div key={item.id} onClick={onCtaClick} className="cursor-pointer">
              <CardFlip
                title={item.title}
                description={item.description}
                subtitle={item.hoverDescription}
                features={item.features}
                logo={item.logo}
                centerIcon={item.centerIcon}
                logoClassName={(item as any).logoClassName}
                customCenterNode={(item as any).customCenterNode}
                color="#FF4D00"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplaces;
