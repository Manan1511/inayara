export interface Product {
  id: string
  name: string
  price: number
  badge: string
  vibe: string
  category?: string
  image: string
  description?: string
  craft?: string
  stripeA?: string
  stripeB?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ShippingAddress {
  fullName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
}

export type PaymentMethod = 'upi' | 'card' | 'cod'

export interface Order {
  id: string
  items: CartItem[]
  subtotal: number
  discount: number
  shippingFee: number
  total: number
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  createdAt: string
}
