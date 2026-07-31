import { useEffect, useRef, useState } from 'react'
import ShowcaseMedia from './ShowcaseMedia'
import styles from '@/styles/AIShowcase.module.css'

export default function ProjectLightbox({ selection, onClose }) {
  const dialogRef = useRef(null)
  const [mediaIndex, setMediaIndex] = useState(0)
  const project = selection?.project
  const mediaItems = project?.mediaGallery?.length ? project.mediaGallery : project ? [project.media] : []
  const hasGallery = mediaItems.length > 1
  const activeIndex = mediaIndex < mediaItems.length ? mediaIndex : 0
  const activeMedia = mediaItems[activeIndex]
  const artworkNotes = activeMedia?.art

  useEffect(() => {
    setMediaIndex(0)
  }, [selection])

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

  useEffect(() => {
    if (!selection || !hasGallery) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setMediaIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setMediaIndex((current) => (current + 1) % mediaItems.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [hasGallery, mediaItems.length, selection])

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
          <div className={`${styles.lightboxMedia} ${hasGallery ? styles.lightboxMediaGallery : ''}`}>
            <ShowcaseMedia key={activeMedia.src} media={activeMedia} sizes='70vw' playback />
            <button type='button' className={styles.closeButton} onClick={() => dialogRef.current?.close()}>
              Close
            </button>
            {hasGallery && (
              <div className={styles.lightboxNavigation} aria-label='Project image navigation'>
                <button
                  type='button'
                  className={`${styles.lightboxNavButton} ${styles.lightboxPrevious}`}
                  onClick={() => setMediaIndex((current) => (current - 1 + mediaItems.length) % mediaItems.length)}
                  aria-label='Show previous project image'
                >
                  <span aria-hidden='true'>←</span>
                </button>
                <span className={styles.lightboxSlideCount} aria-live='polite'>
                  {activeIndex + 1} / {mediaItems.length}
                </span>
                <button
                  type='button'
                  className={`${styles.lightboxNavButton} ${styles.lightboxNext}`}
                  onClick={() => setMediaIndex((current) => (current + 1) % mediaItems.length)}
                  aria-label='Show next project image'
                >
                  <span aria-hidden='true'>→</span>
                </button>
              </div>
            )}
          </div>
          <article className={styles.lightboxInfo}>
            <p className={styles.lightboxCount}>Selected work / {String(selection.index + 1).padStart(2, '0')}</p>
            <p className={styles.lightboxCategory}>
              {project.category}{hasGallery ? ` · Frame ${activeIndex + 1} / ${mediaItems.length}` : ''}
            </p>
            <h2 id='ai-project-dialog-title' className={styles.lightboxTitle}>{project.title}</h2>
            <div aria-live='polite' aria-atomic='true'>
              {artworkNotes && <h3 className={styles.lightboxArtworkTitle}>{artworkNotes.title}</h3>}
              <p className={styles.lightboxDescription}>{artworkNotes?.description || project.description}</p>
              <dl className={styles.projectDetails}>
                {artworkNotes ? (
                  <>
                    <div><dt>Composition</dt><dd>{artworkNotes.composition}</dd></div>
                    <div><dt>Light &amp; colour</dt><dd>{artworkNotes.lighting}</dd></div>
                    <div><dt>Creative intent</dt><dd>{artworkNotes.intent}</dd></div>
                    <div><dt>Tools</dt><dd>{project.tools}</dd></div>
                  </>
                ) : (
                  <>
                    <div><dt>Format</dt><dd>{project.output}</dd></div>
                    <div><dt>Role</dt><dd>{project.role}</dd></div>
                    <div><dt>Tools</dt><dd>{project.tools}</dd></div>
                    <div><dt>Status</dt><dd>{project.status}</dd></div>
                  </>
                )}
              </dl>
              {project.externalLink && (
                <a
                  className={styles.lightboxExternalLink}
                  href={project.externalLink.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {project.externalLink.label}<span aria-hidden='true'>↗</span>
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </dialog>
  )
}
