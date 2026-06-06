"use client";

import { useRef, useState } from "react";

interface Produto {
  id: number;
  icone: string;
  titulo: string;
  descricao: string;
  incluso?: { texto: string }[];
  diferenciais: { titulo: string; descricao: string }[];
}

const produtos: Produto[] = [
  {
    id: 1,
    icone: "fa-brands fa-google",
    titulo: "Google Ads",
    descricao:
      "O pacote completo para dominar as buscas locais e aumentar a conversão da sua empresa.",
    incluso: [
      { texto: "<strong>Criação de Landing Page</strong> de alta conversão." },
      { texto: "<strong>Gestão de Google Ads</strong> completa." },
      { texto: "<strong>Google Meu Negócio</strong> gestão otimizada." },
      { texto: "<strong>Duas reuniões</strong> por mês." },
      { texto: "<strong>Atendimento</strong> via WhatsApp." },
    ],
    diferenciais: [
      {
        titulo: "Alta Conversão",
        descricao:
          "Design arquitetado para não ter distrações, focando 100% no clique e na compra do usuário.",
      },
      {
        titulo: "Modernidade",
        descricao:
          "Estética visual de alto padrão que gera confiança imediata no seu potencial cliente.",
      },
    ],
  },
  {
    id: 2,
    icone: "fa-brands fa-meta",
    titulo: "Meta Ads",
    descricao:
      "Estratégias de alto impacto no Facebook e Instagram para atrair e converter seu público-alvo.",
    incluso: [
      { texto: "<strong>Produção</strong> de 10 Criativos." },
      { texto: "<strong>Gestão completa</strong> do Meta Ads." },
      { texto: "<strong>Duas reuniões</strong> por mês." },
      { texto: "<strong>Atendimento</strong> via WhatsApp." },
    ],
    diferenciais: [
      {
        titulo: "Segmentação Precisa",
        descricao:
          "Alcançamos exatamente o perfil de cliente que tem potencial de compra.",
      },
      {
        titulo: "Retargeting Avançado",
        descricao:
          "Campanhas para perseguir e converter quem já visitou ou engajou com seu perfil.",
      },
      {
        titulo: "Otimização de ROI",
        descricao:
          "Acompanhamento constante para reduzir o custo por clique e maximizar seu retorno.",
      },
    ],
  },
  {
    id: 3,
    icone: "fa-solid fa-cart-shopping",
    titulo: "E-commerce",
    descricao:
      "Lojas virtuais modernas, muito rápidas e totalmente otimizadas para escalar suas vendas online.",
    incluso: [
      { texto: "<strong>Criação de E-commerce</strong> de alta conversão." },
      { texto: "<strong>Gestão completa</strong> do Google Ads." },
      { texto: "<strong>Google Meu Negócio</strong> gestão otimizada." },
      {
        texto: "<strong>Checkout Integrado</strong> pagamentos feitos na mesma página (sem redirecionar o cliente).",
      },
      { texto: "<strong>Integrado</strong> nativamente com seu CRM." },
      { texto: "<strong>Duas reuniões</strong> por mês." },
      { texto: "<strong>Atendimento</strong> via WhatsApp." },
    ],
    diferenciais: [
      {
        titulo: "Custo Benefício Real",
        descricao:
          "Apenas R$ 1.500/mês. Um custo de serviço muito baixo pelo nível de entrega.",
      },
      {
        titulo: "Atenção e Profissionalismo",
        descricao:
          "Diferencial humano: atendimento próximo, profissional e focado no seu faturamento.",
      },
      {
        titulo: "Gestores Experientes",
        descricao:
          "Campanhas controladas por quem realmente entende de estratégia de vendas, e não apenas de apertar botões.",
      },
    ],
  },
  {
    id: 4,
    icone: "fa-solid fa-store",
    titulo: "Assessoria Mktplace",
    descricao:
      "Operação técnica focada em ranquear seus produtos e escalar suas vendas nos principais canais.",
    incluso: [
      { texto: "<strong>Criação e Gestão</strong> de Product Ads." },
      { texto: "<strong>Otimização de anúncios</strong> (+20 imagens por mês)." },
      { texto: "<strong>Quatro reuniões</strong> mensais." },
    ],
    diferenciais: [
      {
        titulo: "Otimização de SEO",
        descricao:
          "Configuração técnica dos títulos e descrições para garantir ranqueamento orgânico no topo das buscas.",
      },
      {
        titulo: "Foco em Retorno",
        descricao:
          "Campanhas patrocinadas geridas estrategicamente para maximizar a visibilidade com lucro.",
      },
      {
        titulo: "Conversão Visual",
        descricao:
          "Refinamento profissional que destaca seus produtos dos concorrentes e transmite mais confiança.",
      },
    ],
  },
  {
    id: 5,
    icone: "fa-solid fa-lightbulb",
    titulo: "Consultoria Mktplace",
    descricao:
      "Inteligência e direcionamento estratégico para o seu time interno saber exatamente o que executar.",
    diferenciais: [
      {
        titulo: "Plano Acessível",
        descricao:
          "R$ 500 Mensais para ter um especialista lado a lado orientando suas decisões de e-commerce.",
      },
      {
        titulo: "Reuniões Periódicas",
        descricao:
          "4 encontros no mês (1x por semana) para análises de rotas e novos planejamentos táticos.",
      },
      {
        titulo: "Independência",
        descricao:
          "Transferência de know-how para que a sua própria equipe ganhe maturidade comercial.",
      },
    ],
  },
  {
    id: 7,
    icone: "fa-solid fa-window",
    titulo: "Landing Pages de Alta Conversão",
    descricao:
      "Páginas otimizadas para converter visitantes em clientes com design de alta performance.",
    incluso: [
      { texto: "<strong>Pronta em até 48h</strong> de desenvolvimento." },
      { texto: "<strong>Pixel & CAPI</strong> configurados e rastreados." },
      { texto: "<strong>Copy de alta conversão</strong> inclusa no pacote." },
      { texto: "<strong>Checkout sem atrito</strong> integrado nativamente." },
    ],
    diferenciais: [
      {
        titulo: "Alta Conversão Real",
        descricao:
          "Alcançamos 8% a 15% de conversão real — contra os 2%-4% que o marketplace entrega.",
      },
      {
        titulo: "Velocidade e Performance",
        descricao:
          "Otimizadas para carregar em qualquer dispositivo sem lentidão, com Core Web Vitals perfeitos.",
      },
      {
        titulo: "Resultados Comprovados",
        descricao:
          "Design arquitetado para não ter distrações, focando 100% no clique e na compra do usuário.",
      },
    ],
  },
  {
    id: 8,
    icone: "fa-solid fa-rocket",
    titulo: "Assessoria Clutch",
    descricao:
      "Soberania e independência para e-commerce de performance, sem comissão de plataforma.",
    incluso: [
      { texto: "<strong>Loja 100% sua</strong>, sem comissão de plataforma." },
      { texto: "<strong>Site veloz</strong> em qualquer dispositivo." },
      { texto: "<strong>Estoque sincronizado</strong> (Bling, Tiny, Shopify)." },
      { texto: "<strong>Dados e clientes são seus</strong> — independência total." },
    ],
    diferenciais: [
      {
        titulo: "Margem Cheia",
        descricao:
          "Venda direto ao cliente. Zero comissão de plataforma. LTV e recompra 100% seus.",
      },
      {
        titulo: "Independência Estratégica",
        descricao:
          "Saia do algoritmo do marketplace e construa relacionamento direto com seus clientes.",
      },
      {
        titulo: "Operação Consolidada",
        descricao:
          "Gestão centralizada de inventário, pedidos e relacionamento em uma única plataforma.",
      },
    ],
  },
];

export default function ProductCanvas() {
  const [expandidoId, setExpandidoId] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const arrastando = useRef(false);
  const fezArrasto = useRef(false);
  const inicioX = useRef(0);
  const scrollEsquerda = useRef(0);

  /* ── Arraste horizontal ── */
  const aoMouseDown = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    arrastando.current = true;
    fezArrasto.current = false;
    inicioX.current = e.pageX - canvasRef.current.offsetLeft;
    scrollEsquerda.current = canvasRef.current.scrollLeft;
    canvasRef.current.style.cursor = "grabbing";
  };

  const aoMouseSair = () => {
    arrastando.current = false;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  const aoMouseSoltar = () => {
    arrastando.current = false;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  const aoMouseMover = (e: React.MouseEvent) => {
    if (!arrastando.current || !canvasRef.current) return;
    e.preventDefault();
    const x = e.pageX - canvasRef.current.offsetLeft;
    const movimento = (x - inicioX.current) * 2;
    if (Math.abs(movimento) > 5) fezArrasto.current = true;
    canvasRef.current.scrollLeft = scrollEsquerda.current - movimento;
  };

  /* ── Arraste em toque ── */
  const aoToqueInicio = (e: React.TouchEvent) => {
    if (!canvasRef.current) return;
    arrastando.current = true;
    fezArrasto.current = false;
    inicioX.current = e.touches[0].pageX - canvasRef.current.offsetLeft;
    scrollEsquerda.current = canvasRef.current.scrollLeft;
  };

  const aoToqueFim = () => {
    arrastando.current = false;
  };

  const aoToqueMover = (e: React.TouchEvent) => {
    if (!arrastando.current || !canvasRef.current) return;
    const x = e.touches[0].pageX - canvasRef.current.offsetLeft;
    const movimento = (x - inicioX.current) * 2;
    if (Math.abs(movimento) > 5) fezArrasto.current = true;
    canvasRef.current.scrollLeft = scrollEsquerda.current - movimento;
  };

  /* ── Clique no cartão ── */
  const manipularCliqueCartao = (id: number, e: React.MouseEvent) => {
    if (fezArrasto.current) return;
    const jaExpandido = expandidoId === id;
    setExpandidoId(jaExpandido ? null : id);

    if (!jaExpandido && canvasRef.current) {
      setTimeout(() => {
        const cartao = canvasRef.current?.querySelector<HTMLElement>(
          `[data-card-id="${id}"]`
        );
        if (!cartao || !canvasRef.current) return;
        const rectCartao = cartao.getBoundingClientRect();
        const rectLista = canvasRef.current.getBoundingClientRect();
        const esquerda =
          canvasRef.current.scrollLeft +
          (rectCartao.left - rectLista.left) -
          rectLista.width / 2 +
          rectCartao.width / 2;
        const topo =
          canvasRef.current.scrollTop +
          (rectCartao.top - rectLista.top) -
          rectLista.height / 2 +
          rectCartao.height / 2;
        canvasRef.current.scrollTo({
          left: esquerda,
          top: topo,
          behavior: "smooth",
        });
      }, 400);
    }
  };

  const manipularFechar = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setExpandidoId(null);
  };

  return (
    <section
      id="solucoes"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050a15",
        color: "#ffffff",
      }}
    >
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* Background blobs */}
      <div
        className="pc-blob-1"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
          opacity: 0.6,
          width: 500,
          height: 500,
          background: "rgba(230,57,70,0.3)",
          top: -100,
          left: -100,
        }}
      />
      <div
        className="pc-blob-2"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(100px)",
          zIndex: 0,
          opacity: 0.6,
          width: 600,
          height: 600,
          background: "rgba(10,37,89,0.8)",
          bottom: -200,
          right: -100,
        }}
      />

      <header
        style={{
          position: "absolute",
          top: 40,
          left: 60,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            letterSpacing: 1,
            color: "#ffffff",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Ecossistema de{" "}
          <span style={{ color: "#e63946" }}>Soluções</span>
        </h1>
        <p
          style={{
            color: "#a8b2c1",
            fontSize: "1.2rem",
            marginTop: 5,
            fontWeight: 300,
          }}
        >
          Arraste para conhecer nossos serviços digitais.
        </p>
      </header>

      {/* Drag hint */}
      <div
        className="pc-drag-hint"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#a8b2c1",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 10,
          pointerEvents: "none",
          background: "rgba(0,0,0,0.4)",
          padding: "10px 20px",
          borderRadius: 30,
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <i className="fa-solid fa-arrows-left-right" />
        Clique e arraste para navegar
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          padding: "0 60px",
          overflowX: "auto",
          overflowY: "auto",
          position: "relative",
          zIndex: 5,
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        } as React.CSSProperties}
        onMouseDown={aoMouseDown}
        onMouseLeave={aoMouseSair}
        onMouseUp={aoMouseSoltar}
        onMouseMove={aoMouseMover}
        onTouchStart={aoToqueInicio}
        onTouchEnd={aoToqueFim}
        onTouchMove={aoToqueMover}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            paddingRight: 120,
            paddingTop: 60,
            alignItems: "center",
          }}
        >
          {produtos.map((produto) => {
            const expandido = expandidoId === produto.id;
            return (
              <article
                key={produto.id}
                data-card-id={produto.id}
                onClick={(e) => manipularCliqueCartao(produto.id, e)}
                style={{
                  background: expandido
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${
                    expandido
                      ? "rgba(230,57,70,0.4)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                  borderTop: `3px solid #e63946`,
                  borderRadius: 20,
                  width: 420,
                  height: expandido ? 980 : 520,
                  flexShrink: 0,
                  padding: "50px 40px",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "width 0.5s cubic-bezier(0.175,0.885,0.32,1.275), height 0.5s cubic-bezier(0.175,0.885,0.32,1.275), transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: expandido
                    ? "0 35px 60px rgba(230,57,70,0.25)"
                    : "0 25px 45px rgba(0,0,0,0.3)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: expandido ? "default" : "pointer",
                  transform: expandido ? "translateY(-5px)" : undefined,
                }}
                className={expandido ? "" : "pc-card-hover"}
              >
                {/* Sobreposição de gradiente interno */}
                <div
                  style={{
                    content: "",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0) 100%)",
                    zIndex: 0,
                    borderRadius: 20,
                    pointerEvents: "none",
                  }}
                />

                {/* Botão fechar */}
                <button
                  onClick={(e) => manipularFechar(e, produto.id)}
                  style={{
                    position: "absolute",
                    top: 25,
                    right: 25,
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    cursor: "pointer",
                    opacity: expandido ? 1 : 0,
                    pointerEvents: expandido ? "all" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, opacity 0.3s",
                    zIndex: 10,
                  }}
                  className="pc-close-btn"
                >
                  <i className="fa-solid fa-xmark" />
                </button>

                {/* Número do cartão em marca d'água */}
                <div
                  style={{
                    fontSize: "5rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.04)",
                    position: "absolute",
                    top: 10,
                    right: 20,
                    lineHeight: 1,
                    zIndex: 0,
                    userSelect: "none",
                  }}
                >
                  {String(produto.id).padStart(2, "0")}
                </div>

                {/* Conteúdo principal (sempre visível) */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    height: expandido ? "auto" : "100%",
                    minHeight: expandido ? 380 : undefined,
                    transition: "height 0.4s",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      background: "rgba(230,57,70,0.1)",
                      borderRadius: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 30,
                      color: "#e63946",
                      fontSize: "2rem",
                      border: "1px solid rgba(230,57,70,0.2)",
                    }}
                  >
                    <i className={produto.icone} />
                  </div>

                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      marginBottom: 20,
                      lineHeight: 1.2,
                      color: "#ffffff",
                    }}
                  >
                    {produto.titulo}
                  </h2>

                  <p
                    style={{
                      color: "#a8b2c1",
                      fontSize: "1.15rem",
                      lineHeight: 1.6,
                      fontWeight: 300,
                      flexGrow: 1,
                    }}
                  >
                    {produto.descricao}
                  </p>

                  {/* Dica de CTA no rodapé */}
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      opacity: expandido ? 0 : undefined,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      pointerEvents: "none",
                    }}
                    className={expandido ? "" : "pc-card-footer"}
                  >
                    Clique para expandir{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{ color: "#e63946" }}
                    />
                  </div>
                </div>

                {/* Conteúdo expandido */}
                <div
                  style={{
                    opacity: expandido ? 1 : 0,
                    height: expandido ? "100%" : 0,
                    width: "100%",
                    overflow: expandido ? "auto" : "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition:
                      "opacity 0.4s ease, height 0.5s cubic-bezier(0.175,0.885,0.32,1.275), padding 0.4s ease",
                    borderTop: expandido
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(255,255,255,0)",
                    paddingTop: expandido ? 25 : 0,
                    paddingRight: expandido ? 10 : 0,
                    scrollbarWidth: "thin",
                    scrollbarColor: "#e63946 rgba(255,255,255,0.05)",
                    position: "relative",
                    zIndex: 1,
                  } as React.CSSProperties}
                >
                  {produto.incluso && (
                    <>
                      <h3
                        style={{
                          color: "#e63946",
                          fontSize: "1.25rem",
                          marginBottom: 15,
                          fontWeight: 600,
                          marginTop: 0,
                        }}
                      >
                        O que está incluso:
                      </h3>
                      <ul
                        style={{
                          listStyle: "none",
                          marginBottom: 25,
                          padding: 0,
                        }}
                      >
                        {produto.incluso.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: 14,
                              fontSize: "1rem",
                              color: "#a8b2c1",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                              fontWeight: 300,
                              lineHeight: 1.4,
                            }}
                          >
                            <i
                              className="fa-solid fa-plus"
                              style={{
                                color: "#e63946",
                                marginTop: 4,
                                fontSize: "1.1rem",
                                flexShrink: 0,
                              }}
                            />
                            <div
                              dangerouslySetInnerHTML={{ __html: item.texto }}
                            />
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <h3
                    style={{
                      color: "#e63946",
                      fontSize: "1.25rem",
                      marginBottom: 15,
                      fontWeight: 600,
                      marginTop: produto.incluso ? 0 : 0,
                    }}
                  >
                    Diferenciais Estratégicos:
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {produto.diferenciais.map((diff, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: 14,
                          fontSize: "1rem",
                          color: "#a8b2c1",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          fontWeight: 300,
                          lineHeight: 1.4,
                        }}
                      >
                        <i
                          className="fa-solid fa-check"
                          style={{
                            color: "#e63946",
                            marginTop: 4,
                            fontSize: "1.1rem",
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <strong
                            style={{
                              fontWeight: 600,
                              color: "#ffffff",
                              display: "block",
                              marginBottom: 3,
                              fontSize: "1.1rem",
                            }}
                          >
                            {diff.titulo}
                          </strong>
                          {diff.descricao}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
