export const navLinks = ['Crochet', 'Beaded', 'Handmade', 'Under ₹999']

export const marqueeItems = [
  '✦ Make it uniquely yours',
  'Free gift wrap on orders over ₹1,499',
  'Handcrafted with love ✦',
]

export interface CraftCategory {
  key: string
  label: string
  tagline: string
  copy: string
  cta: string
  bg: string
  image: string
  stripeA: string
  stripeB: string
}

export const craftCategories: CraftCategory[] = [
  {
    key: 'crochet',
    label: 'Crochet',
    tagline: 'Cozy, textured, one loop at a time.',
    copy: 'Hand-crocheted bags, hair clips, and layered flowers made stitch by stitch; no two pieces come out exactly alike.',
    cta: 'Shop Crochet',
    bg: 'bg-blush',
    image: '/images/products/charm-teddies.jpg',
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
    image: '/images/products/charm-dog-lover.jpg',
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
    image: '/images/products/charm-elephants.jpg',
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
  image: string
  stripeA: string
  stripeB: string
}

export const products: Product[] = [
  { name: 'Diet Coke & Mickey Charm', price: 649, badge: 'Hot Item', vibe: 'Y2K Pop', image: '/images/products/charm-mickey-coke.jpg', stripeA: '#E6F5FA', stripeB: '#d5edf5' },
  { name: 'Teddy Bear Beaded Trio', price: 699, badge: 'Staff Pick', vibe: 'Cottagecore', image: '/images/products/charm-teddies.jpg', stripeA: '#FCE9E4', stripeB: '#f7d9d2' },
  { name: 'Dog Lover Pup & Paws Charm', price: 749, badge: 'Customizable', vibe: 'Daily Wear', image: '/images/products/charm-dog-lover.jpg', stripeA: '#F3E2CF', stripeB: '#e9d3b6' },
  { name: 'The Traveller Charm Trio', price: 899, badge: 'Trending', vibe: 'Clean Girl Luxe', image: '/images/products/charm-traveller.jpg', stripeA: '#C5EBF4', stripeB: '#a9dcea' },
  { name: 'Rainbow & Sweet Treats Charm', price: 599, badge: 'Under ₹799', vibe: 'Y2K Pop', image: '/images/products/charm-cupcake-rainbow.jpg', stripeA: '#F4CEC5', stripeB: '#eab8ac' },
  { name: 'Royal Beaded Elephant Charm', price: 799, badge: 'Staff Pick', vibe: 'Cottagecore', image: '/images/products/charm-elephants.jpg', stripeA: '#F3E2CF', stripeB: '#e2c39e' },
  { name: 'Classic Teddy Bestie Charm', price: 649, badge: 'Under ₹799', vibe: 'Daily Wear', image: '/images/products/charm-teddies.jpg', stripeA: '#E6F5FA', stripeB: '#c1e6f0' },
  { name: 'Artisan Coffee & Camera Duo', price: 749, badge: 'Customizable', vibe: 'Daily Wear', image: '/images/products/charm-traveller.jpg', stripeA: '#FCE9E4', stripeB: '#f2c4b8' },
]

export interface Reel {
  title: string
  price: number
  image: string
  stripeA: string
  stripeB: string
}

export const reels: Reel[] = [
  { title: 'Pup & paws charm showcase', price: 749, image: '/images/products/charm-dog-lover.jpg', stripeA: '#F3E2CF', stripeB: '#e9d3b6' },
  { title: 'The traveller charm unboxing', price: 899, image: '/images/products/charm-traveller.jpg', stripeA: '#C5EBF4', stripeB: '#a9dcea' },
  { title: 'Teddy bear charm styling', price: 699, image: '/images/products/charm-teddies.jpg', stripeA: '#F4CEC5', stripeB: '#eab8ac' },
  { title: 'Sweet rainbow & treats stack', price: 599, image: '/images/products/charm-cupcake-rainbow.jpg', stripeA: '#F3E2CF', stripeB: '#e2c39e' },
]

export const footerTags = ['Customer Service', 'Track My Order', '@inayara.co · IG', '@inayara · TikTok']

export const heroCards = [
  { label: 'The Traveller Set', caption: 'camera, coffee & popcorn', image: '/images/products/charm-traveller.jpg', bg: 'bg-sky', stripeA: '#E6F5FA', stripeB: '#d5edf5', rotate: 'rotate-[-4deg]', pos: 'top-0 left-[8%] w-[46%]' },
  { label: 'Teddy Trio', caption: 'hand-embroidered bears', image: '/images/products/charm-teddies.jpg', bg: 'bg-blush', stripeA: '#FCE9E4', stripeB: '#f7d9d2', rotate: 'rotate-[5deg]', pos: 'top-[12%] right-[4%] w-[44%]' },
  { label: 'Dog Lover Duo', caption: 'beaded pup & paw charm', image: '/images/products/charm-dog-lover.jpg', bg: 'bg-cream', stripeA: '#F3E2CF', stripeB: '#e9d3b6', rotate: 'rotate-[-2deg]', pos: 'bottom-[-4%] left-[22%] w-[42%]' },
]
