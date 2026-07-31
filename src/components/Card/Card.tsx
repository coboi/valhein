import type { ReactNode } from 'react'
import styles from './Card.module.css'

export type CardProps = {
  children: ReactNode
  compact?: boolean
}

export type CardHeaderProps = {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

export type CardSectionProps = {
  children: ReactNode
}

export function Card({ children, compact = false }: CardProps) {
  return <section className={`${styles.card} ${compact ? styles.compact : ''}`}>{children}</section>
}

export function CardHeader({ title, description, action }: CardHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}

export function CardBody({ children }: CardSectionProps) {
  return <div className={styles.body}>{children}</div>
}

export function CardFooter({ children }: CardSectionProps) {
  return <div className={styles.footer}>{children}</div>
}
