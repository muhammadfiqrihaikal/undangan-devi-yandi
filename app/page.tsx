'use client';

import { useState, useRef } from 'react';
import { Mail, Disc3 } from 'lucide-react';
import Image from 'next/image';
import SectionQuote    from './components/SectionQuote';
import SectionProfil   from './components/SectionProfil';
import SectionEvent    from './components/SectionEvent';
import SectionCountdown from './components/SectionCountdown';
import SectionGallery  from './components/SectionGallery';
import SectionStory    from './components/SectionStory';
import SectionGift     from './components/SectionGift';
import SectionRSVP     from './components/SectionRSVP';
import Footer          from './components/Footer';

// Divider tipis antar section stone-50
function Divider() {
  return (
    <div className="flex items-center gap-3 px-8 max-w-sm mx-auto bg-stone-50">
      <div className="flex-1 h-px bg-rose-200" />
      <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
      <div className="flex-1 h-px bg-rose-200" />
    </div>
  );
}

export default function Home() {
  const [isOpened, setIsOpened]   = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setIsOpened(true);
    // Putar musik — browser mengizinkan play() setelah interaksi pengguna
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    setTimeout(() => {
      document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <main className={isOpened ? 'min-h-screen overflow-x-hidden' : 'h-screen overflow-hidden'}>

      {/* ===== AUDIO ===== */}
      <audio ref={audioRef} src="/music/lagu.mp3" loop preload="none" />

      {/* ===== COVER / HERO ===== */}
      <section className="relative h-screen w-full flex flex-col justify-between">
        <Image
          src="/asset/cover-utama.png" fill priority
          alt="Foto Pengantin"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="-z-10"
        />
        {/* Overlay gelap atas & bawah, tengah cerah */}
        <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-black/55 via-transparent via-40% to-black/65" />

        {/* Blok Atas */}
        <div className="flex flex-col items-center text-center text-white pt-12 px-6 space-y-2">
          <p className="text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            The Wedding Of
          </p>
          <h1 className="text-7xl md:text-8xl leading-none"
            style={{ fontFamily: 'var(--font-great-vibes)' }}>
            Devi &amp; Yandi
          </h1>
          <p className="text-xs tracking-[0.3em]"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            24 - 05 - 2026
          </p>
        </div>

        {/* Blok Bawah */}
        <div className="flex flex-col items-center text-center text-white pb-10 px-6 space-y-2">
          <p className="text-sm tracking-widest"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            Dear,
          </p>
          <p className="text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-great-vibes)' }}>
            Tamu Undangan
          </p>
          <button
            onClick={handleOpen}
            className="mt-3 w-full max-w-xs flex items-center justify-center gap-3 px-6 py-3 bg-black/50 border border-white/80 rounded-md backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-white shrink-0" />
            <span className="text-white text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-raleway)', fontWeight: 400 }}>
              Buka Undangan
            </span>
          </button>
        </div>
      </section>

      {/* ===== KONTEN UNDANGAN ===== */}
      <div id="content-section" className="bg-stone-50">
        <SectionQuote />
        <Divider />
        <SectionProfil />
        <Divider />
        <SectionCountdown />
        <SectionEvent />
        <SectionGallery />
        <Divider />
        <SectionStory />
        <Divider />
        <SectionGift />
        <SectionRSVP />
        <Footer />
      </div>

      {/* ===== FLOATING MUSIC BUTTON ===== */}
      {isOpened && (
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pause musik' : 'Play musik'}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-rose-800 shadow-lg hover:bg-rose-900 active:scale-95 transition-all duration-200"
        >
          <Disc3
            className={`w-5 h-5 text-white ${
              isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''
            }`}
          />
        </button>
      )}
    </main>
  );
}
