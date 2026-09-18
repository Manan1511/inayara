import { CartProvider } from './context/CartContext'
import Marquee from './components/Marquee'
import Header from './components/Header'
import Hero from './components/Hero'
import ShopByCraft from './components/ShopByCraft'
import ShopByVibe from './components/ShopByVibe'
import WatchAndShop from './components/WatchAndShop'
import BundleAndSave from './components/BundleAndSave'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductModal from './components/ProductModal'
import CheckoutModal from './components/CheckoutModal'
import ToastNotification from './components/ToastNotification'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen overflow-x-hidden bg-cream font-body text-ink">
        <Marquee />
        <Header />
        <Hero />
        <ShopByCraft />
        <ShopByVibe />
        <WatchAndShop />
        <BundleAndSave />
        <Footer />

        {/* Shopping Overlays & Modals */}
        <CartDrawer />
        <ProductModal />
        <CheckoutModal />
        <ToastNotification />
      </div>
    </CartProvider>
  )
}

export default App
