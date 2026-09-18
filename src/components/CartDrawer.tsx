import { useState } from 'react'
import { useCart } from '../context/useCart'
import { FREE_SHIPPING_THRESHOLD } from '../constants/shop'

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    discount,
    shippingFee,
    total,
    promoCode,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
    applyPromoCode,
    removePromoCode,
  } = useCart()

  const [promoInput, setPromoInput] = useState('')
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null)

  if (!isCartOpen) return null

  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    const result = applyPromoCode(promoInput)
    setPromoFeedback(result)
    if (result.success) {
      setPromoInput('')
    }
  }

  const handleProceedToCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <aside className="relative z-10 flex h-full w-full max-w-full sm:max-w-[440px] flex-col border-l border-tan bg-cream shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-tan px-6 py-4">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <span>Your Bag</span>
            <span className="rounded-full bg-sand px-2.5 py-0.5 text-xs font-bold text-ink">
              {cartCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-lg text-mocha transition-colors hover:bg-sand hover:text-ink"
            aria-label="Close bag"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="border-b border-tan/60 bg-sand/40 px-6 py-3">
          <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
            {freeShippingLeft === 0 ? (
              <span className="text-cocoa font-bold">✦ You unlocked Free Shipping &amp; Gift Wrap!</span>
            ) : (
              <span>Add ₹{freeShippingLeft} more for <strong className="text-cocoa">Free Shipping</strong></span>
            )}
            <span className="text-[11px] text-mocha">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-tan/30">
            <div
              className="h-full rounded-full bg-cocoa transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-sand/60 text-cocoa">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h4 className="m-0 mb-1.5 font-display text-lg font-semibold">Your bag is empty</h4>
              <p className="m-0 mb-6 max-w-[260px] text-xs text-mocha">
                Explore our handcrafted beaded and crochet pieces to find your vibe.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-2.5 font-body text-xs font-bold text-cream transition-colors hover:bg-cocoa-dark"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3.5 rounded-xl border border-tan/60 bg-cream p-3 shadow-xs"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="m-0 font-display text-sm font-semibold text-ink line-clamp-1">
                          {product.name}
                        </h5>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="cursor-pointer border-none bg-transparent text-xs text-mocha hover:text-cocoa"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="text-[11px] text-mocha">
                        {product.vibe} · ₹{product.price}
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="inline-flex items-center rounded-full border border-tan bg-sand/60">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="flex h-6 w-6 cursor-pointer items-center justify-center border-none bg-transparent text-xs font-bold text-ink hover:text-cocoa"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-ink">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="flex h-6 w-6 cursor-pointer items-center justify-center border-none bg-transparent text-xs font-bold text-ink hover:text-cocoa"
                        >
                          +
                        </button>
                      </div>

                      <div className="font-display text-sm font-semibold text-ink">
                        ₹{product.price * quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Calculations */}
        {cart.length > 0 && (
          <div className="border-t border-tan bg-sand/30 p-6">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (e.g. INAYARA10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 rounded-full border border-tan bg-cream px-3.5 py-1.5 font-body text-xs text-ink uppercase outline-none focus:border-cocoa"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-full border border-tan bg-sand px-4 py-1.5 font-body text-xs font-bold text-ink hover:bg-tan/40"
                >
                  Apply
                </button>
              </div>
              {promoFeedback && (
                <p
                  className={`mt-1.5 text-[11px] font-semibold ${
                    promoFeedback.success ? 'text-cocoa' : 'text-red-600'
                  }`}
                >
                  {promoFeedback.message}
                </p>
              )}
              {promoCode && (
                <div className="mt-2 flex items-center justify-between rounded-lg bg-blush/40 px-3 py-1 text-xs">
                  <span className="font-bold text-cocoa">Applied: {promoCode}</span>
                  <button
                    type="button"
                    onClick={removePromoCode}
                    className="cursor-pointer text-[11px] text-mocha underline hover:text-ink"
                  >
                    Remove
                  </button>
                </div>
              )}
            </form>

            {/* Price Calculations */}
            <div className="mb-4 space-y-1.5 text-xs">
              <div className="flex justify-between text-mocha">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-cocoa font-semibold">
                  <span>Promo Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="flex justify-between text-mocha">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-cocoa">FREE</strong> : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between border-t border-tan/60 pt-2 font-display text-base font-bold text-ink">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full cursor-pointer rounded-full border-none bg-cocoa py-3.5 font-body text-sm font-bold text-cream shadow-sm transition-colors hover:bg-cocoa-dark"
            >
              Proceed to Checkout · ₹{total}
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
