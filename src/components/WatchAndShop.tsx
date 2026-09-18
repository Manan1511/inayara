import { reels, products } from '../data'
import { useCart } from '../context/useCart'
import StripedPlaceholder from './StripedPlaceholder'

export default function WatchAndShop() {
  const { addToCart } = useCart()

  const handleShopReel = (reelIndex: number) => {
    // Map reel to corresponding product
    const targetProduct = products[reelIndex] || products[0]
    addToCart(targetProduct, 1, false)
  }

  return (
    <section className="border-y border-tan bg-sand px-4 py-10 sm:px-7 sm:py-14">
      <h2 className="m-0 mb-6 text-center font-display text-[clamp(26px,3.4vw,38px)] font-semibold text-ink">
        Watch &amp; Shop
      </h2>
      <div className="-mx-4 flex max-w-[1200px] gap-3.5 overflow-x-auto px-4 pb-2 sm:mx-auto sm:gap-[18px] sm:px-1">
        {reels.map((reel, i) => (
          <div
            key={reel.title}
            className="group relative w-[170px] sm:w-[200px] flex-none overflow-hidden rounded-[18px] border border-tan transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {reel.image ? (
              <img
                src={reel.image}
                alt={reel.title}
                loading="lazy"
                className="h-[300px] sm:h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <StripedPlaceholder label="try-on reel video" stripeA={reel.stripeA} stripeB={reel.stripeB} className="h-[300px] sm:h-[340px] rounded-none" />
            )}
            <div className="absolute right-2 bottom-2 left-2 flex items-center gap-2 rounded-xl bg-cream/95 backdrop-blur-xs p-2 sm:right-2.5 sm:bottom-2.5 sm:left-2.5 sm:px-2.5 sm:py-2">
              {reel.image ? (
                <img
                  src={reel.image}
                  alt=""
                  loading="lazy"
                  className="h-7 w-7 sm:h-[30px] sm:w-[30px] flex-shrink-0 rounded-lg object-cover"
                />
              ) : (
                <div
                  className="h-7 w-7 sm:h-[30px] sm:w-[30px] flex-shrink-0 rounded-lg"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #F3E2CF, #F3E2CF 6px, #e9d3b6 6px, #e9d3b6 12px)',
                  }}
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10px] sm:text-[11px] font-bold text-ink">{reel.title}</div>
                <div className="text-[10px] text-mocha">₹{reel.price}</div>
              </div>
              <button
                onClick={() => handleShopReel(i)}
                className="cursor-pointer rounded-full border-none bg-cocoa px-2.5 py-1 text-[9px] font-bold whitespace-nowrap text-cream transition-all hover:bg-cocoa-dark active:scale-95"
              >
                Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
