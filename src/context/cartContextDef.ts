import { createContext } from 'react'
import type { CartItem, Product, ShippingAddress, PaymentMethod, Order } from '../types/shop'

export interface PromoResult {
  success: boolean
  message: string
}

export interface CartContextType {
  cart: CartItem[]
  cartCount: number
  subtotal: number
  discount: number
  shippingFee: number
  total: number
  freeShippingThreshold: number
  promoCode: string
  appliedDiscountRate: number
  isFreeShippingPromo: boolean
  isCartOpen: boolean
  isCheckoutOpen: boolean
  selectedProduct: Product | null
  completedOrder: Order | null
  toastMessage: string | null
  clearToast: () => void
  setIsCartOpen: (open: boolean) => void
  setIsCheckoutOpen: (open: boolean) => void
  setSelectedProduct: (product: Product | null) => void
  setCompletedOrder: (order: Order | null) => void
  addToCart: (product: Product, quantity?: number, openDrawer?: boolean) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  applyPromoCode: (code: string) => PromoResult
  removePromoCode: () => void
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: PaymentMethod) => Order
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
