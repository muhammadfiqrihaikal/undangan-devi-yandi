import Image from 'next/image';
import Reveal from './RevealWrapper';

const photos = [
  '/asset/gallery-1.png', '/asset/gallery-2.png', '/asset/gallery-3.png',
  '/asset/gallery-4.png', '/asset/gallery-5.png', '/asset/gallery-6.png',
];

export default function SectionGallery() {
  return (
    <section className="bg-rose-800 pb-0">
      <Reveal>
        <h2 className="text-4xl text-white text-center pt-10 pb-6" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
          Gallery
        </h2>
      </Reveal>

      <div className="grid grid-cols-3 gap-1 px-1 max-w-lg mx-auto">
        {photos.map((src, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image src={src} fill sizes="(max-width: 512px) 33vw, 170px" alt={`Foto ${i + 1}`} style={{ objectFit: 'cover' }} />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Wave bawah menuju stone-50 */}
      <svg viewBox="0 0 1440 60" className="w-full mt-8" preserveAspectRatio="none">
        <path fill="#f5f0eb" d="M0,60 C360,0 1080,60 1440,0 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}
