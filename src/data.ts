export const navLinks = ['Crochet', 'Beaded', 'Handmade', 'Under ₹650']

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

export const vibes = ['All Vibes', 'Cottagecore', 'Y2K Pop', 'Clean Girl Luxe', 'Daily Wear', 'Under ₹650']

export const vibeBgs: Record<string, string> = {
  'All Vibes': 'bg-sand',
  Cottagecore: 'bg-blush',
  'Y2K Pop': 'bg-sky',
  'Clean Girl Luxe': 'bg-cream',
  'Daily Wear': 'bg-sand',
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
    vibe: 'Y2K Pop',
    craft: 'Beaded & Embroidered',
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
    vibe: 'Cottagecore',
    craft: 'Hand-Embroidered',
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
    vibe: 'Daily Wear',
    craft: 'Beaded Embroidery',
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
    vibe: 'Clean Girl Luxe',
    craft: 'Artisan Beadwork',
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
    vibe: 'Y2K Pop',
    craft: 'Seed Bead Work',
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
    vibe: 'Cottagecore',
    craft: 'Handmade Jeweled',
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
    vibe: 'Daily Wear',
    craft: 'Hand-Embroidered',
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
    vibe: 'Daily Wear',
    craft: 'Beaded Duo',
    image: '/images/products/charm-traveller.jpg',
    description: 'Handcrafted morning coffee and camera charm duo designed for daily commutes and weekend adventures.',
    stripeA: '#FCE9E4',
    stripeB: '#f2c4b8',
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
