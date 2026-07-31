import { useState, type ReactNode } from 'react'
import styles from './EmptyState.module.css'

const kaomoji = [
  '(･o･;)',
  'Σ(ಠ_ಠ)',
  'ಥ_ಥ',
  '(˘･_･˘)',
  '(；￣Д￣)',
  '(･Д･。',
  '(╬ಠ益ಠ)',
  '(╥﹏╥)',
  '(⋟﹏⋞)',
  'Ò︵Ó',
  ' ˙ᯅ˙)',
  '(¬_¬)',
] as const

export type EmptyStateProps = {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

export function EmptyState({ action, description, title }: EmptyStateProps) {
  const [face] = useState(() => kaomoji[Math.floor(Math.random() * kaomoji.length)])

  return (
    <div className={styles.root}>
      <div className={styles.kaomoji}>{face}</div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}
