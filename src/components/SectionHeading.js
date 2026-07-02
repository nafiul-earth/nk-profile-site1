const SectionHeading = ({ eyebrow, title, accent, accentFirst = false, center = false, onDark = false, action = null }) => {
  const accentEl = accent && (
    <span className='text-sun italic font-semibold'>{accent} </span>
  )
  return (
    <div className={`w-full flex items-end justify-between gap-8 mb-12 md:mb-8 md:flex-col md:items-start
    ${center ? '!flex-col items-center text-center' : ''}`}>
      <div>
        {eyebrow && (
          <p className={`flex items-center gap-2 text-sm font-semibold mb-2 ${onDark ? 'text-white/90' : 'text-ink/80'} ${center ? 'justify-center' : ''}`}>
            <span className='w-4 h-[3px] bg-sun rounded-full inline-block' />
            {eyebrow}
          </p>
        )}
        <h2 className={`text-4xl font-bold leading-tight lg:text-3xl sm:text-2xl ${onDark ? 'text-white' : 'text-ink'}`}>
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
