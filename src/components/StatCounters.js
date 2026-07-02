import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref} />
}

const StatCounters = ({ stats, onDark = false }) => {
  return (
    <div className='flex items-start gap-12 lg:gap-8 sm:flex-col sm:gap-4'>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className={`text-4xl font-extrabold sm:text-3xl ${onDark ? 'text-sun' : 'text-ink'}`}>
            <AnimatedNumber value={stat.value} />
            {stat.suffix}
          </p>
          <p className={`text-sm font-medium mt-1 ${onDark ? 'text-white/80' : 'text-ink/70'}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatCounters
