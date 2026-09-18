import { heroCards } from '../data'
import StripedPlaceholder from './StripedPlaceholder'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 px-7 py-16 md:grid-cols-2">
      <div>
        <h1 className="m-0 mb-[18px] font-display text-[clamp(36px,5vw,58px)] leading-[1.05] font-semibold">
          Wear Your Vibe,
          <br />
          Swap Your Mood.
        </h1>
        <p className="m-0 mb-[26px] max-w-[460px] text-[17px] leading-normal text-mocha">
          Handcrafted everyday jewelry made to mix, match, stack, and swap.
        </p>
        <div className="mb-[22px] flex flex-wrap gap-3.5">
          <button className="cursor-pointer rounded-full border-none bg-cocoa px-7 py-3.5 font-body text-[15px] font-bold text-cream transition-colors hover:bg-cocoa-dark">
            Build a Custom Piece
          </button>
          <button className="cursor-pointer rounded-full border-none bg-sky px-7 py-3.5 font-body text-[15px] font-bold text-ink transition-colors hover:bg-[#b3e2ee]">
            Shop Trending
          </button>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-tan bg-sand px-4 py-2 text-[13px] font-bold">
          ★ 4.9/5 loved by 15,000+ creators
        </div>
      </div>

      <div className="relative min-h-[420px]">
        {heroCards.map((card) => (
          <div
            key={card.label}
            className={`absolute rounded-[18px] border border-tan p-2.5 pb-[22px] shadow-[0_12px_24px_-14px_rgba(59,42,26,0.3)] ${card.bg} ${card.rotate} ${card.pos}`}
          >
            {card.image ? (
              <img
                src={card.image}
                alt={card.label}
                loading="lazy"
                className="h-[180px] w-full rounded-xl object-cover"
              />
            ) : (
              <StripedPlaceholder label={card.caption} stripeA={card.stripeA} stripeB={card.stripeB} className="h-[180px]" />
            )}
            <div className="mt-2.5 text-center font-display text-[13px]">{card.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
