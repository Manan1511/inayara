import { useState } from 'react'
import { useCart } from '../context/useCart'

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!selectedProduct) return null

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity, false)
    setSelectedProduct(null)
    setQuantity(1)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in"
        onClick={() => setSelectedProduct(null)}
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-[24px] border border-tan bg-cream shadow-2xl animate-scale-up">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-cream/80 text-sm text-mocha shadow-sm hover:bg-cream hover:text-ink"
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-sand/30 p-6 flex items-center justify-center">
            <span className="absolute top-4 left-4 z-10 rounded-full bg-cocoa px-3 py-1 text-[11px] font-bold text-cream">
              {selectedProduct.badge}
            </span>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              loading="lazy"
              className="h-[280px] w-full max-w-[280px] rounded-2xl object-cover shadow-sm"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cocoa">
                  {selectedProduct.craft || 'Handcrafted Artisan'}
                </span>
              </div>

              <h3 className="m-0 mb-2 font-display text-2xl font-semibold text-ink">
                {selectedProduct.name}
              </h3>

              <div className="mb-4 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-ink">
                  ₹{selectedProduct.price}
                </span>
                <span className="text-xs text-mocha">Taxes included</span>
              </div>

              <p className="m-0 mb-5 text-sm leading-relaxed text-mocha">
                {selectedProduct.description ||
                  'Carefully made by hand using premium glass seed beads, charms, and sturdy jewelry findings. Built to stack and wear daily.'}
              </p>

              <div className="mb-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-sand px-3 py-1 font-semibold text-ink">
                  Vibe: {selectedProduct.vibe}
                </span>
                <span className="rounded-full bg-sky/40 px-3 py-1 font-semibold text-ink">
                  Small batch
                </span>
                <span className="rounded-full bg-blush/40 px-3 py-1 font-semibold text-ink">
                  Hand-embroidered
                </span>
              </div>
            </div>

            <div>
              {/* Quantity Picker */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold text-ink">Quantity:</span>
                <div className="inline-flex items-center rounded-full border border-tan bg-sand/40">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-transparent text-sm font-bold hover:text-cocoa"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-ink">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-transparent text-sm font-bold hover:text-cocoa"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="w-full cursor-pointer rounded-full border-none bg-cocoa py-3.5 font-body text-sm font-bold text-cream shadow-sm transition-colors hover:bg-cocoa-dark"
              >
                Add to Bag · ₹{selectedProduct.price * quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
