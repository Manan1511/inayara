export default function BundleAndSave() {
  return (
    <section className="mx-auto max-w-[1040px] px-7 py-14">
      <div className="relative overflow-hidden rounded-[24px] border border-tan bg-sky p-8 md:p-12">
        <div className="absolute top-5 right-5 rounded-full bg-cream px-3 py-1 text-xs font-bold text-ink shadow-sm">
          Save 20%
        </div>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-cocoa">
              Special Bundle Offer
            </span>
            <h3 className="m-0 mb-3 font-display text-[clamp(26px,3vw,34px)] font-semibold text-ink">
              Bestie Sets
            </h3>
            <p className="m-0 mb-6 max-w-[420px] text-[15px] leading-relaxed text-mocha">
              Matching handmade duos for you and your ride-or-die. Stack together or swap charms to share the vibe.
            </p>
            <button className="cursor-pointer rounded-full border-none bg-cocoa px-7 py-3.5 font-body text-sm font-bold text-cream transition-colors hover:bg-cocoa-dark">
              Shop Bestie Sets
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-tan/60 bg-cream/50 p-2 shadow-sm">
            <img
              src="/images/products/charm-teddies.jpg"
              alt="Bestie duo handcrafted charms"
              loading="lazy"
              className="h-[240px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
