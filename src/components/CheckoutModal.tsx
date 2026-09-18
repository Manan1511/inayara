import { useState } from 'react'
import { useCart } from '../context/useCart'
import type { ShippingAddress, PaymentMethod } from '../types/shop'

type CheckoutStep = 'address' | 'payment' | 'confirmation'

export default function CheckoutModal() {
  const {
    cart,
    subtotal,
    discount,
    shippingFee,
    total,
    isCheckoutOpen,
    setIsCheckoutOpen,
    completedOrder,
    placeOrder,
  } = useCart()

  const [step, setStep] = useState<CheckoutStep>('address')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi')
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ShippingAddress, string>>>({})

  if (!isCheckoutOpen && !completedOrder) return null

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateAddress = (): boolean => {
    const newErrors: Partial<Record<keyof ShippingAddress, string>> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required'
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = '10-digit mobile number required'
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Delivery address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.postalCode.trim()) newErrors.postalCode = '6-digit PIN code required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateAddress()) {
      setStep('payment')
    }
  }

  const handleCompletePayment = () => {
    // Payment Gateway adapter hookup point
    placeOrder(formData, paymentMethod)
    setStep('confirmation')
  }

  const handleClose = () => {
    setIsCheckoutOpen(false)
    setStep('address')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in" onClick={handleClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[620px] max-h-[90vh] overflow-y-auto rounded-[24px] border border-tan bg-cream p-5 sm:p-8 shadow-2xl animate-scale-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-mocha hover:bg-sand hover:text-ink"
        >
          ✕
        </button>

        {/* Step 1: Shipping Address */}
        {step === 'address' && (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cocoa">Step 1 of 2</span>
              <h3 className="m-0 font-display text-2xl font-semibold text-ink">Shipping Details</h3>
              <p className="m-0 text-xs text-mocha">Where should we deliver your handcrafted piece?</p>
            </div>

            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Aarav Sharma"
                  className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                />
                {errors.fullName && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="aarav@gmail.com"
                    className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                  />
                  {errors.phone && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink">Street Address &amp; Landmark *</label>
                <input
                  type="text"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                  placeholder="Flat 402, Green Meadows Apt, Indiranagar"
                  className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                />
                {errors.streetAddress && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.streetAddress}</p>}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink">City *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Bengaluru"
                    className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                  />
                  {errors.city && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.city}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="Karnataka"
                    className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink">PIN Code *</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    placeholder="560038"
                    className="w-full rounded-xl border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-cocoa"
                  />
                  {errors.postalCode && <p className="mt-1 text-[11px] text-red-600 font-semibold">{errors.postalCode}</p>}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full border-none bg-cocoa px-8 py-3.5 font-body text-sm font-bold text-cream shadow-sm transition-colors hover:bg-cocoa-dark"
                >
                  Continue to Payment · ₹{total}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Payment Gateway & Method */}
        {step === 'payment' && (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cocoa">Step 2 of 2</span>
              <h3 className="m-0 font-display text-2xl font-semibold text-ink">Select Payment Method</h3>
              <p className="m-0 text-xs text-mocha">
                Payment gateway integration ready. Select a mock method to test your order flow.
              </p>
            </div>

            <div className="mb-6 space-y-3">
              {[
                {
                  id: 'upi',
                  title: 'UPI / Google Pay / PhonePe / Paytm',
                  subtitle: 'Fast QR & direct UPI transfer',
                  badge: 'Recommended',
                },
                {
                  id: 'card',
                  title: 'Credit / Debit Card / Netbanking',
                  subtitle: 'Visa, Mastercard, RuPay',
                },
                {
                  id: 'cod',
                  title: 'Cash on Delivery (COD)',
                  subtitle: 'Pay cash upon arrival at your doorstep',
                },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-colors ${
                    paymentMethod === opt.id
                      ? 'border-cocoa bg-sand/40 ring-1 ring-cocoa'
                      : 'border-tan bg-cream hover:bg-sand/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === opt.id}
                      onChange={() => setPaymentMethod(opt.id as PaymentMethod)}
                      className="accent-cocoa"
                    />
                    <div>
                      <div className="font-display text-sm font-semibold text-ink">{opt.title}</div>
                      <div className="text-xs text-mocha">{opt.subtitle}</div>
                    </div>
                  </div>
                  {opt.badge && (
                    <span className="rounded-full bg-cocoa px-2.5 py-0.5 text-[10px] font-bold text-cream">
                      {opt.badge}
                    </span>
                  )}
                </label>
              ))}
            </div>

            {/* Order Review Box */}
            <div className="mb-6 rounded-xl border border-tan/60 bg-sand/30 p-4 text-xs">
              <div className="mb-2 flex justify-between font-bold text-ink">
                <span>Items ({cart.length})</span>
                <span>Subtotal: ₹{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="mb-1 flex justify-between text-cocoa font-semibold">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="mb-2 flex justify-between text-mocha">
                <span>Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>
              <div className="flex justify-between border-t border-tan/60 pt-2 font-display text-base font-bold text-ink">
                <span>Amount to Pay</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep('address')}
                className="cursor-pointer rounded-full border border-tan bg-sand px-5 py-2.5 text-xs font-bold text-ink hover:bg-tan/40"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleCompletePayment}
                className="cursor-pointer rounded-full border-none bg-cocoa px-8 py-3.5 font-body text-sm font-bold text-cream shadow-sm transition-colors hover:bg-cocoa-dark"
              >
                Place Order · ₹{total} ✦
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation Screen */}
        {step === 'confirmation' && completedOrder && (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sand text-3xl">
              ✦
            </div>
            <span className="rounded-full bg-blush/60 px-3 py-1 text-xs font-bold text-cocoa">
              Order Confirmed
            </span>
            <h3 className="m-0 mt-3 mb-2 font-display text-2xl font-semibold text-ink">
              Thank you, {completedOrder.shippingAddress.fullName}!
            </h3>
            <p className="m-0 mb-6 text-sm text-mocha">
              We have received your order <strong>#{completedOrder.id}</strong> and our artisans are preparing your handmade pieces.
            </p>

            <div className="mb-6 rounded-2xl border border-tan bg-sand/30 p-4 text-left text-xs">
              <div className="mb-2 font-bold text-ink">Order Summary:</div>
              <div className="space-y-1.5 text-mocha">
                {completedOrder.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <span>{item.quantity}x {item.product.name}</span>
                    <span>₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between border-t border-tan/60 pt-2 font-display text-sm font-bold text-ink">
                <span>Total Paid:</span>
                <span>₹{completedOrder.total}</span>
              </div>
              <div className="mt-3 border-t border-tan/60 pt-2 text-[11px] text-mocha">
                Shipping to: {completedOrder.shippingAddress.streetAddress}, {completedOrder.shippingAddress.city}, {completedOrder.shippingAddress.postalCode}
              </div>
            </div>

            <button
              onClick={handleClose}
              className="cursor-pointer rounded-full border-none bg-cocoa px-8 py-3.5 font-body text-sm font-bold text-cream shadow-sm transition-colors hover:bg-cocoa-dark"
            >
              Back to Home &amp; Shop More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
