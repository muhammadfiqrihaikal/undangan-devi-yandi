'use client';
import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import Reveal from './RevealWrapper';
import { supabase } from '../../lib/supabaseClient';

// Tipe data sesuai kolom tabel "ucapan" di Supabase
type Ucapan = {
  id?: number;
  nama: string;
  kehadiran: boolean;
  pesan: string;
  created_at?: string;
};

export default function SectionRSVP() {
  const [form, setForm]           = useState({ nama: '', hadir: 'ya', pesan: '' });
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [sent, setSent]           = useState(false);
  const [loading, setLoading]     = useState(false);
  const [fetching, setFetching]   = useState(true);

  // ── 1. Fetch semua ucapan saat komponen dimuat ──────────────────────────
  useEffect(() => {
    const fetchUcapan = async () => {
      const { data, error } = await supabase
        .from('ucapan')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) setUcapanList(data as Ucapan[]);
      setFetching(false);
    };

    fetchUcapan();
  }, []);

  // ── 2. Submit → insert ke Supabase, lalu prepend ke list lokal ──────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.pesan.trim()) return;

    setLoading(true);

    const newEntry: Ucapan = {
      nama: form.nama.trim(),
      kehadiran: form.hadir === 'ya',
      pesan: form.pesan.trim(),
    };

    const { data, error } = await supabase
      .from('ucapan')
      .insert([newEntry])
      .select()
      .single();

    setLoading(false);

    if (!error && data) {
      // Langsung tampilkan di atas tanpa reload
      setUcapanList(prev => [data as Ucapan, ...prev]);
      setForm({ nama: '', hadir: 'ya', pesan: '' });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section className="bg-rose-950 py-16 px-6">
      <div className="max-w-lg mx-auto">
        <Reveal>
          <h2 className="text-4xl text-white text-center mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
            Ucapan Do&apos;a
          </h2>
          <p className="text-rose-200 text-sm text-center mb-8" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            Kirimkan doa dan ucapan terbaik kalian untuk kami
          </p>
        </Reveal>

        {/* ── Form ── */}
        <Reveal delay={80}>
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 space-y-4">
            {/* Nama */}
            <div>
              <label className="block text-rose-100 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                Nama
              </label>
              <input
                type="text"
                value={form.nama}
                onChange={e => setForm(f => ({ ...f, nama: e.target.value }))}
                placeholder="Nama Anda"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-rose-300 text-sm outline-none focus:border-white/60 transition-colors"
                style={{ fontFamily: 'var(--font-raleway)' }}
              />
            </div>

            {/* Kehadiran */}
            <div>
              <label className="block text-rose-100 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                Konfirmasi Kehadiran
              </label>
              <div className="flex gap-3">
                {['ya', 'tidak'].map(val => (
                  <button
                    key={val} type="button"
                    onClick={() => setForm(f => ({ ...f, hadir: val }))}
                    className={`flex-1 py-2 rounded-lg text-sm border transition-colors capitalize ${
                      form.hadir === val
                        ? 'bg-white text-rose-800 border-white font-semibold'
                        : 'border-white/30 text-rose-100 hover:border-white/60'
                    }`}
                    style={{ fontFamily: 'var(--font-raleway)' }}
                  >
                    {val === 'ya' ? 'Hadir ✓' : 'Tidak Hadir'}
                  </button>
                ))}
              </div>
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-rose-100 text-xs mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                Pesan &amp; Doa
              </label>
              <textarea
                rows={3}
                value={form.pesan}
                onChange={e => setForm(f => ({ ...f, pesan: e.target.value }))}
                placeholder="Tuliskan doa terbaik Anda..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-rose-300 text-sm outline-none focus:border-white/60 transition-colors resize-none"
                style={{ fontFamily: 'var(--font-raleway)' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-white text-rose-800 font-semibold py-3 rounded-lg hover:bg-rose-50 transition-colors text-sm disabled:opacity-70"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              <Send className="w-4 h-4" />
              {loading ? 'Mengirim...' : sent ? 'Terkirim! 🎉' : 'Kirimkan Ucapan'}
            </button>
          </form>
        </Reveal>

        {/* ── Area Ucapan ── */}
        <Reveal delay={120}>
          <div
            className="max-h-80 overflow-y-auto rounded-2xl bg-white/5 border border-white/10"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#9f1239 transparent' }}
          >
            {fetching ? (
              /* Skeleton loader */
              <div className="flex items-center justify-center h-40 px-6 text-center">
                <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                  Memuat ucapan...
                </p>
              </div>
            ) : ucapanList.length === 0 ? (
              <div className="flex items-center justify-center h-40 px-6 text-center">
                <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                  Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
                </p>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {ucapanList.map((m, i) => (
                  <div key={m.id ?? i} className="bg-white/10 rounded-xl px-4 py-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-white font-semibold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem' }}>
                        {m.nama}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${m.kehadiran ? 'bg-emerald-500/30 text-emerald-200' : 'bg-rose-400/30 text-rose-200'}`}
                        style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}
                      >
                        {m.kehadiran ? 'Hadir' : 'Tidak Hadir'}
                      </span>
                    </div>
                    <p className="text-rose-100 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
                      {m.pesan}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
