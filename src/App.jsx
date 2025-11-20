import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Featured />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
