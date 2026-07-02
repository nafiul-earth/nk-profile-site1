const Check = ({ dark }) => (
  <span className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center
  ${dark ? 'bg-forest text-sun' : 'bg-sun text-forest'}`}>
    <svg className='w-3 h-3' viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

const PricingCard = ({ tier }) => {
  const hl = tier.highlighted
  return (
    <article className={`w-full rounded-2xl p-8 flex flex-col gap-5 sm:p-6
    ${hl ? 'bg-sun text-ink scale-105 lg:scale-100 shadow-xl' : 'bg-white/10 text-white border border-white/15'}`}>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>{tier.name}</h3>
        <span className={`w-10 h-10 rounded-full flex items-center justify-center
        ${hl ? 'bg-forest text-sun' : 'bg-sun text-forest'}`}>
          <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className='text-4xl font-extrabold sm:text-3xl'>
        {tier.price}
        <span className='text-base font-semibold opacity-80'> {tier.unit}</span>
      </p>
      <ul className='flex flex-col gap-3'>
        {tier.features.map((f) => (
          <li key={f} className='flex items-center gap-3 text-sm font-medium'>
            <Check dark={hl} />
            {f}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingCard
