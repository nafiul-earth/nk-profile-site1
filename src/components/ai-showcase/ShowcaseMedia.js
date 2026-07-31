import Image from 'next/image'
import styles from '@/styles/AIShowcase.module.css'

export default function ShowcaseMedia({ media, sizes = '100vw', priority = false, playback = false, showPlayIndicator = true }) {
  const mediaElement = media.kind === 'youtube'
    ? playback
      ? (
        <iframe
          className={styles.media}
          src={media.src}
          title={media.alt}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
        )
      : (
        <span
          className={`${styles.media} ${styles.youtubePoster}`}
          style={{ backgroundImage: `url(${media.poster})` }}
          role='img'
          aria-label={media.alt}
        />
        )
    : media.kind === 'video'
    ? (
      <video
        className={styles.media}
        src={media.src}
        poster={media.poster}
        preload='metadata'
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
      {showPlayIndicator && !playback && (media.kind === 'video' || media.kind === 'youtube') && (
        <span className={styles.videoPlayIndicator} aria-hidden='true'>
          <span className={styles.videoPlayIcon} />
        </span>
      )}
      {media.reviewStatus === 'needs-update' && (
        <span className={styles.updateWatermark} aria-hidden='true'>
          <span>To be updated</span>
        </span>
      )}
    </>
  )
}
