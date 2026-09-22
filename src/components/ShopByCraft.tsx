import { useState } from 'react'
import { craftCategories } from '../data'
import StripedPlaceholder from './StripedPlaceholder'

export default function ShopByCraft() {
  const [activeCraft, setActiveCraft] = useState(0)
  const active = craftCategories[activeCraft]

  return (
    <section id="shop-by-craft" className="border-y border-tan bg-sand px-4 py-10 sm:px-7 sm:py-14 scroll-mt-16 sm:scroll-mt-20">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="m-0 mb-2 text-center font-display text-[clamp(26px,3.4vw,38px)] font-semibold text-ink">
          Shop by Category
        </h2>
        <p className="m-0 mb-7 text-center text-sm sm:text-base text-mocha">
          Bags, pouches, charms, clips, and scrunchies: handcrafted start to finish.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {craftCategories.map((craft, i) => (
            <button
              key={craft.key}
              onClick={() => setActiveCraft(i)}
              className={`cursor-pointer rounded-full border border-tan px-4 py-2 sm:px-5 sm:py-2.5 font-body text-xs sm:text-[13px] font-bold text-ink transition-all duration-200 active:scale-95 ${
                i === activeCraft ? `${craft.bg} shadow-xs` : 'bg-cream hover:bg-sand/60'
              }`}
            >
              {craft.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:gap-7 rounded-[20px] border border-tan bg-cream p-5 sm:p-8 shadow-xs md:grid-cols-2">
          {active.image ? (
            <img
              src={active.image}
              alt={`${active.label} collection`}
              loading="lazy"
              className="h-[220px] sm:h-[260px] w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ) : (
            <StripedPlaceholder
              label={`${active.label.toLowerCase()} collection photo`}
              stripeA={active.stripeA}
              stripeB={active.stripeB}
              className="h-[200px] sm:h-[220px]"
            />
          )}
          <div>
            <h3 className="m-0 mb-2 font-display text-lg sm:text-xl font-semibold text-ink">{active.tagline}</h3>
            <p className="m-0 mb-5 text-xs sm:text-sm leading-relaxed text-mocha">{active.copy}</p>
            <button
              onClick={() => document.getElementById('shop-by-vibe')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-2.5 sm:px-[26px] sm:py-3 font-body text-xs sm:text-sm font-bold text-cream shadow-xs transition-all duration-200 hover:bg-cocoa-dark active:scale-95"
            >
              {active.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
