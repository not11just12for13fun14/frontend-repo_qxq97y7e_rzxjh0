function Footer() {
  return (
    <footer id="contatti" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700" />
          <p className="mt-4 text-black/60 text-sm">Profumi artigianali ispirati all'eleganza senza tempo. Bianco, nero e oro come nostra firma.</p>
        </div>
        <div>
          <h4 className="font-semibold">Collezioni</h4>
          <ul className="mt-3 space-y-2 text-black/60 text-sm">
            <li><a href="#" className="hover:text-black">Classici</a></li>
            <li><a href="#" className="hover:text-black">Edizioni Limitate</a></li>
            <li><a href="#" className="hover:text-black">Unisex</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Supporto</h4>
          <ul className="mt-3 space-y-2 text-black/60 text-sm">
            <li><a href="#" className="hover:text-black">Spedizioni</a></li>
            <li><a href="#" className="hover:text-black">Resi</a></li>
            <li><a href="#" className="hover:text-black">Contattaci</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs text-black/50">© {new Date().getFullYear()} OroNero. Tutti i diritti riservati.</div>
    </footer>
  );
}

export default Footer;