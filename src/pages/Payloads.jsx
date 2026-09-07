import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Copy, Check, Star } from 'lucide-react';
import { PAYLOADS_DATA, NEW_PAYLOADS_DATA } from '@/data';
import { toast } from 'sonner';

function getProtocol(title) {
  if (title.startsWith('HTTPS')) return 'HTTPS';
  return 'HTTP';
}

function getProtocolColor(proto) {
  if (proto === 'HTTPS') return 'text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.7)]';
  return 'text-primary drop-shadow-[0_0_6px_rgba(255,0,68,0.7)]';
}

const RGBBorder = ({ children, isActive }) => {
  return (
    <div className={`relative group ${isActive ? 'animate-rgb-border' : ''}`}>
      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-white via-red-500 to-white opacity-0 group-hover:opacity-100 blur transition-opacity ${isActive ? 'opacity-100' : ''}`}></div>
      <div className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-[0_0_25px_rgba(255,0,68,0.08)]">
        {children}
      </div>
    </div>
  );
};

export default function Payloads() {
  const [copied, setCopied] = useState({});

  const allPayloads = useMemo(() => [...PAYLOADS_DATA, ...NEW_PAYLOADS_DATA], []);

  const copy = (text, key, id, label) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [key]: id }));
    toast.success(`${label} copied`);
    setTimeout(() => setCopied(prev => ({ ...prev, [key]: undefined })), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pb-10">
      <header className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-mono uppercase tracking-widest flex items-center gap-3 text-foreground">
              <Code2 className="text-primary" /> Payload Library
            </h1>
            <p className="text-muted-foreground mt-1 font-mono text-sm">
              {allPayloads.length} payloads — injection strings & tunnel configs
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {allPayloads.map((item, index) => {
          const proto = getProtocol(item.title);
          const protoColor = getProtocolColor(proto);
          const isCopied = copied.payload === item.id;

          return (
            <RGBBorder key={item.id} isActive={isCopied}>
              <div className="flex flex-col p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-2xl font-black tracking-wider ${protoColor}`}>{proto}</span>
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={11} fill={i < item.stars ? 'currentColor' : 'none'} className={i >= item.stars ? 'text-border' : ''} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-border/60 rounded-lg px-4 py-3 overflow-x-auto mb-3">
                  <pre className="text-xs font-mono text-green-400/80 whitespace-pre-wrap break-all leading-relaxed">
                    {item.payload}
                  </pre>
                </div>

                <button
                  onClick={() => copy(item.payload, 'payload', item.id, 'Payload')}
                  className={`self-end flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs uppercase transition-all border ${
                    isCopied
                      ? 'border-primary bg-primary/15 text-primary shadow-[0_0_15px_rgba(255,0,68,0.5)]'
                      : 'border-border bg-black/40 text-muted-foreground hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(255,0,68,0.3)]'
                  }`}
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  {isCopied ? 'Copied' : 'Copy Payload'}
                </button>
              </div>
            </RGBBorder>
          );
        })}
      </div>
    </motion.div>
  );
}
