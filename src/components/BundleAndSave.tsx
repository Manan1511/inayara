import StripedPlaceholder from './StripedPlaceholder'

export default function BundleAndSave() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-7 py-14 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-[20px] border border-tan bg-sky p-8">
        <div className="absolute top-4 right-4 rounded-full bg-cream px-2.5 py-1 text-[10px] font-bold">
          Save 20%
        </div>
        <h3 className="m-0 mb-2 font-display text-2xl">Bestie Sets</h3>
        <p className="m-0 mb-5 max-w-[320px] text-sm text-ink">
          Matching handmade duos for you and your ride-or-die.
        </p>
        <StripedPlaceholder label="bestie duo photo" stripeA="#dff3f9" stripeB="#c9e9f2" className="mb-5 h-[160px]" />
        <button className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-3 font-body text-[13px] font-bold text-cream transition-colors hover:bg-cocoa-dark">
          Shop Bestie Sets
        </button>
      </div>
      <div className="relative overflow-hidden rounded-[20px] border border-tan bg-blush p-8">
        <div className="absolute top-4 right-4 rounded-full bg-cream px-2.5 py-1 text-[10px] font-bold">
          Starter Kit
        </div>
        <h3 className="m-0 mb-2 font-display text-2xl">Craft Starter Kits</h3>
        <p className="m-0 mb-5 max-w-[320px] text-sm text-ink">
          Everything you need to make your very first piece.
        </p>
        <StripedPlaceholder label="starter kit photo" stripeA="#fbe4de" stripeB="#f6d0c7" className="mb-5 h-[160px]" />
        <button className="cursor-pointer rounded-full border-none bg-cocoa px-6 py-3 font-body text-[13px] font-bold text-cream transition-colors hover:bg-cocoa-dark">
          Shop Starter Kits
        </button>
      </div>
    </section>
  )
}
