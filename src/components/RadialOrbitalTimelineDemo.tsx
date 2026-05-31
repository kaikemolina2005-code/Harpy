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
        <div className="text-center mb-0">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Nossas <span className="text-brand-red">Soluções</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-medium">
            Explore cada uma de nossas frentes de aceleração.
          </p>
        </div>
        
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}

export default RadialOrbitalTimelineDemo;
