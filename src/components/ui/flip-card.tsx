'use client';

import { cn } from '../../lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap, Star, Check, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: { text: string; icon: any }[];
  color?: string;
  logo?: string;
  centerIcon?: any;
  logoClassName?: string;
  customCenterNode?: React.ReactNode;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [],
  color = '#ff4d00',
  logo,
  centerIcon: CenterIcon,
  logoClassName,
  customCenterNode
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isML = title === 'Mercado Livre';
  const isAmazon = title === 'Amazon';

  const theme = {
    bg: isML ? 'bg-[#F5C754]' : isAmazon ? 'bg-[#54A0FF]' : 'bg-[#FF4D00]',
    text: isML ? 'text-[#F5C754]' : isAmazon ? 'text-[#54A0FF]' : 'text-[#FF4D00]',
    border: isML ? 'border-[#F5C754]/40' : isAmazon ? 'border-[#54A0FF]/40' : 'border-[#FF4D00]/40',
    borderDark: isML ? 'border-[#F5C754]/20' : isAmazon ? 'border-[#54A0FF]/20' : 'border-[#FF4D00]/20',
    borderButton: isML ? 'border-[#F5C754]/30' : isAmazon ? 'border-[#54A0FF]/30' : 'border-[#FF4D00]/30',
    shadow: isML ? 'shadow-[0_0_40px_rgba(245,199,84,0.1)]' : isAmazon ? 'shadow-[0_0_40px_rgba(84,160,255,0.1)]' : 'shadow-[0_0_40px_rgba(255,77,0,0.1)]',
    bgHover: isML ? 'hover:bg-[#F5C754]/10' : isAmazon ? 'hover:bg-[#54A0FF]/10' : 'hover:bg-[#FF4D00]/10',
  };

  return (
    <div
      style={{
        ['--primary' as any]: color ?? '#ff4d00',
      }}
      className="group relative h-[480px] w-full max-w-[340px] mx-auto [perspective:2000px] mt-2"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full stay-dark',
          '[transform-style:preserve-3d]',
          'transition-all duration-700 z-10',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Accent Front Face Container */}
        <div className="absolute inset-0 [transform:translateZ(-1px)] [backface-visibility:hidden] z-0 rounded-3xl">
          <div className={cn("absolute inset-x-2 top-0 h-10 rounded-t-3xl -translate-y-2 transition-transform duration-500 group-hover:-translate-y-0.5", theme.bg)} />
        </div>
        
        {/* Accent Back Face Container */}
        <div className="absolute inset-0 [transform:rotateY(180deg)_translateZ(-1px)] [backface-visibility:hidden] z-0 rounded-3xl">
          <div className={cn("absolute inset-x-2 top-0 h-10 rounded-t-3xl -translate-y-2 transition-transform duration-500 group-hover:-translate-y-0.5", theme.bg)} />
        </div>

        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'rounded-3xl',
            'bg-white/75 backdrop-blur-xl',
            'border border-white/70',
            'shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.9),_inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5),_0_8px_40px_rgba(0,0,0,0.08)]',
            'transition-all duration-700',
            'flex flex-col overflow-hidden',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Top Logo Section */}
          <div className="h-[35%] w-full bg-white/60 flex items-center justify-center p-6 px-10 relative overflow-hidden">
            <div className={cn("absolute top-0 inset-x-0 h-1", theme.bg)}></div>
            {logo && (
               <img src={logo} alt={`Logo ${title}`} className={cn("max-w-full max-h-full object-contain mix-blend-multiply", logoClassName)} />
            )}
          </div>

          {/* Bottom Section */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 stay-dark">
              {customCenterNode ? customCenterNode : (
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF8533] to-[#CC3D00] p-[1px] shadow-[0_0_30px_rgba(255,77,0,0.25)]">
                  <div className="w-full h-full bg-gradient-to-b from-[#FF6B00] to-[#E64500] rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 bg-gradient-to-b from-white/40 to-transparent"></div>
                    {CenterIcon ? <CenterIcon className="w-7 h-7 text-white relative z-10 drop-shadow-md" strokeWidth={1.5} /> : <div className="w-6 h-6 rounded-full bg-white/90 relative z-10 drop-shadow-md shadow-inner" />}
                  </div>
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight mb-3">
              {title}
            </h3>
            <p className="text-neutral-600 text-[12px] leading-relaxed max-w-[240px] mb-8">
              {description}
            </p>

            <div className={cn("border rounded-full px-5 py-2.5 flex items-center justify-center gap-2 transition-colors mt-auto", theme.border, theme.bgHover)}>
              <span className={cn("text-[10px] uppercase font-black tracking-widest", theme.text)}>Passe o mouse para ver</span>
              <RefreshCw className={cn("w-3.5 h-3.5", theme.text)} />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-3xl p-6 sm:p-8',
            'bg-white/75 backdrop-blur-xl',
            'border border-white/70',
            'shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.9),_inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5),_0_8px_40px_rgba(0,0,0,0.08)]',
            'flex flex-col',
            'transition-all duration-700',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          <div className="relative z-10 flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-2">
               {customCenterNode ? (
                 <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                   <div className="scale-[0.6] origin-center flex items-center justify-center">
                     {customCenterNode}
                   </div>
                 </div>
               ) : CenterIcon ? (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8533] to-[#CC3D00] flex items-center justify-center flex-shrink-0">
                    <CenterIcon className="w-4 h-4 text-white" />
                  </div>
               ) : null}
               <h3 className="text-[22px] font-black text-neutral-900">
                 {title}
               </h3>
            </div>
            
            <p className="line-clamp-4 text-[13px] font-medium leading-relaxed text-neutral-600">
              {subtitle}
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feature, index) => {
                const IconComponent = feature.icon || Check;
                const iconColor = feature.iconColor || 'text-[#FF4D00]';
                const iconBg = feature.iconBg || 'bg-[#2A1009]'; // A subtle warm dark bg if none provided

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-800 transition-all duration-500"
                    style={{
                      transform: isFlipped
                        ? 'translateX(0)'
                        : 'translateX(-10px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 50 + 100}ms`,
                    }}
                  >
                    <div className={cn("w-[26px] h-[26px] rounded-md flex items-center justify-center flex-shrink-0", iconBg)}>
                      <IconComponent className={cn("h-3.5 w-3.5", iconColor)} strokeWidth={3} />
                    </div>
                    <span className="leading-snug">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-4">
            <div
              className={cn(
                'group/start relative',
                'flex items-center justify-between',
                'p-[18px] rounded-2xl',
                'border',
                theme.borderButton,
                'transition-all duration-300',
                'hover:cursor-pointer',
                theme.bgHover,
              )}
            >
              <span className={cn("text-[14px] font-black tracking-wide transition-colors duration-300", theme.text)}>
                Falar com um especialista
              </span>
              <ArrowRight className={cn("h-4 w-4 transition-transform duration-300 group-hover/start:translate-x-1", theme.text)} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
