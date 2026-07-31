import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Chip.module.css'

export type ChipProps = ComponentPropsWithoutRef<'button'> & {
  leadingIcon?: ReactNode
  selected?: boolean
  trailingIcon?: ReactNode
}

export function Chip({
  children,
  className,
  leadingIcon,
  onPointerDown,
  selected = false,
  trailingIcon,
  ...props
}: ChipProps) {
  const pressRipple = usePressRipple<HTMLButtonElement>({ disabled: props.disabled, onPointerDown })

  return (
    <button
      aria-pressed={selected}
      className={[styles.chip, selected && styles.selected, className].filter(Boolean).join(' ')}
      onPointerDown={pressRipple.onPointerDown}
      type="button"
      {...props}
    >
      <PressRipple ripple={pressRipple.ripple} />
      {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
      <span className={styles.label}>{children}</span>
      {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
    </button>
  )
}
