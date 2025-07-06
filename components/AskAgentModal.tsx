import React, { useState } from 'react';

export function AskAgentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [message, setMessage] = useState('');
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 80, left: 80, right: 80, background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 32, zIndex: 1000 }}>
      <h2>Ask Agent</h2>
      <textarea value={message} onChange={e => setMessage(e.target.value)} style={{ width: '100%', minHeight: 60, marginBottom: 16 }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onClose} style={{ background: '#E48400', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 700 }}>Close</button>
      </div>
    </div>
  );
} 