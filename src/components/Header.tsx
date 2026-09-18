import { navLinks } from '../data'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-tan bg-cream px-7 py-3.5">
      <div className="flex items-center">
        <img
          src="/images/logo/inayara-wordmark.png"
          alt="inayara"
          loading="lazy"
          className="h-8 w-auto object-contain"
        />
      </div>
      <nav className="flex flex-wrap gap-[22px]">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-semibold text-ink no-underline transition-colors hover:text-cocoa"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-[18px]">
        <span className="cursor-pointer text-[19px]">⌕</span>
        <span className="relative cursor-pointer text-lg">
          ♡
          <span className="absolute -top-0.5 -right-1 h-2 w-2 rounded-full bg-cocoa" />
        </span>
        <span className="cursor-pointer text-lg">🛍</span>
      </div>
    </header>
  )
}
