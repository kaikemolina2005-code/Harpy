import React, { useState } from 'react';
import { Sparkles, User, Building2, Phone, Mail, Check, RefreshCw, AlertTriangle } from 'lucide-react';

export default function DiagnosticForm() {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [challenge, setChallenge] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== channel));
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // O envio ainda não está integrado a um backend.
    // Por enquanto, exibimos uma tela de erro para o usuário.
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 1500);
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-visible" id="diagnostico">
      
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Pitch */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xxs font-black tracking-widest uppercase mb-6 select-none animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            Diagnóstico Gratuito · Plano de 90 dias
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none tracking-tight mb-6">
            Pronto para <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">transformar</span> <br />
            seus resultados?
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
            Preencha os dados ao lado com as informações da sua operação de e-commerce e receba um diagnóstico detalhado de nossa diretoria técnica, apontando gargalos de margem e um plano de 90 dias de crescimento.
          </p>

          {/* Bullet ticks */}
          <ul className="flex flex-col gap-3.5 mb-8 text-left select-none">
            {[
              'Raio-X de concorrência e catalogação grátis',
              'Proposta real de melhoria de tráfego ADS',
              'Avaliação de potencial para loja própria (E-commerce)',
              'Retorno qualificado em até 24h úteis'
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-semibold text-neutral-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs">
                  ✓
                </div>
                {text}
              </li>
            ))}
          </ul>

          {/* Social Trust Metrics */}
          <div className="flex gap-8 py-5 border-t border-white/5 w-full">
            <div>
              <div className="font-display font-black text-xl text-white select-none">+300</div>
              <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-1 block">Contas Ativas</span>
            </div>
            <div>
              <div className="font-display font-black text-xl text-white select-none">24h</div>
              <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-1 block">Tempo de Resposta</span>
            </div>
            <div>
              <div className="font-display font-black text-xl text-white select-none">+500M</div>
              <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-1 block">Gerenciados</span>
            </div>
          </div>

        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7">
          <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-visible backdrop-blur-xl">
            
            {/* Shimmer line on top */}
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-3xl bg-gradient-to-r from-brand-red via-brand-blue to-brand-red bg-[size:200%_auto] animate-shimmer" />

            <div className="text-center mb-8">
              <h3 className="font-display font-black text-lg sm:text-xl text-white mb-1.5">Diagnóstico Gratuito</h3>
              <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider">Insira suas informações de vendas</p>
            </div>

            {error ? (
              <div className="flex flex-col items-center text-center py-12 px-4 animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-2xl mb-6">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-lg text-white mb-2 uppercase tracking-wide">Não foi possível enviar</h4>
                <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-6">
                  Ocorreu um erro ao processar a sua solicitação e ela não pôde ser enviada no momento. Por favor, tente novamente mais tarde ou fale diretamente com a nossa equipe pelo WhatsApp.
                </p>
                <button
                  onClick={() => setError(false)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xxs tracking-widest uppercase px-6 py-3 rounded-full cursor-pointer transition-colors"
                >
                  Tentar novamente
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Text fields grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold placeholder-neutral-500 text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" 
                      placeholder="Seu nome *" 
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold placeholder-neutral-500 text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" 
                      placeholder="Nome da empresa *" 
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="tel" 
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold placeholder-neutral-500 text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" 
                      placeholder="WhatsApp (DDD) *" 
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold placeholder-neutral-500 text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]" 
                      placeholder="E-mail profissional *" 
                      required 
                    />
                  </div>
                </div>

                {/* Marketplace select pills (glowing / animated) */}
                <div>
                  <label className="block text-xxs font-black text-neutral-500 uppercase tracking-widest text-left mb-3">Quero atuar em: *</label>
                  <div className="grid grid-cols-3 gap-3">
                    
                    {/* ML */}
                    <div 
                      onClick={() => toggleChannel('ml')}
                      className={`relative flex items-center justify-center h-14 rounded-xl cursor-pointer border-2 transition-all select-none overflow-hidden ${
                        selectedChannels.includes('ml')
                          ? 'border-white bg-[#FFE600] text-blue-900 scale-103 shadow-[0_6px_20px_rgba(255,230,0,0.45)]'
                          : 'border-white/30 bg-white/80 backdrop-blur-md hover:bg-white text-neutral-700 shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.9),_0_4px_12px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <span className="font-black text-xs uppercase tracking-wider">Mercado Livre</span>
                      {selectedChannels.includes('ml') && (
                        <div className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-white text-blue-900 flex items-center justify-center text-[10px] font-black shadow-md">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    {/* Shopee */}
                    <div 
                      onClick={() => toggleChannel('shopee')}
                      className={`relative flex items-center justify-center h-14 rounded-xl cursor-pointer border-2 transition-all select-none overflow-hidden ${
                        selectedChannels.includes('shopee')
                          ? 'border-white bg-[#EE4D2D] text-white scale-103 shadow-[0_6px_20px_rgba(238,77,45,0.45)]'
                          : 'border-white/30 bg-white/80 backdrop-blur-md hover:bg-white text-neutral-700 shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.9),_0_4px_12px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <span className="font-black text-xs uppercase tracking-wider">Shopee</span>
                      {selectedChannels.includes('shopee') && (
                        <div className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-white text-[#EE4D2D] flex items-center justify-center text-[10px] font-black shadow-md">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    {/* Amazon */}
                    <div 
                      onClick={() => toggleChannel('amazon')}
                      className={`relative flex items-center justify-center h-14 rounded-xl cursor-pointer border-2 transition-all select-none overflow-hidden ${
                        selectedChannels.includes('amazon')
                          ? 'border-white bg-[#146eb4] text-white scale-103 shadow-[0_6px_20px_rgba(20,110,180,0.45)]'
                          : 'border-white/30 bg-white/80 backdrop-blur-md hover:bg-white text-neutral-700 shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.9),_0_4px_12px_rgba(0,0,0,0.06)]'
                      }`}
                    >
                      <span className="font-black text-xs uppercase tracking-wider">Amazon</span>
                      {selectedChannels.includes('amazon') && (
                        <div className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-white text-[#146eb4] flex items-center justify-center text-[10px] font-black shadow-md">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Dropdown service */}
                <div>
                  <select 
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  >
                    <option value="" disabled className="bg-neutral-950 text-neutral-500">Serviço de maior interesse: *</option>
                    <option className="bg-neutral-950 text-white" value="beginner">Assessoria Harpy Beginner</option>
                    <option className="bg-neutral-950 text-white" value="scale">Assessoria Harpy Scale</option>
                    <option className="bg-neutral-950 text-white" value="partnership">Assessoria Harpy Partnership (Comissão)</option>
                    <option className="bg-neutral-950 text-white" value="clutch">Assessoria Global (E-commerce próprio)</option>
                    <option className="bg-neutral-950 text-white" value="lps">Landing Pages em 48h</option>
                  </select>
                </div>

                {/* Textarea challenge */}
                <div>
                  <textarea 
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="w-full px-4 py-3.5 bg-black/30 border border-white/10 rounded-xl text-sm font-semibold placeholder-neutral-500 text-white outline-none focus:border-brand-red focus:bg-black/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    placeholder="Nos explique um pouco do seu projeto ou maior desafio atual..."
                    rows={3}
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full py-4 bg-brand-red hover:bg-brand-red/90 text-white font-black text-xs rounded-xl tracking-widest uppercase shadow-[0_10px_30px_rgba(219,36,41,0.3)] hover:shadow-[0_15px_40px_rgba(219,36,41,0.5)] cursor-pointer active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Analisando dados...
                    </>
                  ) : (
                    <>
                      Enviar solicitação gratuita
                    </>
                  )}
                </button>

                <p className="text-[10px] text-neutral-500 leading-relaxed text-center">
                  🔒 Seus dados e faturamento estão totalmente assegurados sob sigilo. Ao enviar, você concorda em receber nossa equipe técnica para diagnóstico comercial.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
export {};
