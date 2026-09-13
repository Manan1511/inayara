interface StripedPlaceholderProps {
  label: string
  stripeA: string
  stripeB: string
  className?: string
}

export default function StripedPlaceholder({ label, stripeA, stripeB, className = '' }: StripedPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl text-center px-2 font-mono text-[11px] text-ink ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${stripeA}, ${stripeA} 10px, ${stripeB} 10px, ${stripeB} 20px)`,
      }}
    >
      {label}
    </div>
  )
}
