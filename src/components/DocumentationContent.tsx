
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ContentProps {
  activeSection: string;
}

const DocumentationContent: React.FC<ContentProps> = ({ activeSection }) => {
  const sections = {
    overview: {
      title: 'Visão Geral',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Bem-vindo ao ChatLink, a plataforma completa para atendimento ao cliente via mensagens. 
            Nossa solução oferece todas as ferramentas necessárias para gerenciar conversas, 
            organizar sua equipe e fornecer um atendimento excepcional aos seus clientes.
          </p>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Principais Recursos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Interface intuitiva e moderna</li>
              <li>• Gerenciamento de múltiplos canais</li>
              <li>• Relatórios detalhados e analytics</li>
              <li>• Integração com WhatsApp, Telegram e mais</li>
              <li>• Automação de respostas</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
            <span className="text-gray-500">📸 Imagem da interface principal será adicionada aqui</span>
          </div>
        </div>
      )
    },
    'getting-started': {
      title: 'Primeiros Passos',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Configure sua conta e comece a usar o ChatLink em poucos minutos. 
            Este guia irá te orientar através do processo inicial de configuração.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">1. Configuração Inicial</h3>
              <p className="text-gray-300">Configure seu perfil, defina as informações da empresa e personalize as configurações básicas.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">2. Conectar Canais</h3>
              <p className="text-gray-300">Integre seus canais de comunicação como WhatsApp, Telegram, e-mail e chat do site.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">3. Configurar Equipe</h3>
              <p className="text-gray-300">Adicione membros da equipe, defina permissões e organize grupos de atendimento.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
            <span className="text-gray-500">📸 Screenshot do processo de configuração será adicionado aqui</span>
          </div>
        </div>
      )
    },
    conversations: {
      title: 'Painel de Conversas',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            O painel de conversas é o coração do ChatLink. Aqui você gerencia todas as interações 
            com clientes, organiza filas de atendimento e acompanha o status das conversas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Caixa de Entrada</h3>
              <p className="text-gray-300">Visualize todas as mensagens não lidas e conversas ativas em um local centralizado.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Filtros e Busca</h3>
              <p className="text-gray-300">Encontre conversas rapidamente usando filtros por canal, agente, status ou palavras-chave.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Etiquetas</h3>
              <p className="text-gray-300">Organize conversas com etiquetas personalizadas para facilitar o acompanhamento.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Histórico</h3>
              <p className="text-gray-300">Acesse o histórico completo de interações com cada cliente.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
            <span className="text-gray-500">📸 Interface do painel de conversas será adicionada aqui</span>
          </div>
        </div>
      )
    },
    team: {
      title: 'Equipe e Agentes',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Gerencie sua equipe de atendimento de forma eficiente. Adicione agentes, 
            defina permissões e monitore a performance individual.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Gerenciamento de Agentes</h3>
              <p className="text-gray-300">Adicione, edite e remova agentes da sua equipe. Configure perfis e informações de contato.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Níveis de Permissão</h3>
              <p className="text-gray-300">Defina diferentes níveis de acesso: Administrador, Supervisor e Agente.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Grupos de Trabalho</h3>
              <p className="text-gray-300">Organize agentes em grupos por departamento ou especialidade.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
            <span className="text-gray-500">📸 Tela de gerenciamento de equipe será adicionada aqui</span>
          </div>
        </div>
      )
    },
    reports: {
      title: 'Relatórios',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Acompanhe métricas importantes do seu atendimento com relatórios detalhados e 
            dashboards interativos para tomada de decisões estratégicas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Métricas de Atendimento</h3>
              <p className="text-gray-300">Tempo médio de resposta, tickets resolvidos, satisfação do cliente.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Performance da Equipe</h3>
              <p className="text-gray-300">Desempenho individual dos agentes e produtividade por período.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Análise de Canais</h3>
              <p className="text-gray-300">Volume de mensagens por canal e preferências dos clientes.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Exportação</h3>
              <p className="text-gray-300">Exporte relatórios em PDF, Excel ou CSV para análises externas.</p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center border-2 border-dashed border-gray-700">
            <span className="text-gray-500">📊 Gráficos e dashboards serão adicionados aqui</span>
          </div>
        </div>
      )
    },
    faq: {
      title: 'Dúvidas Frequentes',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Encontre respostas para as perguntas mais comuns sobre o uso do ChatLink.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Como integrar o WhatsApp?</h3>
              <p className="text-gray-300">Acesse Configurações {'>'}  Canais {'>'}  WhatsApp e siga o processo de autenticação com QR Code.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Posso usar em múltiplos dispositivos?</h3>
              <p className="text-gray-300">Sim, o ChatLink é baseado na web e pode ser acessado de qualquer dispositivo com navegador.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Como configurar respostas automáticas?</h3>
              <p className="text-gray-300">Vá em Automação {'>'}  Respostas Automáticas e configure mensagens baseadas em palavras-chave.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Existe limite de agentes?</h3>
              <p className="text-gray-300">O limite depende do seu plano. Consulte nossa página de preços para mais detalhes.</p>
            </div>
          </div>
        </div>
      )
    },
    support: {
      title: 'Suporte',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Precisa de ajuda? Nossa equipe de suporte está sempre disponível para ajudar você 
            a aproveitar ao máximo o ChatLink.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Horário de Atendimento</h3>
              <p className="text-gray-300">Segunda a Sexta: 8h às 18h<br />Sábados: 8h às 12h</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Canais de Suporte</h3>
              <p className="text-gray-300">WhatsApp, E-mail, Chat Online e Central de Ajuda</p>
            </div>
          </div>
          <div className="bg-green-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Suporte Prioritário</h3>
            <p className="text-gray-200">Clientes dos planos Pro e Enterprise têm acesso a suporte prioritário 24/7.</p>
          </div>
        </div>
      )
    }
  };

  const currentSection = sections[activeSection as keyof typeof sections];

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">{currentSection?.title}</h1>
        {currentSection?.content}
      </div>
    </div>
  );
};

export default DocumentationContent;
