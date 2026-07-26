import { useEffect, useRef } from 'react'
import ShowcaseMedia from './ShowcaseMedia'
import styles from '@/styles/AIShowcase.module.css'

export default function ProjectLightbox({ selection, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selection && !dialog.open) dialog.showModal()
    if (!selection && dialog.open) dialog.close()
  }, [selection])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return undefined
    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  useEffect(() => {
    if (!selection) return undefined
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [selection])

  const project = selection?.project

  return (
    <dialog
      ref={dialogRef}
      className={styles.lightbox}
      aria-labelledby='ai-project-dialog-title'
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      {project && (
        <div className={styles.lightboxLayout}>
          <div className={styles.lightboxMedia}>
            <ShowcaseMedia media={project.media} sizes='70vw' playback />
            <button type='button' className={styles.closeButton} onClick={() => dialogRef.current?.close()}>
              Close
            </button>
          </div>
          <article className={styles.lightboxInfo}>
            <p className={styles.lightboxCount}>Selected work / {String(selection.index + 1).padStart(2, '0')}</p>
            <p className={styles.lightboxCategory}>{project.category}</p>
            <h2 id='ai-project-dialog-title' className={styles.lightboxTitle}>{project.title}</h2>
            <p className={styles.lightboxDescription}>{project.description}</p>
            <dl className={styles.projectDetails}>
              <div><dt>Format</dt><dd>{project.output}</dd></div>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Tools</dt><dd>{project.tools}</dd></div>
              <div><dt>Status</dt><dd>{project.status}</dd></div>
            </dl>
          </article>
        </div>
      )}
    </dialog>
  )
}

