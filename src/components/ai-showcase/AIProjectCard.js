import ShowcaseMedia from './ShowcaseMedia'
import styles from '@/styles/AIShowcase.module.css'

export default function AIProjectCard({ project, index, onOpen, className = '' }) {
  return (
    <button
      type='button'
      className={`${styles.projectCard} ${styles[`format_${project.format}`]} ${className}`}
      onClick={(event) => onOpen(project, event.currentTarget)}
      aria-label={`Open ${project.title}`}
    >
      <div className={styles.projectVisual}>
        <ShowcaseMedia media={project.media} sizes='(max-width: 700px) 50vw, 40vw' />
      </div>
      <div className={styles.projectContent}>
        <div>
          <span className={styles.projectCategory}>
            {index ? `${String(index).padStart(2, '0')} / ` : ''}{project.category}
          </span>
          <h4 className={styles.projectTitle}>{project.title}</h4>
        </div>
        <span className={styles.projectView} aria-hidden='true'>View</span>
      </div>
    </button>
  )
}

