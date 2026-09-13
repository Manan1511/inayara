export const navLinks = ['Crochet', 'Beaded', 'Handmade', 'Under ₹999']

export const marqueeItems = [
  '✦ Make it uniquely yours',
  'Free gift wrap on orders over ₹1,499',
  'Handcrafted with love',
  'Easy returns ✦',
]

export interface CraftCategory {
  key: string
  label: string
  tagline: string
  copy: string
  cta: string
  bg: string
  stripeA: string
  stripeB: string
}

export const craftCategories: CraftCategory[] = [
  {
    key: 'crochet',
    label: 'Crochet',
    tagline: 'Cozy, textured, one loop at a time.',
    copy: 'Hand-crocheted bags, hair clips, and layered flowers made stitch by stitch — no two pieces come out exactly alike.',
    cta: 'Shop Crochet',
    bg: 'bg-blush',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
  {
    key: 'beaded',
    label: 'Beaded',
    tagline: 'Strung, stacked, endlessly swappable.',
    copy: 'Glass beads, charms, and birthstones hand-strung onto bracelets, anklets, and necklaces you can restring anytime.',
    cta: 'Shop Beaded',
    bg: 'bg-sky',
    stripeA: '#E6F5FA',
    stripeB: '#d5edf5',
  },
  {
    key: 'handmade',
    label: 'Handmade',
    tagline: 'Small-batch, made by hand.',
    copy: 'Rings, clips, and little everyday objects shaped, sanded, and finished entirely by hand in small batches.',
    cta: 'Shop Handmade',
    bg: 'bg-sand',
    stripeA: '#F3E2CF',
    stripeB: '#e9d3b6',
  },
]

export const vibes = ['All Vibes', 'Cottagecore', 'Y2K Pop', 'Clean Girl Luxe', 'Daily Wear', 'Under ₹999']

export const vibeBgs: Record<string, string> = {
  'All Vibes': 'bg-sand',
  Cottagecore: 'bg-blush',
  'Y2K Pop': 'bg-sky',
  'Clean Girl Luxe': 'bg-cream',
  'Daily Wear': 'bg-sand',
  'Under ₹999': 'bg-blush',
}

export interface Product {
  name: string
  price: number
  badge: string
  vibe: string
  stripeA: string
  stripeB: string
}

export const products: Product[] = [
  { name: 'Moonlit Charm Necklace', price: 899, badge: 'Hot Item', vibe: 'Cottagecore', stripeA: '#E6F5FA', stripeB: '#d5edf5' },
  { name: 'Sunset Beaded Bracelet', price: 649, badge: 'Customizable', vibe: 'Y2K Pop', stripeA: '#FCE9E4', stripeB: '#f7d9d2' },
  { name: 'Crochet Flower Hair Clip', price: 399, badge: 'Under ₹799', vibe: 'Cottagecore', stripeA: '#F3E2CF', stripeB: '#e9d3b6' },
  { name: 'Crochet Hoop Earrings', price: 549, badge: 'Trending', vibe: 'Clean Girl Luxe', stripeA: '#C5EBF4', stripeB: '#a9dcea' },
  { name: 'Y2K Star Anklet', price: 449, badge: 'Staff Pick', vibe: 'Y2K Pop', stripeA: '#F4CEC5', stripeB: '#eab8ac' },
  { name: 'Cottagecore Crochet Ring', price: 349, badge: 'Under ₹799', vibe: 'Cottagecore', stripeA: '#F3E2CF', stripeB: '#e2c39e' },
  { name: 'Beaded Daily Layer Chain', price: 599, badge: 'Hot Item', vibe: 'Daily Wear', stripeA: '#E6F5FA', stripeB: '#c1e6f0' },
  { name: 'Handmade Birthstone Set', price: 749, badge: 'Customizable', vibe: 'Daily Wear', stripeA: '#FCE9E4', stripeB: '#f2c4b8' },
]

export interface Reel {
  title: string
  price: number
  stripeA: string
  stripeB: string
}

export const reels: Reel[] = [
  { title: 'Crochet a flower in 60s', price: 399, stripeA: '#F3E2CF', stripeB: '#e9d3b6' },
  { title: 'Bestie set unboxing', price: 899, stripeA: '#C5EBF4', stripeB: '#a9dcea' },
  { title: 'Restring your beads', price: 499, stripeA: '#F4CEC5', stripeB: '#eab8ac' },
  { title: 'Clean girl stack tips', price: 649, stripeA: '#F3E2CF', stripeB: '#e2c39e' },
]

export const footerTags = ['Customer Service', 'Track My Order', '@inayara.co · IG', '@inayara · TikTok']

export const heroCards = [
  { label: 'Moonlit Stack', caption: 'stacked charm necklace photo', bg: 'bg-sky', stripeA: '#E6F5FA', stripeB: '#d5edf5', rotate: 'rotate-[-4deg]', pos: 'top-0 left-[8%] w-[46%]' },
  { label: 'Sunset Beads', caption: 'beaded bracelet photo', bg: 'bg-blush', stripeA: '#FCE9E4', stripeB: '#f7d9d2', rotate: 'rotate-[5deg]', pos: 'top-[12%] right-[4%] w-[44%]' },
  { label: 'Whimsy Mix', caption: 'crochet flower photo', bg: 'bg-cream', stripeA: '#F3E2CF', stripeB: '#e9d3b6', rotate: 'rotate-[-2deg]', pos: 'bottom-[-4%] left-[22%] w-[42%]' },
]
