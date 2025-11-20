import { ShoppingBag, Search, Menu } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700" />
          <span className="text-xl font-semibold tracking-wide">OroNero</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#prodotti" className="hover:text-black">Profumi</a>
          <a href="#storie" className="hover:text-black">Storie</a>
          <a href="#contatti" className="hover:text-black">Contatti</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-black/70 hover:bg-black/5">
            <Search size={16} /> Cerca
          </button>
          <button className="relative inline-flex items-center gap-2 rounded-full bg-black px-3 py-2 text-sm text-white hover:bg-black/90">
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Carrello</span>
            <span className="absolute -top-1 -right-1 h-5 min-w-[20px] rounded-full bg-yellow-500 text-xs grid place-items-center px-1">0</span>
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;