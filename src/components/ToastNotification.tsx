import { useCart } from '../context/useCart'

export default function ToastNotification() {
  const { toastMessage, setIsCartOpen, clearToast, isCartOpen } = useCart()
  if (!toastMessage || isCartOpen) return null

  const handleViewBag = () => {
    clearToast()
    setIsCartOpen(true)
  }

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 animate-slide-in-right">
      <div className="flex items-center gap-3 rounded-2xl border border-tan bg-cream/95 backdrop-blur-md px-4 py-3 shadow-xl">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cocoa text-cream text-xs font-bold shadow-xs">
          ✦
        </div>
        <div className="text-xs font-bold text-ink">
          {toastMessage}
        </div>
        <button
          onClick={handleViewBag}
          className="ml-1 cursor-pointer rounded-full border border-tan bg-sand px-3 py-1 font-body text-[11px] font-bold text-ink transition-colors hover:bg-cocoa hover:text-cream"
        >
          View Bag →
        </button>
        <button
          onClick={clearToast}
          className="cursor-pointer text-xs text-mocha hover:text-ink px-1"
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
