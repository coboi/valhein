import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

export type SectionHeaderProps = {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </header>
  )
}
