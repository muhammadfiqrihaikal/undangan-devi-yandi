'use client';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import Reveal from './RevealWrapper';

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

// Target: 24 Mei 2026 08:00:00 WIB = 24 Mei 2026 01:00:00 UTC
const TARGET_DATE = new Date('2026-05-24T01:00:00Z');

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = ['Hari', 'Jam', 'Menit', 'Detik'] as const;

export default function SectionCountdown() {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft]   = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Hitung nilai awal di client agar cocok dengan SSR placeholder
    setTimeLeft(getTimeLeft());
    setIsMounted(true);

    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Saat SSR / sebelum mount: tampilkan '00' agar server & client DOM identik
  const values = isMounted
    ? [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
    : [0, 0, 0, 0];

  const handleSaveDate = () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Pernikahan Devi & Yandi//EN',
      'BEGIN:VEVENT',
      'DTSTART:20260524T010000Z',
      'DTEND:20260524T060000Z',
      'SUMMARY:Pernikahan Devi & Yandi',
      'DESCRIPTION:Hari Bahagia Devi & Yandi — 24 Mei 2026',
      'LOCATION:Indonesia',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = Object.assign(document.createElement('a'), {
      href: url,
      download: 'pernikahan-devi-yandi.ics',
    });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="bg-stone-50 py-16 px-6">
      <div className="max-w-lg mx-auto text-center">

        {/* Heading */}
        <Reveal>
          <p
            className="text-xs tracking-[0.35em] uppercase text-rose-400 mb-2"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}
          >
            Menuju Hari Bahagia
          </p>
          <h2
            className="text-4xl text-rose-900 mb-8"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}
          >
            Hitung Mundur
          </h2>
        </Reveal>

        {/* Kotak Countdown */}
        <Reveal delay={60}>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {UNITS.map((label, i) => (
              <div
                key={label}
                className="bg-white rounded-2xl py-4 px-2 shadow-sm border border-rose-100 flex flex-col items-center gap-1.5"
              >
                <span
                  className="text-4xl sm:text-5xl font-bold text-rose-800 tabular-nums leading-none"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {String(values[i]).padStart(2, '0')}
                </span>
                <span
                  className="text-[10px] text-rose-400 tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tombol Save the Date */}
        <Reveal delay={120}>
          <button
            onClick={handleSaveDate}
            className="w-full flex items-center justify-center gap-2.5 bg-rose-800 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-rose-900 active:scale-[0.98] transition-all duration-200 text-sm shadow-md"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            Save the Date
          </button>
        </Reveal>

      </div>
    </section>
  );
}
