import Marquee from './components/Marquee'
import Header from './components/Header'
import Hero from './components/Hero'
import ShopByCraft from './components/ShopByCraft'
import ShopByVibe from './components/ShopByVibe'
import WatchAndShop from './components/WatchAndShop'
import BundleAndSave from './components/BundleAndSave'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream font-body text-ink">
      <Marquee />
      <Header />
      <Hero />
      <ShopByCraft />
      <ShopByVibe />
      <WatchAndShop />
      <BundleAndSave />
      <Footer />
    </div>
  )
}

export default App
