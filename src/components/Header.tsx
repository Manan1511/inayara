import { useState, useEffect } from 'react'
import { navLinks } from '../data'
import { useCart } from '../context/useCart'

export default function Header() {
  const { cartCount, setIsCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    let targetId = 'shop-by-vibe'
    if (link === 'Crochet' || link === 'Beaded' || link === 'Handmade') {
      targetId = 'shop-by-craft'
    }

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b transition-all duration-300 ${
        isScrolled
          ? 'border-tan/80 bg-cream/90 py-2.5 shadow-sm backdrop-blur-md sm:py-3'
          : 'border-tan bg-cream py-3.5 sm:py-4'
      } px-4 sm:px-7`}
    >
      <div className="flex items-center">
        <a href="#" className="inline-block transition-transform hover:scale-[1.02]">
          <img
            src="/images/logo/inayara-wordmark.png"
            alt="inayara"
            loading="lazy"
            className="h-7 w-auto object-contain sm:h-8"
          />
        </a>
      </div>

      <nav className="hidden sm:flex items-center gap-5 md:gap-7">
        {navLinks.map((link) => (
          <a
            key={link}
            href={link === 'Under ₹650' ? '#shop-by-vibe' : '#shop-by-craft'}
            onClick={(e) => handleNavClick(e, link)}
            className="relative text-xs font-semibold text-ink no-underline transition-colors hover:text-cocoa md:text-sm after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cocoa after:transition-all hover:after:w-full"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => setIsCartOpen(true)}
          className="group relative flex cursor-pointer items-center gap-2 rounded-full border border-tan bg-sand/70 px-3.5 py-1.5 text-xs font-bold text-ink shadow-xs transition-all duration-200 hover:bg-sand hover:shadow-sm active:scale-95 sm:px-4 sm:py-2"
          aria-label="View shopping bag"
        >
          {/* Crisp vector shopping bag icon */}
          <svg
            className="h-4 w-4 text-ink transition-transform duration-200 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="font-body text-xs font-bold sm:text-sm">Bag</span>
          {cartCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cocoa px-1.5 text-[10px] font-bold text-cream animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
