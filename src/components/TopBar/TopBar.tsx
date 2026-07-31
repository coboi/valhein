import type { ReactNode } from 'react'
import styles from './TopBar.module.css'

export type TopBarProps = {
  left?: ReactNode
  center?: ReactNode
  right?: ReactNode
  content?: ReactNode
}

export function TopBar({ content, left, center, right }: TopBarProps) {
  if (content) {
    return (
      <header className={styles.topBar}>
        <div className={styles.content}>{content}</div>
      </header>
    )
  }

  return (
    <header className={styles.topBar}>
      <div className={styles.side}>{left && <div className={styles.actions}>{left}</div>}</div>
      <div className={styles.center}>{center}</div>
      <div className={`${styles.side} ${styles.right}`}>
        {right && <div className={styles.actions}>{right}</div>}
      </div>
    </header>
  )
}
