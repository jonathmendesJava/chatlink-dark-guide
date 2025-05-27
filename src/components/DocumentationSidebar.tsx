
import React from 'react';
import { Home, PlayCircle, MessageSquare, Users, BarChart3, HelpCircle, HeadphonesIcon } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'overview', title: 'Visão Geral', icon: Home },
  { id: 'getting-started', title: 'Primeiros Passos', icon: PlayCircle },
  { id: 'conversations', title: 'Painel de Conversas', icon: MessageSquare },
  { id: 'team', title: 'Equipe e Agentes', icon: Users },
  { id: 'reports', title: 'Relatórios', icon: BarChart3 },
  { id: 'faq', title: 'Dúvidas Frequentes', icon: HelpCircle },
  { id: 'support', title: 'Suporte', icon: HeadphonesIcon },
];

const DocumentationSidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="w-64 bg-slate-950 border-r border-slate-800 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">ChatLink</h1>
            <p className="text-sm text-slate-400">Documentação</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-green-700 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <div className="text-xs text-slate-500 text-center">
          v2.0.1
        </div>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
