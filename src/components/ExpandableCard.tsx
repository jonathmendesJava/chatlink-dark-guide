
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ 
  title, 
  summary, 
  children, 
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 md:p-6 text-left hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between"
      >
        <div className="flex-1 pr-3 md:pr-4">
          <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{title}</h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">{summary}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-slate-700 bg-slate-900 p-4 md:p-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
