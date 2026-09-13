import { reels } from '../data'
import StripedPlaceholder from './StripedPlaceholder'

export default function WatchAndShop() {
  return (
    <section className="border-y border-tan bg-sand px-7 py-14">
      <h2 className="m-0 mb-6 text-center font-display text-[clamp(28px,3.4vw,38px)] font-semibold">
        Watch &amp; Shop
      </h2>
      <div className="mx-auto flex max-w-[1200px] gap-[18px] overflow-x-auto p-1">
        {reels.map((reel) => (
          <div key={reel.title} className="relative w-[200px] flex-none overflow-hidden rounded-[18px] border border-tan">
            <StripedPlaceholder label="try-on reel video" stripeA={reel.stripeA} stripeB={reel.stripeB} className="h-[340px] rounded-none" />
            <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center gap-2 rounded-xl bg-cream px-2.5 py-2">
              <div
                className="h-[30px] w-[30px] flex-shrink-0 rounded-lg"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #F3E2CF, #F3E2CF 6px, #e9d3b6 6px, #e9d3b6 12px)',
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[11px] font-bold">{reel.title}</div>
                <div className="text-[10px] text-mocha">₹{reel.price}</div>
              </div>
              <button className="cursor-pointer rounded-full border-none bg-cocoa px-2.5 py-1.5 text-[9px] font-bold whitespace-nowrap text-cream">
                Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
