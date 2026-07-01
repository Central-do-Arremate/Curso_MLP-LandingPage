interface TickerProps {
  items: string[]
  label: string
}

export default function Ticker({ items, label }: TickerProps) {
  return (
    <div
      role="marquee"
      aria-label={label}
      className="relative flex w-full overflow-hidden border-y-[3px] border-brand-yellow-light bg-gradient-to-r from-brand-yellow to-brand-yellow-dark py-4 sm:py-6"
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-sora text-lg font-bold text-brand-dark sm:text-2xl md:text-3xl">
            {item}
            <span aria-hidden="true">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
