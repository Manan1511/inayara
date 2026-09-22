export const navLinks = ['Categories', 'Crochet', 'Beaded', 'Handmade', 'Under ₹650']

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
    key: 'bags',
    label: 'Bags',
    tagline: 'Hand-crocheted & woven totes made for daily carry.',
    copy: 'Artisan crochet shoulder bags and statement totes crafted stitch by stitch with reinforced straps and roomy interiors.',
    cta: 'Shop Bags',
    bg: 'bg-blush',
    image: '/images/products/charm-teddies.jpg',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
  {
    key: 'pouches',
    label: 'Pouches',
    tagline: 'Cute zippered coin pouches & keepsake holders.',
    copy: 'Compact handmade pouches to keep your earphones, lip balm, jewelry, and daily essentials organized in style.',
    cta: 'Shop Pouches',
    bg: 'bg-sand',
    image: '/images/products/charm-elephants.jpg',
    stripeA: '#F3E2CF',
    stripeB: '#e9d3b6',
  },
  {
    key: 'neck-charms',
    label: 'Neck charms',
    tagline: 'Dainty beadwork & statement pendants to layer.',
    copy: 'Hand-strung glass seed beads, charms, and birthstones onto delicate chains and cords made to mix, match, and stack.',
    cta: 'Shop Neck Charms',
    bg: 'bg-sky',
    image: '/images/products/charm-traveller.jpg',
    stripeA: '#C5EBF4',
    stripeB: '#a9dcea',
  },
  {
    key: 'hair-clip',
    label: 'Hair clip',
    tagline: 'Beaded barrettes & floral crochet clips.',
    copy: 'Everyday alligator clips and snap barrettes adorned with intricate bead flowers, sparkling pearls, and yarn blooms.',
    cta: 'Shop Hair Clips',
    bg: 'bg-blush',
    image: '/images/products/charm-cupcake-rainbow.jpg',
    stripeA: '#F4CEC5',
    stripeB: '#eab8ac',
  },
  {
    key: 'bag-charms',
    label: 'Bag charms',
    tagline: 'Strung, stacked, endlessly swappable accents.',
    copy: 'Our signature handcrafted bag charms with sturdy clasps, custom embroidery, and glass seed beads to clip on totes and backpacks.',
    cta: 'Shop Bag Charms',
    bg: 'bg-sand',
    image: '/images/products/charm-mickey-coke.jpg',
    stripeA: '#F3E2CF',
    stripeB: '#e9d3b6',
  },
  {
    key: 'bracelet',
    label: 'Bracelet',
    tagline: 'Stackable wrist candy with custom beads & charms.',
    copy: 'Durable elastic and adjustable clasp bracelets made with Japanese Miyuki beads, glass crystals, and playful charm drops.',
    cta: 'Shop Bracelets',
    bg: 'bg-sky',
    image: '/images/products/charm-dog-lover.jpg',
    stripeA: '#E6F5FA',
    stripeB: '#d5edf5',
  },
  {
    key: 'scrunchie',
    label: 'Scrunchie',
    tagline: 'Cloud-soft crochet edges & silk-blend scrunchies.',
    copy: 'Gentle on your hair and cute on your wrist. Hand-finished with delicate ruffled crochet borders and secure elastic.',
    cta: 'Shop Scrunchies',
    bg: 'bg-cream',
    image: '/images/products/charm-teddies.jpg',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
]

export const vibes = ['All Pieces', 'Crochet', 'Beaded', 'Handmade', 'Under ₹650']

export const vibeBgs: Record<string, string> = {
  'All Pieces': 'bg-sand',
  Crochet: 'bg-blush',
  Beaded: 'bg-sky',
  Handmade: 'bg-sand',
  'Under ₹650': 'bg-blush',
}

import type { Product } from './types/shop'
export type { Product }

export const products: Product[] = [
  {
    id: 'prod-mickey-coke',
    name: 'Diet Coke & Mickey Charm',
    price: 550,
    badge: 'Hot Item',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Bag charms',
    image: '/images/products/charm-mickey-coke.jpg',
    description: 'Hand-embroidered Diet Coke can charm flanked by classic beaded mouse ears. Made with glass seed beads, secure lobster clasp, and sturdy metal hardware.',
    stripeA: '#E6F5FA',
    stripeB: '#d5edf5',
  },
  {
    id: 'prod-teddy-trio',
    name: 'Teddy Bear Beaded Trio',
    price: 650,
    badge: 'Staff Pick',
    vibe: 'Crochet',
    craft: 'Crochet',
    category: 'Bag charms',
    image: '/images/products/charm-teddies.jpg',
    description: 'Hand-embroidered trio of bears with shimmering sequin details and pastel beaded ribbons. Perfect for your favorite tote bag, keys, or backpack.',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
  {
    id: 'prod-dog-lover',
    name: 'Dog Lover Pup & Paws Charm',
    price: 550,
    badge: 'Customizable',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Bag charms',
    image: '/images/products/charm-dog-lover.jpg',
    description: 'Sweet handmade puppy with heart-shaped sunglasses and double paw print charms. Crafted with love for pet lovers.',
    stripeA: '#F3E2CF',
    stripeB: '#e9d3b6',
  },
  {
    id: 'prod-traveller-trio',
    name: 'The Traveller Charm Trio',
    price: 650,
    badge: 'Trending',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Bag charms',
    image: '/images/products/charm-traveller.jpg',
    description: 'Curated explorer set featuring hand-beaded coffee cup, vintage camera, and popcorn bag charms with gold-tone hardware.',
    stripeA: '#C5EBF4',
    stripeB: '#a9dcea',
  },
  {
    id: 'prod-rainbow-cupcake',
    name: 'Rainbow & Sweet Treats Charm',
    price: 550,
    badge: 'Under ₹650',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Neck charms',
    image: '/images/products/charm-cupcake-rainbow.jpg',
    description: 'Vibrant rainbow arc and frosted cupcake charms with delicate pearl seed beads and high-shine crystals.',
    stripeA: '#F4CEC5',
    stripeB: '#eab8ac',
  },
  {
    id: 'prod-elephant-jewel',
    name: 'Royal Beaded Elephant Charm',
    price: 650,
    badge: 'Staff Pick',
    vibe: 'Handmade',
    craft: 'Handmade',
    category: 'Bag charms',
    image: '/images/products/charm-elephants.jpg',
    description: 'Ornate elephant charms with sparkling teardrop gems, intricate mosaic beading, and soft metallic trim.',
    stripeA: '#F3E2CF',
    stripeB: '#e2c39e',
  },
  {
    id: 'prod-bestie-duo',
    name: 'Classic Teddy Bestie Charm',
    price: 550,
    badge: 'Buy with Friends',
    vibe: 'Crochet',
    craft: 'Crochet',
    category: 'Bag charms',
    image: '/images/products/charm-teddies.jpg',
    description: 'Cute handcrafted teddy charm designed to stack or gift to your closest friend.',
    stripeA: '#E6F5FA',
    stripeB: '#c1e6f0',
  },
  {
    id: 'prod-camera-coffee',
    name: 'Artisan Coffee & Camera Duo',
    price: 650,
    badge: 'Customizable',
    vibe: 'Handmade',
    craft: 'Handmade',
    category: 'Bag charms',
    image: '/images/products/charm-traveller.jpg',
    description: 'Handcrafted morning coffee and camera charm duo designed for daily commutes and weekend adventures.',
    stripeA: '#FCE9E4',
    stripeB: '#f2c4b8',
  },
  {
    id: 'prod-cloud-tote',
    name: 'Pastel Crochet Mini Tote Bag',
    price: 650,
    badge: 'New Arrival',
    vibe: 'Crochet',
    craft: 'Crochet',
    category: 'Bags',
    image: '/images/products/charm-teddies.jpg',
    description: 'Hand-crocheted mini tote bag with ribbed stitch texture, reinforced double straps, and roomy interior.',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
  {
    id: 'prod-pastel-pouch',
    name: 'Handcrafted Keepsake Coin Pouch',
    price: 550,
    badge: 'Artisan Pick',
    vibe: 'Handmade',
    craft: 'Handmade',
    category: 'Pouches',
    image: '/images/products/charm-elephants.jpg',
    description: 'Small-batch handmade pouch lined with soft cotton, smooth brass zipper, and playful beaded pull tab.',
    stripeA: '#F3E2CF',
    stripeB: '#e9d3b6',
  },
  {
    id: 'prod-flower-clip',
    name: 'Daisy Blossom Crochet Hair Clip',
    price: 550,
    badge: 'Cute Accent',
    vibe: 'Crochet',
    craft: 'Crochet',
    category: 'Hair clip',
    image: '/images/products/charm-cupcake-rainbow.jpg',
    description: 'Handcrafted floral crochet barrette with alligator clip backing and shimmering seed bead center.',
    stripeA: '#F4CEC5',
    stripeB: '#eab8ac',
  },
  {
    id: 'prod-pearl-bracelet',
    name: 'Starlight Beaded Charm Bracelet',
    price: 550,
    badge: 'Best Seller',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Bracelet',
    image: '/images/products/charm-dog-lover.jpg',
    description: 'Hand-strung Japanese Miyuki glass beads with gold-tone accents, durable stretch cord, and dainty heart charm.',
    stripeA: '#E6F5FA',
    stripeB: '#d5edf5',
  },
  {
    id: 'prod-cloud-scrunchie',
    name: 'Ruffled Crochet Cloud Scrunchie',
    price: 550,
    badge: 'Daily Essential',
    vibe: 'Crochet',
    craft: 'Crochet',
    category: 'Scrunchie',
    image: '/images/products/charm-teddies.jpg',
    description: 'Cloud-soft silk scrunchie trimmed with handcrafted crochet lace ruffles for high hold and zero hair snagging.',
    stripeA: '#FCE9E4',
    stripeB: '#f7d9d2',
  },
  {
    id: 'prod-layering-neck-charm',
    name: 'Freshwater Pearl Neck Charm',
    price: 650,
    badge: 'Trending',
    vibe: 'Beaded',
    craft: 'Beaded',
    category: 'Neck charms',
    image: '/images/products/charm-traveller.jpg',
    description: 'Hand-strung glass seed beads, freshwater pearls, and unique charm drops built to stack beautifully.',
    stripeA: '#C5EBF4',
    stripeB: '#a9dcea',
  },
]

export interface Reel {
  title: string
  price: number
  image: string
  stripeA: string
  stripeB: string
}

export const reels: Reel[] = [
  { title: 'Pup & paws charm showcase', price: 550, image: '/images/products/charm-dog-lover.jpg', stripeA: '#F3E2CF', stripeB: '#e9d3b6' },
  { title: 'The traveller charm unboxing', price: 650, image: '/images/products/charm-traveller.jpg', stripeA: '#C5EBF4', stripeB: '#a9dcea' },
  { title: 'Teddy bear charm styling', price: 650, image: '/images/products/charm-teddies.jpg', stripeA: '#F4CEC5', stripeB: '#eab8ac' },
  { title: 'Sweet rainbow & treats stack', price: 550, image: '/images/products/charm-cupcake-rainbow.jpg', stripeA: '#F3E2CF', stripeB: '#e2c39e' },
]

export const footerTags = ['Customer Service', 'Track My Order', '@inayara.co · IG', '@inayara · TikTok']

export const heroCards = [
  { label: 'The Traveller Set', caption: 'camera, coffee & popcorn', image: '/images/products/charm-traveller.jpg', bg: 'bg-sky', stripeA: '#E6F5FA', stripeB: '#d5edf5', rotate: 'rotate-[-4deg]', pos: 'top-0 left-[8%] w-[46%]' },
  { label: 'Teddy Trio', caption: 'hand-embroidered bears', image: '/images/products/charm-teddies.jpg', bg: 'bg-blush', stripeA: '#FCE9E4', stripeB: '#f7d9d2', rotate: 'rotate-[5deg]', pos: 'top-[12%] right-[4%] w-[44%]' },
  { label: 'Dog Lover Duo', caption: 'beaded pup & paw charm', image: '/images/products/charm-dog-lover.jpg', bg: 'bg-cream', stripeA: '#F3E2CF', stripeB: '#e9d3b6', rotate: 'rotate-[-2deg]', pos: 'bottom-[-4%] left-[22%] w-[42%]' },
]
