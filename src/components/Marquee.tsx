import { marqueeItems } from '../data'

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-tan bg-blush py-2.5">
      <div className="inline-flex animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="inline-flex">
            {marqueeItems.map((txt) => (
              <span key={txt} className="whitespace-nowrap px-6 text-sm font-semibold text-ink">
                {txt}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
