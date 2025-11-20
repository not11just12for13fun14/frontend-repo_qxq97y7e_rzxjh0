import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-4 transition hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/5">
        <img src={product.image_url} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.is_featured && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-2 py-1 text-[10px] font-semibold text-black">In evidenza</span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-black leading-snug">{product.title}</h3>
          <p className="text-xs uppercase tracking-wider text-black/50">{product.brand}</p>
        </div>
        <p className="text-black font-semibold">€ {product.price.toFixed(2)}</p>
      </div>
      <button className="mt-4 w-full rounded-full bg-black px-4 py-2 text-white hover:bg-black/90">Aggiungi</button>
    </div>
  );
}

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/products?limit=12`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="prodotti" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl border border-black/10 bg-white p-4">
              <div className="aspect-[4/5] rounded-xl bg-black/5" />
              <div className="mt-4 h-4 w-2/3 bg-black/10 rounded" />
              <div className="mt-2 h-4 w-1/3 bg-black/10 rounded" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="prodotti" className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Profumi selezionati</h2>
          <p className="text-black/60">Scelte curate per te</p>
        </div>
        <a href="#" className="text-sm text-black/60 hover:text-black">Vedi tutti</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;