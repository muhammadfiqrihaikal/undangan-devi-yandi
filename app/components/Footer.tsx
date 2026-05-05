import Reveal from './RevealWrapper';

export default function Footer() {
  return (
    <footer className="bg-rose-950 border-t border-rose-900 py-14 px-6 text-center text-white">
      <Reveal>
        <p className="text-xs tracking-[0.35em] uppercase text-rose-300 mb-3"
          style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
          Kami Yang Berbahagia,
        </p>
        <p className="text-6xl text-white" style={{ fontFamily: 'var(--font-great-vibes)' }}>
          Devi &amp; Yandi
        </p>
        <p className="mt-6 text-rose-400 text-xs" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
          24 Mei 2026 &nbsp;·&nbsp; Majalengka
        </p>
      </Reveal>
    </footer>
  );
}
