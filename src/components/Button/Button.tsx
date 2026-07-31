import { Button as BaseButton } from '@base-ui/react/button'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export type ButtonProps = ComponentPropsWithoutRef<typeof BaseButton> & {
  leadingIcon?: ReactNode
  loading?: boolean
  trailingIcon?: ReactNode
  variant?: ButtonVariant
}

export function Button({
  children,
  className,
  disabled,
  leadingIcon,
  loading = false,
  onPointerDown,
  trailingIcon,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const pressRipple = usePressRipple<HTMLButtonElement>({ disabled: disabled || loading, onPointerDown })

  return (
    <BaseButton
      aria-busy={loading || undefined}
      className={[styles.button, styles[variant], className].filter(Boolean).join(' ')}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      onPointerDown={pressRipple.onPointerDown}
      {...props}
    >
      <PressRipple ripple={pressRipple.ripple} />
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
      <span className={styles.content}>{children}</span>
      {!loading && trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
    </BaseButton>
  )
}
