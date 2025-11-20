import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs tracking-widest uppercase text-black">
            Nuove Essenze · Edizione Limitata
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-black">
            Eleganza in bianco, nero e oro
          </h1>
          <p className="mt-4 text-black/70 text-lg">
            Scopri la nostra collezione di profumi artigianali. Note raffinate, design minimalista, lusso contemporaneo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#prodotti" className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/90 transition">Acquista ora</a>
            <a href="#storie" className="rounded-full border border-black px-6 py-3 text-black hover:bg-black/5 transition">Scopri di più</a>
          </div>
        </div>
        <div className="hidden md:block w-full max-w-md rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black/60">The Fragrance of Creativity</p>
              <p className="text-2xl font-semibold text-black">Collezione 2025</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
          </div>
          <p className="mt-4 text-black/70 text-sm">
            Due flaconi in vetro con riflessi iridescenti, sospesi in un minimalismo moderno. Un invito a lasciarsi ispirare.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
    </section>
  );
}

export default Hero;