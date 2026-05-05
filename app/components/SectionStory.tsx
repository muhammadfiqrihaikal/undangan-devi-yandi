import Image from 'next/image';
import Reveal from './RevealWrapper';

const stories = [
  {
    src: '/asset/story-pertemuan.png', title: 'First Phase',
    text: 'Diantara riuh dunia yang tak menunggu, tatapmu jatuh tepat di hatiku, seolah waktu berhenti bernapas dan takdir mulai menulis dengan jelas.',
  },
  {
    src: '/asset/story-lamaran.png', title: 'Second Phase',
    text: 'Namamu pelan-pelan tinggal di doa, hadirmu tumbuh tanpa banyak suara, dari sapa yang sederhana, menjelma rindu yang tak lagi bisa ku sembunyikan maknanya.',
  },
  {
    src: '/asset/story-menikah.png', title: 'Final Phase',
    text: 'Hingga tiba hari yang suci itu — satu tarikan napas, satu ijab terucap penuh haru. Sah, bukan hanya di depan manusia, namun juga di hadapan-Nya. Kini genggaman ini bukan hanya sekadar cinta, melainkan amanah seumur hidup. Dan namamu resmi tersemat di dalam doa, sebagai pasangan dunia & surga.',
  },
];

export default function SectionStory() {
  return (
    <section className="py-16 px-6 bg-stone-50 max-w-lg mx-auto">
      <Reveal>
        <h2 className="text-4xl text-rose-800 text-center mb-10" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
          Story Love
        </h2>
      </Reveal>
      <div className="space-y-12">
        {stories.map((s, i) => (
          <Reveal key={i} delay={80}>
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-sm h-72 relative rounded-2xl overflow-hidden shadow-md mb-5">
                <Image src={s.src} fill alt={s.title} style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="text-xl italic text-rose-800 mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
