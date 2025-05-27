
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
        className="w-full p-6 text-left hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-300">{summary}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-slate-700 bg-slate-900 p-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
