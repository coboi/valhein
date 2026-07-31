import type { HTMLAttributes } from 'react'
import styles from './Skeleton.module.css'

export type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  shape?: 'block' | 'circle' | 'line'
}

export function Skeleton({ className, shape = 'block', ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={[styles.skeleton, styles[shape], className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}

export function SkeletonRow() {
  return (
    <div className={styles.row} aria-hidden="true">
      <Skeleton shape="circle" />
      <div className={styles.lines}>
        <Skeleton shape="line" />
        <Skeleton className={styles.short} shape="line" />
      </div>
    </div>
  )
}
