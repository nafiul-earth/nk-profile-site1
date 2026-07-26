import ShowcaseMedia from './ShowcaseMedia'
import styles from '@/styles/AIShowcase.module.css'

export default function MovingGallery({ items, onOpen }) {
  const selected = items.slice(0, 9)
  const repeated = [...selected, ...selected]

  return (
    <div className={styles.movingGallery} aria-label='Moving selected work gallery'>
      <div className={styles.movingTrack}>
        {repeated.map((project, index) => (
          <button
            key={`${project.title}-${index}`}
            type='button'
            className={styles.railCard}
            onClick={(event) => onOpen(project, event.currentTarget)}
            aria-label={`Open ${project.title}`}
            aria-hidden={index >= selected.length}
            tabIndex={index >= selected.length ? -1 : 0}
          >
            <ShowcaseMedia media={project.media} sizes='320px' />
            <span className={styles.railCaption}><span>{project.title}</span><span>View</span></span>
          </button>
        ))}
      </div>
    </div>
  )
}

