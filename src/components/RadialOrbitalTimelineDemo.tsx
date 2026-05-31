"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Diagnóstico",
    date: "Fase 1",
    content: "Mapeamento completo da sua operação atual, identificação de gargalos e oportunidades de crescimento.",
    curiosity: "Empresas que realizam um diagnóstico técnico reduzem custos operacionais em até 30% nos primeiros meses.",
    category: "Diagnóstico",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Estratégia",
    date: "Fase 2",
    content: "Definição de canais de aquisição, estruturação de funil e posicionamento da marca.",
    curiosity: "Uma boa estratégia de estruturação de funil pode aumentar o Lifetime Value (LTV) dos clientes em mais de 2.5x.",
    category: "Estratégia",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Execução",
    date: "Fase 3",
    content: "Implementação das melhorias estruturais, criação de landing pages e campanhas de conversão.",
    curiosity: "O tempo de carregamento de uma landing page afeta a conversão em até 20% a cada segundo de lentidão.",
    category: "Execução",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "Otimização",
    date: "Fase 4",
    content: "Análise contínua de dados, testes A/B, CRO e redução de Custo por Aquisição (CAC).",
    curiosity: "Testes A/B contínuos podem dobrar o faturamento de um e-commerce em menos de 12 meses.",
    category: "Otimização",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Escala",
    date: "Fase 5",
    content: "Aceleração do investimento em tráfego, abertura de novos canais e expansão acelerada.",
    curiosity: "Escalar campanhas guiadas por previsibilidade de dados reduz drasticamente o risco de ROI negativo.",
    category: "Escala",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 100,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: text content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-black tracking-widest uppercase mb-5 w-fit select-none">
              Metodologia Harpy
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
              Nossas <span className="text-brand-red">Soluções</span>
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              Enquanto seus concorrentes adivinham, você decide com dados. A Harpy aplica um método de <strong className="text-white font-extrabold">5 fases comprovadas</strong> — do diagnóstico à escala — para transformar sua operação em uma máquina previsível de vendas.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Diagnóstico técnico que revela onde você está perdendo dinheiro",
                "Estratégia personalizada para o seu nicho e margem",
                "Execução rápida: landing pages, anúncios e estrutura em dias",
                "Otimização contínua com testes A/B e redução de CAC",
                "Escala com previsibilidade — sem queimar verba",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-300 text-sm">
                  <span className="mt-1 w-4 h-4 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red block" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#diagnostico"
              onClick={(e) => { e.preventDefault(); document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red text-white font-black text-sm tracking-wide hover:bg-brand-red/90 transition-all duration-200 w-fit shadow-lg shadow-brand-red/20"
            >
              Quero meu diagnóstico gratuito
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Right: orbital timeline */}
          <div className="lg:w-1/2 w-full">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default RadialOrbitalTimelineDemo;
