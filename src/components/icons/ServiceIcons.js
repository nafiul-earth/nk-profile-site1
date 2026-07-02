const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ServiceIcons = {
  'graphic-design': (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  'ai-content': (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
      <path d="M5 16l.7 1.6L7.4 18l-1.7.7L5 20.4l-.7-1.7L2.6 18l1.7-.4L5 16z" />
    </svg>
  ),
  'web-design': (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 9h20" />
      <circle cx="5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="7.5" cy="6.5" r="0.5" fill="currentColor" />
      <path d="M6 13h5M6 16h8" />
    </svg>
  ),
  'web-app': (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <path d="M13 7l-2 10" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6a3 3 0 0 1 3 3v3" />
      <path d="M15 18H9a3 3 0 0 1-3-3v-3" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="2" y="5" width="14" height="14" rx="3" />
      <path d="M16 10l6-3v10l-6-3" />
      <path d="M7.5 9.5l4 2.5-4 2.5v-5z" />
    </svg>
  ),
}
