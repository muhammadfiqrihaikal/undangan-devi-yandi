import Reveal from './RevealWrapper';

export default function SectionQuote() {
  return (
    <section className="py-16 px-6 max-w-lg mx-auto text-center">
      <Reveal>
        <h2 className="text-3xl mb-6 text-rose-800" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}>
          Finally Love
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya. Dan Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
        </p>
        <p className="mt-4 text-rose-800 font-semibold italic text-sm">- Qs Ar-rum : 21</p>
      </Reveal>
    </section>
  );
}
