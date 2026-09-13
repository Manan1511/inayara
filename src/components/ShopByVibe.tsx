import { useState } from 'react'
import { vibes, vibeBgs, products } from '../data'
import StripedPlaceholder from './StripedPlaceholder'

export default function ShopByVibe() {
  const [activeVibe, setActiveVibe] = useState('All Vibes')

  const filteredProducts = products.filter((p) => {
    if (activeVibe === 'All Vibes') return true
    if (activeVibe === 'Under ₹999') return p.price < 999
    return p.vibe === activeVibe
  })

  return (
    <section className="px-7 py-14">
      <h2 className="m-0 mb-6 text-center font-display text-[clamp(28px,3.4vw,38px)] font-semibold">
        Shop By Vibe
      </h2>
      <div className="mb-[22px] flex flex-wrap justify-center gap-2.5 overflow-x-auto px-1 py-1">
        {vibes.map((vibe) => (
          <button
            key={vibe}
            onClick={() => setActiveVibe(vibe)}
            className={`cursor-pointer rounded-full border border-tan px-[18px] py-2 text-[13px] font-bold whitespace-nowrap text-ink ${
              vibeBgs[vibe]
            } ${vibe === activeVibe ? 'outline outline-2 outline-cocoa' : ''}`}
          >
            {vibe}
          </button>
        ))}
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-sm text-mocha">No pieces in this vibe yet — check back soon.</p>
      ) : (
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
          {filteredProducts.map((p) => (
            <div key={p.name} className="relative overflow-hidden rounded-2xl border border-tan bg-cream">
              <div className="absolute top-2.5 left-2.5 z-10 rounded-full bg-cocoa px-2.5 py-1 text-[10px] font-bold text-cream">
                {p.badge}
              </div>
              <div className="absolute top-2.5 right-2.5 z-10 cursor-pointer text-base">♡</div>
              <StripedPlaceholder label="product photo" stripeA={p.stripeA} stripeB={p.stripeB} className="h-[160px] rounded-none" />
              <div className="p-3.5">
                <div className="mb-1 font-display text-[15px]">{p.name}</div>
                <div className="mb-2.5 text-[13px] text-mocha">₹{p.price}</div>
                <button className="w-full cursor-pointer rounded-full border border-tan bg-sand py-2 text-xs font-bold text-ink">
                  + Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
