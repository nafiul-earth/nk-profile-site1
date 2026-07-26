import AIProjectCard from './AIProjectCard'
import styles from '@/styles/AIShowcase.module.css'

export default function PortfolioCollection({ collection, onOpen, indexed = false }) {
  return (
    <section className={styles.collection} aria-labelledby={`collection-${collection.title.replace(/\W+/g, '-').toLowerCase()}`}>
      <header className={styles.collectionHead}>
        <h3 id={`collection-${collection.title.replace(/\W+/g, '-').toLowerCase()}`}>{collection.title}</h3>
        <p>{collection.description}</p>
      </header>
      <div className={styles.portfolioGrid}>
        {collection.items.map((project, index) => (
          <AIProjectCard
            key={project.title}
            project={project}
            index={indexed ? index + 1 : undefined}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}

