import styles from './Divider.module.css'

export type DividerProps = {
  inset?: boolean
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({ inset = false, orientation = 'horizontal' }: DividerProps) {
  return (
    <div
      aria-orientation={orientation}
      className={[styles.divider, styles[orientation], inset && styles.inset]
        .filter(Boolean)
        .join(' ')}
      role="separator"
    />
  )
}
