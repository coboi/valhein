import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import { CheckIcon } from '@phosphor-icons/react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Checkbox.module.css'

export type CheckboxProps = ComponentPropsWithoutRef<typeof BaseCheckbox.Root> & {
  label?: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
}

export type CheckboxGroupProps = {
  children: ReactNode
  className?: string
}

export function Checkbox({ className, description, disabled, label, leading, trailing, ...props }: CheckboxProps) {
  return (
    <label className={[styles.wrapper, className].filter(Boolean).join(' ')} data-disabled={disabled || undefined}>
      <BaseCheckbox.Root className={styles.root} disabled={disabled} {...props}>
        <BaseCheckbox.Indicator className={styles.indicator} keepMounted>
          <CheckIcon aria-hidden="true" size={16} weight="bold" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {leading && <span className={styles.leading}>{leading}</span>}
      {(label || description) && (
        <span className={styles.copy}>
          {label && <span className={styles.label}>{label}</span>}
          {description && <span className={styles.description}>{description}</span>}
        </span>
      )}
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </label>
  )
}

export function CheckboxGroup({ children, className }: CheckboxGroupProps) {
  return <div className={[styles.group, className].filter(Boolean).join(' ')}>{children}</div>
}
