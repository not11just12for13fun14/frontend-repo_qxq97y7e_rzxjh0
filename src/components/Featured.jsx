import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function FeaturedCard({ product }) {
  return (
    <div className="group min-w-[240px] max-w-[260px] shrink-0 rounded-2xl border border-black/10 bg-white p-4 transition hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/5">
        <img src={product.image_url} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-2 py-1 text-[10px] font-semibold text-black">Scelto per te</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-black leading-snug line-clamp-2">{product.title}</h3>
          <p className="text-xs uppercase tracking-wider text-black/50">{product.brand}</p>
        </div>
        <p className="text-black font-semibold">€ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function Featured() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch(`${API_BASE}/api/products?featured=true&limit=8`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <section aria-labelledby="featured-heading" className="mx-auto max-w-7xl px-6 pt-8 md:pt-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 id="featured-heading" className="text-2xl md:text-3xl font-semibold">
            Profumi selezionati per te
          </h2>
          <p className="text-black/60">Una curatela di fragranze in evidenza</p>
        </div>
      </div>

      {loading ? (
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse min-w-[240px] max-w-[260px] rounded-2xl border border-black/10 bg-white p-4">
              <div className="aspect-[4/5] rounded-xl bg-black/5" />
              <div className="mt-4 h-4 w-2/3 bg-black/10 rounded" />
              <div className="mt-2 h-4 w-1/3 bg-black/10 rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none]">
            {/* hide scrollbar for webkit */}
            <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
            {products.map((p) => (
              <FeaturedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
