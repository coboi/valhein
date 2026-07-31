import { Button as BaseButton } from '@base-ui/react/button'
import type { ComponentPropsWithoutRef } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './IconButton.module.css'

export type IconButtonVariant = 'ghost' | 'raised' | 'primary'

export type IconButtonProps = Omit<ComponentPropsWithoutRef<typeof BaseButton>, 'aria-label'> & {
  label: string
  loading?: boolean
  variant?: IconButtonVariant
}

export function IconButton({
  children,
  className,
  disabled,
  label,
  loading = false,
  onPointerDown,
  variant = 'ghost',
  ...props
}: IconButtonProps) {
  const pressRipple = usePressRipple<HTMLButtonElement>({ disabled: disabled || loading, onPointerDown })

  return (
    <BaseButton
      aria-busy={loading || undefined}
      aria-label={label}
      className={[styles.button, styles[variant], className].filter(Boolean).join(' ')}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      onPointerDown={pressRipple.onPointerDown}
      {...props}
    >
      <PressRipple ripple={pressRipple.ripple} />
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : children}
    </BaseButton>
  )
}
