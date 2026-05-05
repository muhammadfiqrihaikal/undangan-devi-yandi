import Image from 'next/image';
import Reveal from './RevealWrapper';

export default function SectionProfil() {
  return (
    <section className="py-16 px-6 max-w-lg mx-auto text-center">
      <Reveal>
        <h2 className="text-4xl text-rose-800 mb-1" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
          Wedding Ceremony
        </h2>
        <div className="w-20 h-0.5 bg-rose-300 mx-auto mb-5" />
        <p className="text-gray-500 text-sm leading-relaxed mb-10" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
          Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </p>
      </Reveal>

      {/* Wanita */}
      <Reveal delay={80}>
        <div className="flex flex-col items-center mb-4">
          <div className="w-44 h-52 relative rounded-t-full overflow-hidden border-2 border-rose-800/40 mb-4 shadow-md">
            <Image src="/asset/profil-wanita.png" fill alt="Devi Apriliyanti Safara" sizes="176px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <h3 className="text-2xl text-gray-800" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}>
            Devi Apriliyanti Safara
          </h3>
          <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            Putri dari Bapak Halim (alm) &amp; Ibu Yayah Rokayah
          </p>
        </div>
      </Reveal>

      {/* Pemisah & */}
      <Reveal delay={130}>
        <div className="my-4">
          <span className="text-6xl text-rose-800" style={{ fontFamily: 'var(--font-great-vibes)' }}>&amp;</span>
        </div>
      </Reveal>

      {/* Pria */}
      <Reveal delay={180}>
        <div className="flex flex-col items-center mt-2">
          <div className="w-44 h-52 relative rounded-t-full overflow-hidden border-2 border-rose-800/40 mb-4 shadow-md">
            <Image src="/asset/profil-pria.png" fill alt="Yandi Hidayat" sizes="176px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <h3 className="text-2xl text-gray-800" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 700 }}>
            Yandi Hidayat
          </h3>
          <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            Putra dari Bapak Hamid &amp; Ibu Sarimah
          </p>
        </div>
      </Reveal>
    </section>
  );
}
