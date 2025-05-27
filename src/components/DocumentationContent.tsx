
import React from 'react';
import ExpandableCard from './ExpandableCard';

interface ContentProps {
  activeSection: string;
}

const DocumentationContent: React.FC<ContentProps> = ({ activeSection }) => {
  const sections = {
    overview: {
      title: 'Visão Geral',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Bem-vindo ao ChatLink, a plataforma completa para atendimento ao cliente via mensagens. 
            Nossa solução oferece todas as ferramentas necessárias para gerenciar conversas, 
            organizar sua equipe e fornecer um atendimento excepcional aos seus clientes.
          </p>
          
          <ExpandableCard
            title="Interface Intuitiva e Moderna"
            summary="Explore todos os recursos da nossa interface redesenhada"
          >
            <div className="space-y-4">
              <p className="text-slate-300">
                Nossa interface foi completamente redesenhada pensando na experiência do usuário. 
                Recursos principais incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Dashboard centralizado com métricas em tempo real</li>
                <li>Navegação intuitiva entre seções</li>
                <li>Tema escuro para reduzir fadiga visual</li>
                <li>Responsivo para dispositivos móveis e tablets</li>
                <li>Atalhos de teclado para operações rápidas</li>
              </ul>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Gerenciamento de Múltiplos Canais"
            summary="Centralize todas as suas conversas em um só lugar"
          >
            <div className="space-y-4">
              <p className="text-slate-300">
                Integre todos os seus canais de comunicação e gerencie tudo em uma única plataforma:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">WhatsApp Business</h4>
                  <p className="text-slate-400 text-sm">Integração oficial com API do WhatsApp</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Telegram</h4>
                  <p className="text-slate-400 text-sm">Suporte completo a bots e grupos</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Instagram Direct</h4>
                  <p className="text-slate-400 text-sm">Gerencie DMs do Instagram</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Chat do Site</h4>
                  <p className="text-slate-400 text-sm">Widget customizável para seu site</p>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Relatórios e Analytics Avançados"
            summary="Monitore e otimize seu atendimento com dados precisos"
          >
            <div className="space-y-4">
              <p className="text-slate-300">
                Acesse relatórios detalhados e tome decisões baseadas em dados:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Tempo médio de resposta por agente e canal</li>
                <li>Taxa de resolução no primeiro contato</li>
                <li>Picos de demanda por horário e dia</li>
                <li>Satisfação do cliente com pesquisas automáticas</li>
                <li>Exportação de dados em diversos formatos</li>
              </ul>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    'getting-started': {
      title: 'Primeiros Passos',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Configure sua conta e comece a usar o ChatLink em poucos minutos. 
            Este guia irá te orientar através do processo inicial de configuração.
          </p>
          
          <ExpandableCard
            title="1. Configuração Inicial da Conta"
            summary="Configure seu perfil e informações da empresa"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Passos para configuração:</h4>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>Perfil da Empresa:</strong> Acesse Configurações {'>'}  Empresa
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nome da empresa e logo</li>
                    <li>Horário de funcionamento</li>
                    <li>Informações de contato</li>
                  </ul>
                </li>
                <li>
                  <strong>Configurações de Notificação:</strong> Defina como receber alertas
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Notificações por email</li>
                    <li>Alertas de mensagens não lidas</li>
                    <li>Relatórios automáticos</li>
                  </ul>
                </li>
                <li>
                  <strong>Personalização da Interface:</strong> Ajuste a plataforma às suas necessidades
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Escolha de cores tema</li>
                    <li>Layout do dashboard</li>
                    <li>Atalhos personalizados</li>
                  </ul>
                </li>
              </ol>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="2. Integração de Canais"
            summary="Conecte WhatsApp, Instagram, Telegram e outros canais"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Como conectar cada canal:</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">WhatsApp Business</h5>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Vá em Configurações {'>'}  Canais {'>'}  WhatsApp</li>
                    <li>Clique em "Conectar WhatsApp Business"</li>
                    <li>Escaneie o QR Code com seu celular</li>
                    <li>Aguarde a sincronização das conversas</li>
                    <li>Configure mensagens automáticas (opcional)</li>
                  </ol>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Instagram Direct</h5>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Acesse Configurações {'>'}  Canais {'>'}  Instagram</li>
                    <li>Conecte sua conta business do Instagram</li>
                    <li>Autorize as permissões necessárias</li>
                    <li>Configure respostas rápidas para DMs</li>
                  </ol>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="3. Configuração da Equipe"
            summary="Adicione agentes e defina permissões"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Estruture sua equipe:</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">Níveis de Acesso</h5>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-green-400">Administrador:</strong> Acesso total ao sistema</li>
                    <li><strong className="text-blue-400">Supervisor:</strong> Gerencia equipe e relatórios</li>
                    <li><strong className="text-yellow-400">Agente:</strong> Atende conversas atribuídas</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-2">Processo de Convite</h5>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Vá em Equipe {'>'}  Adicionar Membro</li>
                    <li>Insira email e selecione nível de acesso</li>
                    <li>Defina departamentos e horários</li>
                    <li>Envie convite por email</li>
                  </ol>
                </div>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    conversations: {
      title: 'Painel de Conversas',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            O painel de conversas é o coração do ChatLink. Aqui você gerencia todas as interações 
            com clientes, organiza filas de atendimento e acompanha o status das conversas.
          </p>

          <ExpandableCard
            title="Caixa de Entrada"
            summary="Centralize todas as mensagens não lidas e conversas ativas"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Funcionalidades da Caixa de Entrada:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Organização Automática</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Mensagens não lidas primeiro</li>
                    <li>• Agrupamento por canal</li>
                    <li>• Priorização por tempo de espera</li>
                    <li>• Destaque para VIPs</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Ações Rápidas</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Resposta com um clique</li>
                    <li>• Transferência entre agentes</li>
                    <li>• Marcação como resolvido</li>
                    <li>• Adição de notas internas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Como configurar filtros personalizados:</h5>
                <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                  <li>Clique no ícone de filtro no topo da caixa de entrada</li>
                  <li>Selecione critérios: canal, agente, status, data</li>
                  <li>Salve o filtro com um nome personalizado</li>
                  <li>Acesse rapidamente via menu lateral</li>
                </ol>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Sistema de Atribuição"
            summary="Como funciona a distribuição automática e manual de conversas"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Métodos de Atribuição:</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Distribuição Automática</h5>
                  <p className="text-slate-300 text-sm mb-2">O sistema distribui conversas automaticamente baseado em:</p>
                  <ul className="text-slate-300 text-sm space-y-1 pl-4">
                    <li>• Disponibilidade do agente (online/offline)</li>
                    <li>• Carga atual de trabalho</li>
                    <li>• Especialidade/departamento</li>
                    <li>• Histórico com o cliente</li>
                  </ul>
                  <div className="mt-3 p-3 bg-slate-900 rounded">
                    <p className="text-slate-400 text-xs">Configuração: Equipe {'>'}  Regras de Atribuição</p>
                  </div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Atribuição Manual</h5>
                  <p className="text-slate-300 text-sm mb-2">Supervisores podem atribuir conversas manualmente:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Selecione a conversa na caixa de entrada</li>
                    <li>Clique em "Atribuir" no menu de ações</li>
                    <li>Escolha o agente disponível</li>
                    <li>Adicione nota explicativa (opcional)</li>
                    <li>Confirme a atribuição</li>
                  </ol>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Gestão de Status de Conversas"
            summary="Entenda e gerencie os diferentes status das conversas"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Status Disponíveis:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-yellow-900 p-3 rounded-lg">
                    <h5 className="font-semibold text-yellow-400">🟡 Aguardando</h5>
                    <p className="text-slate-300 text-sm">Conversa não atribuída ou aguardando primeira resposta</p>
                  </div>
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-400">🔵 Em Andamento</h5>
                    <p className="text-slate-300 text-sm">Conversa ativa com agente atribuído</p>
                  </div>
                  <div className="bg-green-900 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-400">🟢 Resolvido</h5>
                    <p className="text-slate-300 text-sm">Problema solucionado, aguardando feedback</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <h5 className="font-semibold text-red-400">🔴 Urgente</h5>
                    <p className="text-slate-300 text-sm">Requer atenção imediata da supervisão</p>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-400">⚫ Fechado</h5>
                    <p className="text-slate-300 text-sm">Conversa finalizada e arquivada</p>
                  </div>
                  <div className="bg-purple-900 p-3 rounded-lg">
                    <h5 className="font-semibold text-purple-400">🟣 Transferido</h5>
                    <p className="text-slate-300 text-sm">Movido para outro departamento/agente</p>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Ferramentas de Produtividade"
            summary="Recursos para aumentar a eficiência do atendimento"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Respostas Rápidas</h5>
                  <p className="text-slate-300 text-sm mb-2">Crie templates para mensagens frequentes:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Saudações personalizadas</li>
                    <li>• Respostas para dúvidas comuns</li>
                    <li>• Procedimentos padrão</li>
                    <li>• Despedidas profissionais</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Notas Internas</h5>
                  <p className="text-slate-300 text-sm mb-2">Comunicação entre agentes:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Contexto para transferências</li>
                    <li>• Observações sobre o cliente</li>
                    <li>• Lembretes para follow-up</li>
                    <li>• Escalação para supervisores</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Atalhos de Teclado:</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div><kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+R</kbd> <span className="text-slate-400">Resposta rápida</span></div>
                  <div><kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+T</kbd> <span className="text-slate-400">Transferir</span></div>
                  <div><kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+D</kbd> <span className="text-slate-400">Marcar resolvido</span></div>
                  <div><kbd className="bg-slate-700 px-2 py-1 rounded">Ctrl+N</kbd> <span className="text-slate-400">Nova nota</span></div>
                </div>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    team: {
      title: 'Equipe e Agentes',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Gerencie sua equipe de atendimento de forma eficiente. Adicione agentes, 
            defina permissões e monitore a performance individual.
          </p>
          
          <ExpandableCard
            title="Gerenciamento de Agentes"
            summary="Como adicionar, configurar e gerenciar sua equipe"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Adicionando novos agentes:</h4>
              <ol className="list-decimal pl-6 space-y-2 text-slate-300">
                <li>Acesse Equipe {'>'}  Gerenciar Agentes</li>
                <li>Clique em "Adicionar Novo Agente"</li>
                <li>Preencha informações básicas (nome, email, telefone)</li>
                <li>Defina nível de acesso e departamento</li>
                <li>Configure horário de trabalho</li>
                <li>Envie convite por email</li>
              </ol>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Configurações por Agente:</h5>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Limite máximo de conversas simultâneas</li>
                  <li>• Canais que pode atender</li>
                  <li>• Horários de disponibilidade</li>
                  <li>• Especialidades e tags</li>
                  <li>• Metas de atendimento</li>
                </ul>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Níveis de Permissão"
            summary="Entenda os diferentes níveis de acesso e suas funcionalidades"
          >
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="bg-red-900 p-4 rounded-lg border border-red-700">
                  <h5 className="font-semibold text-red-400 mb-2">👑 Administrador</h5>
                  <p className="text-slate-300 text-sm mb-2">Acesso completo ao sistema:</p>
                  <ul className="text-slate-300 text-sm space-y-1 pl-4">
                    <li>• Gerenciar equipe e permissões</li>
                    <li>• Configurar integrações e canais</li>
                    <li>• Acessar todos os relatórios</li>
                    <li>• Configurar automações</li>
                    <li>• Gerenciar planos e faturamento</li>
                  </ul>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                  <h5 className="font-semibold text-blue-400 mb-2">🎯 Supervisor</h5>
                  <p className="text-slate-300 text-sm mb-2">Gerencia equipe e monitora atendimento:</p>
                  <ul className="text-slate-300 text-sm space-y-1 pl-4">
                    <li>• Visualizar conversas de todos os agentes</li>
                    <li>• Atribuir e transferir conversas</li>
                    <li>• Acessar relatórios de performance</li>
                    <li>• Treinar e orientar agentes</li>
                    <li>• Configurar respostas rápidas</li>
                  </ul>
                </div>
                <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                  <h5 className="font-semibold text-green-400 mb-2">💬 Agente</h5>
                  <p className="text-slate-300 text-sm mb-2">Foco no atendimento direto ao cliente:</p>
                  <ul className="text-slate-300 text-sm space-y-1 pl-4">
                    <li>• Atender conversas atribuídas</li>
                    <li>• Usar respostas rápidas e templates</li>
                    <li>• Adicionar notas e etiquetas</li>
                    <li>• Ver histórico do cliente</li>
                    <li>• Solicitar transferências</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Grupos de Trabalho e Departamentos"
            summary="Organize sua equipe por especialidades e departamentos"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Criando Departamentos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Exemplos de Departamentos</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• 💰 Vendas</li>
                    <li>• 🛠️ Suporte Técnico</li>
                    <li>• 💳 Financeiro</li>
                    <li>• 📦 Pós-vendas</li>
                    <li>• 📞 Telemarketing</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Configurações por Departamento</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Horário de funcionamento específico</li>
                    <li>• Mensagens automáticas personalizadas</li>
                    <li>• Metas e KPIs específicos</li>
                    <li>• Templates de resposta únicos</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Como configurar roteamento automático:</h5>
                <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                  <li>Vá em Configurações {'>'}  Departamentos</li>
                  <li>Crie departamento e defina palavras-chave</li>
                  <li>Configure regras de roteamento</li>
                  <li>Teste com mensagens de exemplo</li>
                </ol>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    reports: {
      title: 'Relatórios',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Acompanhe métricas importantes do seu atendimento com relatórios detalhados e 
            dashboards interativos para tomada de decisões estratégicas.
          </p>

          <ExpandableCard
            title="Dashboard Principal"
            summary="Visão geral em tempo real das métricas mais importantes"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Métricas em Destaque:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-900 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400">2.5min</div>
                  <div className="text-slate-300 text-sm">Tempo Médio de Resposta</div>
                </div>
                <div className="bg-blue-900 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">94%</div>
                  <div className="text-slate-300 text-sm">Taxa de Resolução</div>
                </div>
                <div className="bg-yellow-900 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-400">156</div>
                  <div className="text-slate-300 text-sm">Conversas Hoje</div>
                </div>
                <div className="bg-purple-900 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400">4.8/5</div>
                  <div className="text-slate-300 text-sm">Satisfação</div>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Configurações do Dashboard:</h5>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Personalize widgets exibidos</li>
                  <li>• Defina período de análise padrão</li>
                  <li>• Configure alertas automáticos</li>
                  <li>• Exporte dados em tempo real</li>
                </ul>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Relatórios de Performance da Equipe"
            summary="Monitore o desempenho individual e coletivo dos agentes"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Métricas por Agente:</h4>
              <div className="bg-slate-800 p-4 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left text-slate-300 pb-2">Agente</th>
                        <th className="text-center text-slate-300 pb-2">Conversas</th>
                        <th className="text-center text-slate-300 pb-2">Tempo Médio</th>
                        <th className="text-center text-slate-300 pb-2">Satisfação</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Ana Silva</td>
                        <td className="text-center">42</td>
                        <td className="text-center">1.8min</td>
                        <td className="text-center">⭐ 4.9</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Carlos Santos</td>
                        <td className="text-center">38</td>
                        <td className="text-center">2.1min</td>
                        <td className="text-center">⭐ 4.7</td>
                      </tr>
                      <tr>
                        <td className="py-2">Maria Costa</td>
                        <td className="text-center">35</td>
                        <td className="text-center">1.9min</td>
                        <td className="text-center">⭐ 4.8</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Rankings e Gamificação</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Agente do mês</li>
                    <li>• Maior taxa de resolução</li>
                    <li>• Melhor tempo de resposta</li>
                    <li>• Cliente mais satisfeito</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Alertas de Performance</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Tempo de resposta alto</li>
                    <li>• Muitas transferências</li>
                    <li>• Baixa satisfação</li>
                    <li>• Sobrecarga de trabalho</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Análise de Canais e Tendências"
            summary="Entenda o comportamento dos clientes por canal e período"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Distribuição por Canal:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-900 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">68%</div>
                    <div className="text-slate-300 text-sm">WhatsApp</div>
                  </div>
                </div>
                <div className="bg-blue-900 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">18%</div>
                    <div className="text-slate-300 text-sm">Instagram</div>
                  </div>
                </div>
                <div className="bg-purple-900 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">10%</div>
                    <div className="text-slate-300 text-sm">Site</div>
                  </div>
                </div>
                <div className="bg-cyan-900 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">4%</div>
                    <div className="text-slate-300 text-sm">Telegram</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Insights Automáticos:</h5>
                <div className="space-y-2 text-slate-300 text-sm">
                  <div className="p-2 bg-slate-900 rounded">💡 Pico de demanda detectado entre 14h-16h no WhatsApp</div>
                  <div className="p-2 bg-slate-900 rounded">📈 Instagram cresceu 25% comparado ao mês anterior</div>
                  <div className="p-2 bg-slate-900 rounded">⚠️ Taxa de abandono alta no chat do site (12%)</div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Exportação e Compartilhamento"
            summary="Exporte dados e crie relatórios personalizados"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Formatos Disponíveis:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <h5 className="font-semibold text-red-400">PDF</h5>
                  <p className="text-slate-300 text-sm">Relatórios formatados para apresentação</p>
                </div>
                <div className="bg-green-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <h5 className="font-semibold text-green-400">Excel</h5>
                  <p className="text-slate-300 text-sm">Dados estruturados para análise</p>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <h5 className="font-semibold text-blue-400">CSV</h5>
                  <p className="text-slate-300 text-sm">Importação em outros sistemas</p>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Relatórios Automáticos:</h5>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Envio diário por email para gestores</li>
                  <li>• Resumo semanal para equipe</li>
                  <li>• Relatório mensal para diretoria</li>
                  <li>• Alertas em tempo real por WhatsApp</li>
                </ul>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    faq: {
      title: 'Dúvidas Frequentes',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Encontre respostas para as perguntas mais comuns sobre o uso do ChatLink.
          </p>
          
          <ExpandableCard
            title="Como integrar o WhatsApp?"
            summary="Processo completo de integração com WhatsApp Business"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Passo a passo detalhado:</h4>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>
                  <strong>Preparação:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Certifique-se de ter uma conta WhatsApp Business</li>
                    <li>Tenha o número de telefone da empresa verificado</li>
                    <li>Baixe o WhatsApp Business no celular</li>
                  </ul>
                </li>
                <li>
                  <strong>No ChatLink:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Acesse Configurações {'>'}  Canais {'>'}  WhatsApp</li>
                    <li>Clique em "Conectar WhatsApp Business"</li>
                    <li>Um QR Code aparecerá na tela</li>
                  </ul>
                </li>
                <li>
                  <strong>No WhatsApp Business:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Abra o app e vá em Configurações</li>
                    <li>Toque em "Dispositivos conectados"</li>
                    <li>Escaneie o QR Code do ChatLink</li>
                  </ul>
                </li>
              </ol>
              <div className="bg-yellow-900 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-400 mb-2">⚠️ Importante:</h5>
                <p className="text-slate-300 text-sm">O WhatsApp só permite uma conexão ativa por vez. Desconecte de outros sistemas antes de conectar ao ChatLink.</p>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Posso usar em múltiplos dispositivos?"
            summary="Flexibilidade de acesso e sincronização entre dispositivos"
          >
            <div className="space-y-4">
              <div className="bg-green-900 p-4 rounded-lg">
                <h5 className="font-semibold text-green-400 mb-2">✅ Sim, totalmente compatível!</h5>
                <p className="text-slate-300 text-sm">O ChatLink é baseado na web e sincroniza automaticamente entre todos os dispositivos.</p>
              </div>
              <h4 className="font-semibold text-white">Dispositivos Suportados:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">💻 Desktop/Notebook</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Windows, Mac, Linux</li>
                    <li>• Chrome, Firefox, Safari, Edge</li>
                    <li>• Funcionalidades completas</li>
                    <li>• Atalhos de teclado</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">📱 Mobile/Tablet</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• iOS e Android</li>
                    <li>• Interface responsiva</li>
                    <li>• Notificações push</li>
                    <li>• Modo offline limitado</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Como configurar respostas automáticas?"
            summary="Automatize respostas para melhorar a eficiência do atendimento"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Tipos de Automação:</h4>
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Mensagem de Boas-vindas</h5>
                  <p className="text-slate-300 text-sm mb-2">Configuração:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Vá em Automação {'>'}  Mensagens de Boas-vindas</li>
                    <li>Defina texto personalizado para cada canal</li>
                    <li>Configure horário de funcionamento</li>
                    <li>Adicione botões de ação rápida</li>
                  </ol>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Respostas por Palavra-chave</h5>
                  <p className="text-slate-300 text-sm mb-2">Configuração:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-slate-300 text-sm">
                    <li>Acesse Automação {'>'}  Respostas Automáticas</li>
                    <li>Crie nova regra com palavras-chave</li>
                    <li>Defina resposta correspondente</li>
                    <li>Teste com mensagens de exemplo</li>
                  </ol>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Exemplos Práticos:</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Palavra-chave:</span>
                    <span className="text-slate-300">"horário", "funcionamento"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Resposta:</span>
                    <span className="text-slate-300">"Funcionamos de seg-sex, 8h às 18h"</span>
                  </div>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Existe limite de agentes?"
            summary="Entenda os limites e planos disponíveis"
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Planos Disponíveis:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">Starter</h5>
                  <div className="text-2xl font-bold text-white mb-2">Até 3 agentes</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• 1 canal integrado</li>
                    <li>• Relatórios básicos</li>
                    <li>• Suporte por email</li>
                  </ul>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">Professional</h5>
                  <div className="text-2xl font-bold text-white mb-2">Até 15 agentes</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Canais ilimitados</li>
                    <li>• Relatórios avançados</li>
                    <li>• Suporte prioritário</li>
                  </ul>
                </div>
                <div className="bg-purple-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-400 mb-2">Enterprise</h5>
                  <div className="text-2xl font-bold text-white mb-2">Ilimitado</div>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Recursos personalizados</li>
                    <li>• API dedicada</li>
                    <li>• Suporte 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    },
    support: {
      title: 'Suporte',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Precisa de ajuda? Nossa equipe de suporte está sempre disponível para ajudar você 
            a aproveitar ao máximo o ChatLink.
          </p>
          
          <ExpandableCard
            title="Canais de Atendimento"
            summary="Diferentes formas de entrar em contato conosco"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">💬 WhatsApp</h5>
                  <p className="text-slate-300 text-sm mb-2">Atendimento rápido e direto</p>
                  <p className="text-slate-400 text-sm">+55 (11) 99999-9999</p>
                  <p className="text-slate-400 text-sm">Seg-Sex: 8h às 18h</p>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">📧 Email</h5>
                  <p className="text-slate-300 text-sm mb-2">Para questões mais detalhadas</p>
                  <p className="text-slate-400 text-sm">suporte@chatlink.com.br</p>
                  <p className="text-slate-400 text-sm">Resposta em até 4h</p>
                </div>
                <div className="bg-purple-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-400 mb-2">💬 Chat Online</h5>
                  <p className="text-slate-300 text-sm mb-2">Suporte instantâneo</p>
                  <p className="text-slate-400 text-sm">Disponível na plataforma</p>
                  <p className="text-slate-400 text-sm">Seg-Sex: 8h às 18h</p>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-400 mb-2">📚 Central de Ajuda</h5>
                  <p className="text-slate-300 text-sm mb-2">Documentação completa</p>
                  <p className="text-slate-400 text-sm">help.chatlink.com.br</p>
                  <p className="text-slate-400 text-sm">Disponível 24/7</p>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Níveis de Suporte"
            summary="Diferentes tipos de atendimento baseados no seu plano"
          >
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">🥉 Suporte Padrão</h5>
                  <p className="text-slate-300 text-sm mb-2">Planos Starter e Professional</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Horário comercial (8h às 18h)</li>
                    <li>• Email e chat online</li>
                    <li>• Tempo de resposta: até 4 horas</li>
                    <li>• Documentação e tutoriais</li>
                  </ul>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">🥇 Suporte Prioritário</h5>
                  <p className="text-slate-300 text-sm mb-2">Plano Enterprise</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Atendimento 24/7</li>
                    <li>• Todos os canais + telefone</li>
                    <li>• Tempo de resposta: até 1 hora</li>
                    <li>• Gerente de conta dedicado</li>
                    <li>• Suporte técnico especializado</li>
                    <li>• Treinamentos personalizados</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableCard>

          <ExpandableCard
            title="Recursos de Autoajuda"
            summary="Encontre respostas rapidamente sem precisar entrar em contato"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-400 mb-2">📖 Base de Conhecimento</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Guias passo a passo</li>
                    <li>• Vídeos tutoriais</li>
                    <li>• Perguntas frequentes</li>
                    <li>• Troubleshooting</li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-400 mb-2">🎥 Academia ChatLink</h5>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Cursos online gratuitos</li>
                    <li>• Certificações</li>
                    <li>• Webinars semanais</li>
                    <li>• Melhores práticas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg">
                <h5 className="font-semibold text-white mb-2">🔍 Busca Inteligente:</h5>
                <p className="text-slate-300 text-sm">Use a busca na central de ajuda para encontrar respostas instantâneas. Nossa IA identifica automaticamente sua dúvida e sugere os artigos mais relevantes.</p>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )
    }
  };

  const currentSection = sections[activeSection as keyof typeof sections];

  return (
    <div className="flex-1 p-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">{currentSection?.title}</h1>
        {currentSection?.content}
      </div>
    </div>
  );
};

export default DocumentationContent;
