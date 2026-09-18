import { useCart } from '../context/useCart'
import { products } from '../data'

export default function BundleAndSave() {
  const { addToCart, applyPromoCode } = useCart()

  const handleShopBestie = () => {
    const bestieProduct = products.find((p) => p.id === 'prod-bestie-duo') || products[0]
    applyPromoCode('FRIENDS10')
    addToCart(bestieProduct, 1, false)
  }

  return (
    <section className="mx-auto max-w-[1040px] px-4 py-10 sm:px-7 sm:py-14">
      <div className="relative overflow-hidden rounded-[24px] border border-tan bg-sky p-6 sm:p-8 md:p-12 shadow-xs transition-shadow hover:shadow-md">
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 rounded-full bg-cream px-3.5 py-1 text-xs font-bold text-cocoa shadow-xs">
          Buy with friends get 10%
        </div>
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-cocoa">
              Special Bundle Offer
            </span>
            <h3 className="m-0 mb-3 font-display text-[clamp(24px,3vw,34px)] font-semibold text-ink">
              Buy with Friends, Get 10% Off
            </h3>
            <p className="m-0 mb-4 max-w-[420px] text-sm sm:text-[15px] leading-relaxed text-mocha">
              Handcrafted charms made to mix, match, stack, and share with your favorite people. Individual charms at ₹550 and artisan duos at ₹650.
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-cream/70 px-3.5 py-1.5 text-xs font-semibold text-ink">
              <span>✦ Use code <strong className="text-cocoa font-bold">FRIENDS10</strong> for 10% off</span>
            </div>
            <div>
              <button
                onClick={handleShopBestie}
                className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-3 sm:px-7 sm:py-3.5 font-body text-xs sm:text-sm font-bold text-cream shadow-xs transition-all duration-200 hover:bg-cocoa-dark active:scale-95"
              >
                Shop with Friends · Get 10% Off
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-tan/60 bg-cream/50 p-2 shadow-xs transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/products/charm-teddies.jpg"
              alt="Buy with friends handcrafted charms"
              loading="lazy"
              className="h-[200px] sm:h-[240px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
