import type { ReactNode } from 'react'
import styles from './Alert.module.css'

export type AlertVariant = 'neutral' | 'danger'

export type AlertProps = {
  action?: ReactNode
  description?: ReactNode
  title: ReactNode
  variant?: AlertVariant
}

export function Alert({ action, description, title, variant = 'neutral' }: AlertProps) {
  return (
    <div className={[styles.alert, styles[variant]].join(' ')} role={variant === 'danger' ? 'alert' : 'status'}>
      <div className={styles.copy}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}
