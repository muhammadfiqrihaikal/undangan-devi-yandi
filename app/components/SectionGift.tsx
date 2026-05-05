'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Reveal from './RevealWrapper';

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="flex items-center gap-1.5 bg-rose-800 hover:bg-rose-900 text-white text-xs px-4 py-2 rounded-md transition-colors">
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Tersalin!' : 'Salin'}
    </button>
  );
}

const accounts = [
  { bank: 'BCA', name: 'Yandi Hidayat', number: '5358151919' },
  { bank: 'Aladin Syariah', name: 'Devi Apriliyanti S', number: '50524122465' },
];

export default function SectionGift() {
  return (
    <section className="py-16 px-6 bg-stone-50 max-w-lg mx-auto text-center">
      <Reveal>
        <h2 className="text-4xl text-rose-800 mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>Wedding Gift</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
          Tanpa mengurangi rasa hormat, bagi bapak/ibu/saudara/i yang ingin memberikan tanda kasih untuk kami dapat melalui:
        </p>
      </Reveal>
      <div className="space-y-4">
        {accounts.map((a, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="bg-white rounded-xl shadow-md px-6 py-5 text-left border border-stone-100">
              <p className="text-xs text-gray-400 mb-1 tracking-wide" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>Rekening</p>
              <p className="text-gray-800 font-semibold mb-0.5" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
                {a.bank} — {a.name}
              </p>
              <p className="text-gray-700 text-xl font-mono tracking-widest mb-4">{a.number}</p>
              <CopyBtn text={a.number} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
