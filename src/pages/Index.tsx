
import React, { useState } from 'react';
import DocumentationSidebar from '../components/DocumentationSidebar';
import DocumentationContent from '../components/DocumentationContent';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/9220201234', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      <DocumentationSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 flex flex-col">
        <DocumentationContent activeSection={activeSection} />
        
        {/* Support Button */}
        <div className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleWhatsAppSupport}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-base md:text-lg shadow-lg"
            >
              <span>🛠️ Abrir Ticket de Suporte</span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="border-t border-slate-800 p-4 md:p-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 text-sm md:text-base">
              <strong className="text-white">Desenvolvido por FIOS Tecnologia</strong>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
