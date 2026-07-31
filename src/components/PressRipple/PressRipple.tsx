import type { CSSProperties } from 'react'
import type { RippleState } from './usePressRipple'
import styles from './PressRipple.module.css'

type RippleStyle = CSSProperties & {
  '--press-ripple-duration': string
  '--press-ripple-size': string
  '--press-ripple-x': string
  '--press-ripple-y': string
}

export type PressRippleProps = {
  ripple: RippleState | null
}

export function PressRipple({ ripple }: PressRippleProps) {
  if (!ripple) {
    return null
  }

  const style: RippleStyle = {
    '--press-ripple-duration': `${ripple.duration}ms`,
    '--press-ripple-size': `${ripple.size}px`,
    '--press-ripple-x': `${ripple.x}px`,
    '--press-ripple-y': `${ripple.y}px`,
  }

  return <span aria-hidden="true" className={styles.ripple} data-press-ripple key={ripple.id} style={style} />
}
