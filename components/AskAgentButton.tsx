import React from 'react';
import { Sparkles } from 'lucide-react';

interface AskAgentButtonProps {
  onClick: () => void;
}

export const AskAgentButton: React.FC<AskAgentButtonProps> = ({ onClick }) => (
  <button
    className="fixed bottom-8 right-8 z-50 bg-[#E48400] hover:bg-[#FFA940] text-white rounded-full shadow-lg p-5 flex items-center gap-2 font-poppins text-lg font-bold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E48400]/40"
    onClick={onClick}
    aria-label="Ask Agent"
  >
    <Sparkles className="w-6 h-6" />
    Ask Agent
  </button>
); 