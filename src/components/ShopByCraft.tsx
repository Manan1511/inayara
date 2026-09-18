import { useState } from 'react'
import { craftCategories } from '../data'
import StripedPlaceholder from './StripedPlaceholder'

export default function ShopByCraft() {
  const [activeCraft, setActiveCraft] = useState(0)
  const active = craftCategories[activeCraft]

  return (
    <section className="border-y border-tan bg-sand px-7 py-14">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="m-0 mb-2 text-center font-display text-[clamp(28px,3.4vw,38px)] font-semibold">
          Shop by Craft
        </h2>
        <p className="m-0 mb-8 text-center text-mocha">
          Crochet, beaded, and handmade: every piece is made by hand, start to finish.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {craftCategories.map((craft, i) => (
            <button
              key={craft.key}
              onClick={() => setActiveCraft(i)}
              className={`cursor-pointer rounded-full border border-tan px-5 py-2.5 font-body text-[13px] font-bold text-ink ${
                i === activeCraft ? craft.bg : 'bg-cream'
              }`}
            >
              {craft.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-7 rounded-[20px] border border-tan bg-cream p-8 md:grid-cols-2">
          {active.image ? (
            <img
              src={active.image}
              alt={`${active.label} collection`}
              loading="lazy"
              className="h-[260px] w-full rounded-2xl object-cover"
            />
          ) : (
            <StripedPlaceholder
              label={`${active.label.toLowerCase()} collection photo`}
              stripeA={active.stripeA}
              stripeB={active.stripeB}
              className="h-[220px]"
            />
          )}
          <div>
            <h3 className="m-0 mb-2 font-display text-xl">{active.tagline}</h3>
            <p className="m-0 mb-5 text-sm leading-normal text-mocha">{active.copy}</p>
            <button className="cursor-pointer rounded-full border-none bg-cocoa px-[26px] py-3 font-body text-sm font-bold text-cream transition-colors hover:bg-cocoa-dark">
              {active.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
