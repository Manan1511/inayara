import { useState } from 'react'
import { vibes, vibeBgs, products } from '../data'
import { useCart } from '../context/useCart'
import StripedPlaceholder from './StripedPlaceholder'

export default function ShopByVibe() {
  const [activeVibe, setActiveVibe] = useState('All Pieces')
  const { setSelectedProduct } = useCart()

  const filteredProducts = products.filter((p) => {
    if (activeVibe === 'All Pieces' || activeVibe === 'All Vibes') return true
    if (activeVibe === 'Under ₹650' || activeVibe === 'Under ₹999') return p.price <= 650
    if (activeVibe === 'Crochet') return p.craft?.toLowerCase().includes('crochet')
    if (activeVibe === 'Beaded') return p.craft?.toLowerCase().includes('bead')
    if (activeVibe === 'Handmade') return p.craft?.toLowerCase().includes('handmade')
    return p.vibe === activeVibe || p.category === activeVibe
  })

  return (
    <section id="shop-by-vibe" className="px-4 py-10 sm:px-7 sm:py-14 scroll-mt-16 sm:scroll-mt-20">
      <h2 className="m-0 mb-2 text-center font-display text-[clamp(26px,3.4vw,38px)] font-semibold text-ink">
        Shop by Craft
      </h2>
      <p className="m-0 mb-6 text-center text-sm sm:text-base text-mocha">
        Explore our collection by technique: crochet, glass beadwork, or handmade artistry.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-2 overflow-x-auto px-1 py-1 sm:gap-2.5">
        {vibes.map((vibe) => (
          <button
            key={vibe}
            onClick={() => setActiveVibe(vibe)}
            className={`cursor-pointer rounded-full border border-tan px-3.5 py-1.5 text-xs font-bold whitespace-nowrap text-ink transition-all duration-200 sm:px-[18px] sm:py-2 sm:text-[13px] ${
              vibeBgs[vibe]
            } ${
              vibe === activeVibe
                ? 'outline outline-2 outline-cocoa shadow-xs scale-105'
                : 'hover:border-cocoa/50 hover:scale-102'
            }`}
          >
            {vibe}
          </button>
        ))}
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-sm text-mocha">No pieces in this vibe yet. Check back soon.</p>
      ) : (
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-tan bg-cream shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-cocoa/40"
            >
              <div className="absolute top-2 left-2 z-10 rounded-full bg-cocoa px-2 py-0.5 text-[9px] font-bold text-cream sm:top-2.5 sm:left-2.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
                {p.badge}
              </div>
              <div className="relative overflow-hidden bg-sand/20">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-[140px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-[180px]"
                  />
                ) : (
                  <StripedPlaceholder
                    label="product photo"
                    stripeA={p.stripeA || '#FAF7F3'}
                    stripeB={p.stripeB || '#F3E2CF'}
                    className="h-[140px] rounded-none sm:h-[180px]"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5">
                <div>
                  <div className="mb-1 font-display text-xs font-semibold text-ink line-clamp-1 sm:text-[15px]">
                    {p.name}
                  </div>
                  <div className="mb-2.5 text-xs font-semibold text-mocha sm:text-[13px]">
                    ₹{p.price}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="w-full cursor-pointer rounded-full border border-tan bg-sand py-2 text-[11px] font-bold text-ink transition-all duration-200 hover:bg-cocoa hover:border-cocoa hover:text-cream active:scale-95 sm:text-xs"
                >
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
