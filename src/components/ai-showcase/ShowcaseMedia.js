import Image from 'next/image'
import styles from '@/styles/AIShowcase.module.css'

export default function ShowcaseMedia({ media, sizes = '100vw', priority = false, playback = false }) {
  const mediaElement = media.kind === 'video'
    ? (
      <video
        className={styles.media}
        src={playback ? media.src : undefined}
        poster={media.poster}
        preload={playback ? 'metadata' : 'none'}
        controls={playback}
        playsInline
        aria-label={media.alt}
      />
    )
    : (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={styles.media}
      />
    )

  return (
    <>
      {mediaElement}
      {media.reviewStatus === 'needs-update' && (
        <span className={styles.updateWatermark} aria-hidden='true'>
          <span>To be updated</span>
        </span>
      )}
    </>
  )
}
