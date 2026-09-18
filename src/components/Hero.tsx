import { heroCards, products } from '../data'
import { useCart } from '../context/useCart'
import StripedPlaceholder from './StripedPlaceholder'

export default function Hero() {
  const { setSelectedProduct } = useCart()

  const handleBuildCustom = () => {
    const customPiece = products.find((p) => p.badge === 'Customizable') || products[0]
    setSelectedProduct(customPiece)
  }

  const handleShopTrending = () => {
    document.getElementById('shop-by-vibe')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="grid grid-cols-1 items-center gap-10 px-4 py-12 sm:px-7 sm:py-16 md:grid-cols-2">
      <div>
        <h1 className="m-0 mb-[18px] font-display text-[clamp(32px,5vw,58px)] leading-[1.05] font-semibold text-ink">
          Wear Your Vibe,
          <br />
          Swap Your Mood.
        </h1>
        <p className="m-0 mb-[26px] max-w-[460px] text-[16px] sm:text-[17px] leading-normal text-mocha">
          Handcrafted everyday jewelry made to mix, match, stack, and swap.
        </p>
        <div className="mb-[22px] flex flex-wrap gap-3.5">
          <button
            onClick={handleBuildCustom}
            className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-3 sm:px-7 sm:py-3.5 font-body text-sm sm:text-[15px] font-bold text-cream shadow-xs transition-all duration-200 hover:bg-cocoa-dark hover:shadow-md active:scale-95"
          >
            Build a Custom Piece
          </button>
          <button
            onClick={handleShopTrending}
            className="cursor-pointer rounded-full border-none bg-sky px-6 py-3 sm:px-7 sm:py-3.5 font-body text-sm sm:text-[15px] font-bold text-ink shadow-xs transition-all duration-200 hover:bg-[#b3e2ee] hover:shadow-md active:scale-95"
          >
            Shop Trending
          </button>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-tan bg-sand px-4 py-2 text-[12px] sm:text-[13px] font-bold transition-transform hover:scale-105">
          ★ 4.9/5 loved by 15,000+ creators
        </div>
      </div>

      <div className="relative min-h-[380px] sm:min-h-[420px] max-w-[480px] w-full mx-auto md:mx-0">
        {heroCards.map((card, idx) => {
          const floatClass = idx % 2 === 0 ? 'animate-float' : 'animate-float-reverse'
          return (
            <div
              key={card.label}
              className={`absolute rounded-[18px] border border-tan p-2.5 pb-[22px] shadow-[0_12px_24px_-14px_rgba(59,42,26,0.3)] transition-all duration-300 hover:scale-105 hover:z-30 hover:rotate-0 hover:shadow-xl cursor-pointer ${card.bg} ${card.rotate} ${card.pos} ${floatClass}`}
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.label}
                  loading="lazy"
                  className="h-[150px] sm:h-[180px] w-full rounded-xl object-cover"
                />
              ) : (
                <StripedPlaceholder label={card.caption} stripeA={card.stripeA} stripeB={card.stripeB} className="h-[150px] sm:h-[180px]" />
              )}
              <div className="mt-2.5 text-center font-display text-[12px] sm:text-[13px] font-semibold">{card.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
