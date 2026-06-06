import { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles,
  User,
  Mail,
  Phone,
  Send
} from 'lucide-react';

interface ScalingProps {
  onDiagnosticoClick: () => void;
}

export default function Scaling({ onDiagnosticoClick }: ScalingProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Informações enviadas com sucesso! Um especialista entrará em contato.');
    setFormData({ nome: '', email: '', telefone: '' });
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden text-white" id="solucoes">
      {/* Glow effects - disabled for pure black */}
      {/* <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-0 pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: Conversive content */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xxs font-black tracking-widest uppercase mb-6 select-none">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Fale Direto Com Quem Resolve
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight mb-6">
            ESCALE VENDAS NO <br />
            <span className="text-yellow-400">MERCADO LIVRE,</span> <br />
            <span className="text-brand-blue">AMAZON,</span> <span className="text-orange-500">SHOPEE</span> <br />
            E MUITO MAIS.
          </h2>

          <div className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg space-y-4">
            <p className="font-bold text-white">
              Estratégias genéricas não escalam sua operação.
            </p>
            <p className="font-bold text-white">
              Sabemos que tratar um marketplace como um e-commerce comum é o maior erro das agências tradicionais. Seu negócio exige foco, campanhas integradas e leitura de dados em tempo real.
            </p>
            <p className="font-bold text-white">
              Como especialistas em Mercado Livre, Shopee e Amazon, nossa missão é clara:
            </p>
            <ul className="space-y-3 mt-4 ml-1">
              <li className="flex items-start gap-2">
                <span className="text-brand-blue mt-1">✓</span>
                <span><strong className="text-white">Inteligência de Dados:</strong> Analisamos o algoritmo para colocar seus anúncios na frente dos concorrentes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red mt-1">✓</span>
                <span><strong className="text-white">Eficiência:</strong> Reduzimos o seu Custo de Aquisição (CAC) otimizando cada centavo investido.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span><strong className="text-white">Escala de Margens:</strong> Não focamos apenas em faturamento, focamos no dinheiro que sobra no seu caixa ao final de cada mês.</span>
              </li>
            </ul>
          </div>


        </div>

        {/* Right column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative bg-white rounded-3xl border-2 border-neutral-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_28px_60px_rgba(30,61,149,0.12)] hover:border-brand-blue/40">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[80px] pointer-events-none -translate-y-12 translate-x-12" />

            <div className="relative z-10 mb-8">
              <h3 className="font-display font-black text-2xl text-neutral-900 tracking-tight mb-2">
                Falar com um Especialista
              </h3>
              <p className="text-neutral-500 text-sm">
                Preencha os dados abaixo e conecte-se com nosso time estratégico em instantes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue block p-3.5 pl-11 outline-none transition-all placeholder-neutral-400"
                    placeholder="João Silva"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    E-mail Profissional
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue block p-3.5 pl-11 outline-none transition-all placeholder-neutral-400"
                      placeholder="joao@empresa.com.br"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="tel"
                      id="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue block p-3.5 pl-11 outline-none transition-all placeholder-neutral-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white font-black text-sm tracking-wider uppercase px-6 py-4.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <Send className="w-4.5 h-4.5 text-brand-red group-hover:scale-110 transition-transform" />
                  Entrar em Contato com Especialista
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

