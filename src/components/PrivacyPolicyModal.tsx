import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

export default function PrivacyPolicyModal({ onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/8 flex-shrink-0">
          <div>
            <h2 className="text-white font-black text-lg tracking-tight">Política de Privacidade</h2>
            <p className="text-neutral-500 text-xs mt-0.5">Versão atualizada em 28 de novembro de 2024</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-6 text-sm text-neutral-400 leading-relaxed space-y-5 flex-1">
          <p>
            Olá! Se você quer entender a forma como coletamos, armazenamos, usamos, compartilhamos e eliminamos os seus Dados Pessoais, está no local certo. Por isso, leia com atenção as informações abaixo.
          </p>
          <p>
            A <strong className="text-white">Harpy Assessoria</strong> entende serem os dados pessoais um direito fundamental da pessoa humana, se preocupando com sua privacidade e tendo o compromisso de preservá-la. O tratamento de dados pessoais relacionados ao seu acesso e uso da Plataforma está descrito nesta Política de Privacidade.
          </p>
          <p>
            Esta Política pode ser modificada, substituída ou removida a qualquer momento, sem aviso prévio. Se você não concordar com uma nova versão desta Política, você deve cessar o uso de nosso site.
          </p>

          <Section title="Visão Geral">
            Esta Política de Privacidade estabelece as regras sobre (a) como e para quais finalidades seus dados pessoais podem ser tratados pela Harpy Assessoria, (b) com quem esses dados podem ser compartilhados e (c) como você pode gerenciar seus dados pessoais.
          </Section>

          <Section title="Nosso objetivo para usar seus dados pessoais">
            <p>Coletamos seus dados pessoais para que nossa equipe possa entrar em contato com você e oferecer o diagnóstico gratuito da sua operação de marketplace.</p>
            <p className="mt-3">As bases jurídicas utilizadas são:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
              <li><strong className="text-neutral-300">Execução de contrato:</strong> para elaborar propostas e fornecer nossos serviços.</li>
              <li><strong className="text-neutral-300">Consentimento:</strong> ao clicar em <strong className="text-white">ENVIAR</strong> no formulário de diagnóstico.</li>
              <li><strong className="text-neutral-300">Interesse legítimo:</strong> para melhorar continuamente nossos serviços.</li>
            </ul>
          </Section>

          <Section title="Dados pessoais que coletamos sobre você">
            <p>Coletamos apenas os dados que você nos fornece mediante preenchimento do formulário de diagnóstico:</p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-neutral-500">
              <li>Seu nome completo</li>
              <li>Seu e-mail</li>
              <li>Seu WhatsApp com DDD</li>
              <li>Nome da sua empresa</li>
              <li>Segmento da empresa</li>
              <li>Marketplace(s) que você utiliza</li>
              <li>Seu faturamento mensal</li>
            </ol>
          </Section>

          <Section title="Compartilhamento dos seus dados pessoais">
            Preservando o seu direito à privacidade e intimidade, <strong className="text-white">a Harpy Assessoria não compartilha seus dados com outras empresas ou terceiros</strong>. Os dados que você nos fornece serão utilizados apenas para que nossa equipe possa entrar em contato com você.
          </Section>

          <Section title="Seus direitos sobre os dados pessoais">
            <ul className="space-y-2 text-neutral-500">
              <li><strong className="text-neutral-300">Acesso:</strong> você pode solicitar informações sobre os dados que possuímos.</li>
              <li><strong className="text-neutral-300">Retificação:</strong> você pode solicitar alteração ou atualização de dados imprecisos.</li>
              <li><strong className="text-neutral-300">Exclusão:</strong> você pode solicitar o apagamento de seus dados.</li>
              <li><strong className="text-neutral-300">Restrição:</strong> você pode solicitar a interrupção do processamento de seus dados.</li>
              <li><strong className="text-neutral-300">Objeção:</strong> você pode se opor ao processamento de seus dados a qualquer momento.</li>
            </ul>
          </Section>

          <Section title="Como exercer seus direitos com a Harpy?">
            Basta nos enviar um e-mail para <a href="mailto:harpyacessory@gmail.com" className="text-brand-red hover:underline">harpyacessory@gmail.com</a> que atenderemos sua solicitação o mais breve possível.
          </Section>

          <Section title="Retenção e exclusão de dados">
            Mantemos os seus dados pessoais apenas durante o tempo necessário para fornecer nossos serviços. Se você solicitar que excluamos seus dados, eliminaremos ou anonimizaremos eles para que você não seja mais identificado, salvo obrigação legal em contrário.
          </Section>

          <Section title="Transferência para outros países">
            A Harpy Assessoria não transfere seus dados para outros países, mantendo-os seguros em solo nacional.
          </Section>

          <Section title="Cookies e tecnologias semelhantes">
            <p>Cookies são arquivos de texto baixados em seu dispositivo quando você visita um site, permitindo que o site reconheça o dispositivo do usuário. Utilizamos cookies para:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
              <li><strong className="text-neutral-300">Cookies estritamente necessários:</strong> essenciais para a navegação no site.</li>
              <li><strong className="text-neutral-300">Cookies de desempenho:</strong> para entender como nossos visitantes usam o site.</li>
              <li><strong className="text-neutral-300">Cookies de funcionalidade:</strong> para memorizar suas preferências.</li>
              <li><strong className="text-neutral-300">Cookies de publicidade:</strong> para anúncios mais relevantes ao seu perfil.</li>
            </ul>
            <p className="mt-3">Você pode gerenciar ou desabilitar os cookies a qualquer momento pelas configurações do seu navegador.</p>
          </Section>

          <Section title="Segurança dos seus dados">
            Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais, incluindo criptografia HTTPS, a fim de impedir o acesso não autorizado de terceiros.
          </Section>

          <Section title="Alterações desta Política">
            Ocasionalmente, podemos fazer alterações nesta Política. Nos casos de alterações substanciais, avisaremos conforme apropriado às circunstâncias.
          </Section>

          <Section title="Como entrar em contato conosco">
            Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:harpyacessory@gmail.com" className="text-brand-red hover:underline">harpyacessory@gmail.com</a> ou pelo WhatsApp <a href="https://wa.me/5513981150810" target="_blank" rel="noreferrer" className="text-brand-red hover:underline">(13) 98115-0810</a>.
          </Section>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-8 py-4 border-t border-white/8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-brand-red text-white font-black text-xs tracking-wide hover:bg-brand-red/90 transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-white font-black text-sm mb-2">{title}</h3>
      <div className="text-neutral-400">{children}</div>
    </div>
  );
}
