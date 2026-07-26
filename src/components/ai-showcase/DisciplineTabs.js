import { useEffect, useRef } from 'react'
import styles from '@/styles/AIShowcase.module.css'

export default function DisciplineTabs({ tabs, activeTab, onChange }) {
  const refs = useRef({})

  useEffect(() => {
    refs.current[activeTab]?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [activeTab])

  const handleKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let nextIndex = index
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    const nextTab = tabs[nextIndex]
    onChange(nextTab.key)
    refs.current[nextTab.key]?.focus()
  }

  return (
    <div className={styles.tabList} role='tablist' aria-label='Showcase categories'>
      {tabs.map((tab, index) => (
        <button
          key={tab.key}
          ref={(node) => { refs.current[tab.key] = node }}
          className={styles.tab}
          type='button'
          role='tab'
          id={`tab-${tab.key}`}
          aria-controls={`panel-${tab.key}`}
          aria-selected={activeTab === tab.key}
          tabIndex={activeTab === tab.key ? 0 : -1}
          onClick={() => onChange(tab.key)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
