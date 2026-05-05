import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Reveal from './RevealWrapper';

function EventCard({
  bgSrc, title, day, date, month, time, location, mapsUrl, delay,
}: {
  bgSrc: string; title: string; day: string; date: string; month: string;
  time: string; location: string; mapsUrl: string; delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[320px]">
        <Image src={bgSrc} fill alt={title} style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-7 flex flex-col justify-between h-full text-white min-h-[320px]">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-1 text-rose-200" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{title}</p>
            <h3 className="text-3xl font-semibold" style={{ fontFamily: 'var(--font-cormorant)' }}>{title}</h3>
            <div className="mt-3 mb-1">
              <span className="text-sm text-rose-100" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{day}</span>
              <p className="text-5xl font-bold leading-none" style={{ fontFamily: 'var(--font-cormorant)' }}>{date}</p>
              <p className="text-sm" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{month}</p>
            </div>
            <p className="text-sm text-rose-100 mt-2" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{time}</p>
            <p className="text-sm text-rose-100 mt-1 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{location}</p>
          </div>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border border-white/70 rounded-md px-4 py-2 text-xs tracking-widest uppercase hover:bg-white/10 transition-colors w-fit"
            style={{ fontFamily: 'var(--font-raleway)', fontWeight: 400 }}>
            <MapPin className="w-3.5 h-3.5" /> View Maps
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function SectionEvent() {
  return (
    <section className="bg-rose-800 pt-2 pb-14 px-6">
      {/* Wave atas */}
      <svg viewBox="0 0 1440 60" className="w-full -mt-px mb-6" preserveAspectRatio="none">
        <path fill="#f5f0eb" d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" />
      </svg>

      <Reveal>
        <h2 className="text-4xl text-white text-center mb-8" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
          Wedding Event
        </h2>
      </Reveal>

      <div className="max-w-lg mx-auto space-y-5">
        <EventCard
          bgSrc="/asset/bg-akad.png" title="Akad Nikah"
          day="Minggu" date="24" month="Mei 2026"
          time="Pukul 08:00 WIB - Selesai"
          location="Candrajaya Blok A RT/RW 001/003 Kec. Sukahaji, Kab. Majalengka"
          mapsUrl="https://www.google.com/maps/place/Gudang+Bawang+Sumber+Rawit/@-6.8575768,108.2903423,18z/data=!4m15!1m8!3m7!1s0x2e6f245438b55bc3:0x9c22a217f397e3c7!2sCandrajaya,+Kec.+Sukahaji,+Kabupaten+Majalengka,+Jawa+Barat!3b1!8m2!3d-6.8595821!4d108.289654!16s%2Fg%2F120p518x!3m5!1s0x2e6f257f4f6c5913:0x87c0b4be6cfa6cf5!8m2!3d-6.8575738!4d108.2909821!16s%2Fg%2F11p6646p1k?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" delay={100}
        />
        <EventCard
          bgSrc="/asset/bg-resepsi.png" title="Resepsi"
          day="Rabu" date="03" month="Juni 2026"
          time="Pukul 08:00 WIB - Selesai"
          location="Blok Langgeng RT/RW 017/006 Desa Wanahayu, Kec. Maja, Kab. Majalengka"
          mapsUrl="https://www.google.com/maps/place/6%C2%B054'52.8%22S+108%C2%B017'34.3%22E/@-6.9146719,108.290287,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.9146719!4d108.2928619?hl=id&entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" delay={180}
        />
      </div>
    </section>
  );
}
