import { useState } from 'react'
import { footerTags } from '../data'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer className="border-t border-tan bg-cream px-7 pt-12 pb-8">
      <div className="mx-auto max-w-[640px] text-center">
        <h3 className="m-0 mb-2.5 font-display text-[22px]">
          Get the drop on secret sales &amp; limited restocks.
        </h3>
        <form onSubmit={handleSubmit} className="my-5 flex flex-wrap justify-center gap-2.5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="min-w-[220px] rounded-full border border-tan bg-cream px-5 py-3 font-body text-sm text-ink outline-none focus:border-cocoa"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-3 font-body text-sm font-bold text-cream transition-colors hover:bg-cocoa-dark"
          >
            Notify Me
          </button>
        </form>
        {submitted && <p className="text-sm font-semibold text-cocoa">You're on the list! ✦</p>}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {footerTags.map((tag) => (
          <span key={tag} className="rounded-full border border-tan px-4 py-1.5 text-xs font-semibold text-mocha">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-7 text-center text-xs text-mocha">© 2026 inayara. Handcrafted with love.</div>
    </footer>
  )
}
