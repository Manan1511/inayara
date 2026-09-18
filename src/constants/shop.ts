export const FREE_SHIPPING_THRESHOLD = 1499
export const STANDARD_SHIPPING_FEE = 99

export const CART_STORAGE_KEY = 'inayara_cart_items_v1'

export const PROMO_CODES: Record<string, { discountRate: number; freeShipping?: boolean; description: string }> = {
  INAYARA10: { discountRate: 0.1, description: '10% off your order' },
  FRIENDS10: { discountRate: 0.1, description: '10% off Buy with friends discount' },
  BESTIE10: { discountRate: 0.1, description: '10% off Buy with friends discount' },
  BESTIE20: { discountRate: 0.1, description: '10% off Buy with friends discount' },
  FREESHIP: { discountRate: 0, freeShipping: true, description: 'Free shipping on any order' },
}
