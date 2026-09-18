import { useEffect, useState, useMemo, type ReactNode } from 'react'
import type { CartItem, Product, ShippingAddress, PaymentMethod, Order } from '../types/shop'
import {
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_FEE,
  CART_STORAGE_KEY,
  PROMO_CODES,
} from '../constants/shop'
import { CartContext, type PromoResult } from './cartContextDef'

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null)
  const [promoCode, setPromoCode] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // ignore storage write errors
    }
  }, [cart])

  // Clear toast after 3 seconds
  useEffect(() => {
    if (!toastMessage) return
    const timer = setTimeout(() => setToastMessage(null), 3000)
    return () => clearTimeout(timer)
  }, [toastMessage])

  const showToast = (message: string) => {
    setToastMessage(message)
  }

  const clearToast = () => {
    setToastMessage(null)
  }

  const handleSetIsCartOpen = (open: boolean) => {
    setIsCartOpen(open)
    if (open) {
      setToastMessage(null)
    }
  }

  const addToCart = (product: Product, quantity = 1, openDrawer = false) => {
    if (quantity <= 0) return
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { product, quantity }]
    })
    showToast(`Added ${product.name} to bag ✦`)
    if (openDrawer) {
      setIsCartOpen(true)
    }
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    )
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const clearCart = () => {
    setCart([])
    setPromoCode('')
  }

  const applyPromoCode = (code: string): PromoResult => {
    const clean = code.trim().toUpperCase()
    if (!clean) {
      return { success: false, message: 'Please enter a promo code' }
    }
    if (PROMO_CODES[clean]) {
      setPromoCode(clean)
      return { success: true, message: `Code ${clean} applied (${PROMO_CODES[clean].description})` }
    }
    return { success: false, message: 'Invalid promo code' }
  }

  const removePromoCode = () => {
    setPromoCode('')
  }

  // Calculations
  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  )

  const activePromo = promoCode ? PROMO_CODES[promoCode] : null
  const appliedDiscountRate = activePromo ? activePromo.discountRate : 0
  const isFreeShippingPromo = Boolean(activePromo?.freeShipping)

  const discount = Math.round(subtotal * appliedDiscountRate)

  const shippingFee = useMemo(() => {
    if (cart.length === 0) return 0
    if (isFreeShippingPromo || subtotal >= FREE_SHIPPING_THRESHOLD) return 0
    return STANDARD_SHIPPING_FEE
  }, [cart.length, isFreeShippingPromo, subtotal])

  const total = Math.max(0, subtotal - discount + shippingFee)

  const placeOrder = (shippingAddress: ShippingAddress, paymentMethod: PaymentMethod): Order => {
    const orderNumber = Math.floor(10000 + Math.random() * 90000)
    const order: Order = {
      id: `INA-${orderNumber}`,
      items: [...cart],
      subtotal,
      discount,
      shippingFee,
      total,
      shippingAddress,
      paymentMethod,
      createdAt: new Date().toISOString(),
    }
    setCompletedOrder(order)
    clearCart()
    return order
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        discount,
        shippingFee,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        promoCode,
        appliedDiscountRate,
        isFreeShippingPromo,
        isCartOpen,
        isCheckoutOpen,
        selectedProduct,
        completedOrder,
        toastMessage,
        clearToast,
        setIsCartOpen: handleSetIsCartOpen,
        setIsCheckoutOpen,
        setSelectedProduct,
        setCompletedOrder,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        applyPromoCode,
        removePromoCode,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
