import type { ComponentPropsWithoutRef } from 'react'
import styles from './Badge.module.css'

export type BadgeVariant = 'neutral' | 'solid' | 'danger'

export type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: BadgeVariant
}

export function Badge({ className, variant = 'neutral', ...props }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')} {...props} />
  )
}
