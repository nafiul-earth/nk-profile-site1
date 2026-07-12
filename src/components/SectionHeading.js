const SectionHeading = ({ eyebrow, title, accent, accentFirst = false, center = false, onDark = false, action = null }) => {
  const accentEl = accent && (
    <span className='underline decoration-accent decoration-[3px] underline-offset-8'>{accent} </span>
  )
  return (
    <div className={`w-full flex items-end justify-between gap-8 mb-12 md:mb-8 md:flex-col md:items-start
    ${center ? '!flex-col items-center text-center' : ''}`}>
      <div>
        {eyebrow && (
          <p className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-3 ${onDark ? 'text-paper/70' : 'text-muted'} ${center ? 'justify-center' : ''}`}>
            <span className='w-4 h-[3px] bg-accent rounded-full inline-block' />
            {eyebrow}
          </p>
        )}
        <h2 className={`font-display text-5xl font-bold leading-[1.08] tracking-tight lg:text-4xl sm:text-3xl ${onDark ? 'text-paper' : 'text-ink'}`}>
          {accentFirst && accentEl}
          {title}
          {!accentFirst && <> {accentEl}</>}
        </h2>
      </div>
      {action && <div className='shrink-0'>{action}</div>}
    </div>
  )
}

export default SectionHeading
