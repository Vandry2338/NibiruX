import React, { useState } from 'react';
import { Drawer, DrawerContent } from './ui/drawer';

interface AskAgentSidebarProps {
  open: boolean;
  onClose: () => void;
}

export const AskAgentSidebar: React.FC<AskAgentSidebarProps> = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'agent', text: 'Hi! Ask me anything about SAP solutions, use cases, or features.' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // TODO: Integrate with real agent/AI backend
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { sender: 'agent', text: 'This is a sample agent response.' }]);
    }, 800);
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="w-full max-w-md ml-auto bg-gradient-to-br from-[#101B2D]/95 to-[#1A2740]/95 text-white border-l border-white/10 shadow-2xl flex flex-col h-full">
        <div className="p-4 border-b border-white/10 font-bold text-lg flex items-center gap-2">
          <span className="text-blue-400">Ask Agent</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-4 py-2 max-w-xs ${msg.sender === 'user' ? 'bg-blue-600/80 text-white' : 'bg-white/10 text-white'}`}>{msg.text}</div>
            </div>
          ))}
        </div>
        <form
          className="p-4 border-t border-white/10 flex gap-2"
          onSubmit={e => { e.preventDefault(); sendMessage(); }}
        >
          <input
            className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            aria-label="Ask the agent"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-orange-400 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
            aria-label="Send message"
          >
            Send
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}; 