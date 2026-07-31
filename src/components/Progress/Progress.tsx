import type { ReactNode } from 'react'
import styles from './Progress.module.css'

export type ProgressProps = {
  value?: number
  max?: number
  label?: ReactNode
}

export type SpinnerProps = {
  label?: string
  size?: 'sm' | 'md'
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function Progress({ label, max = 100, value }: ProgressProps) {
  const isIndeterminate = typeof value !== 'number'
  const safeMax = max > 0 ? max : 100
  const safeValue = isIndeterminate ? 0 : clamp(value, 0, safeMax)
  const progressScale = safeValue / safeMax

  return (
    <div className={styles.progressWrap}>
      {label && <span className={styles.label}>{label}</span>}
      <div
        aria-label={typeof label === 'string' ? label : undefined}
        aria-valuemax={isIndeterminate ? undefined : safeMax}
        aria-valuemin={isIndeterminate ? undefined : 0}
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        className={styles.track}
        role="progressbar"
      >
        <div
          className={[styles.indicator, isIndeterminate && styles.indeterminate]
            .filter(Boolean)
            .join(' ')}
          style={isIndeterminate ? undefined : { transform: `scaleX(${progressScale})` }}
        />
      </div>
    </div>
  )
}

export function Spinner({ label = 'Loading', size = 'md' }: SpinnerProps) {
  return (
    <span className={[styles.spinner, styles[size]].join(' ')} role="status">
      <span className={styles.srOnly}>{label}</span>
    </span>
  )
}
