const Star = () => (
  <svg className='w-5 h-5 text-sun' viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.4 5.8 21l1.6-7L2 9.3l7.1-.7L12 2z" />
  </svg>
)

const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <article className='w-full bg-white rounded-2xl p-8 border border-ink/5 shadow-sm flex flex-col gap-4 sm:p-6'>
      <div className='flex items-center gap-2'>
        {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} />)}
        <span className='ml-1 font-bold text-ink'>{testimonial.rating.toFixed(1)}</span>
      </div>
      <p className='text-base font-medium text-ink/80 leading-relaxed'>{testimonial.quote}</p>
      <div className='flex items-center gap-3 mt-auto'>
        <span className='w-11 h-11 rounded-full bg-forest text-sun flex items-center justify-center font-bold'>
          {initials}
        </span>
        <div>
          <p className='font-bold text-ink text-sm'>{testimonial.name}</p>
          <p className='text-xs font-medium text-ink/60'>{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
