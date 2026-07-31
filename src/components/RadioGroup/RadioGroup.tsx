import { Radio } from '@base-ui/react/radio'
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import type { ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './RadioGroup.module.css'

export type RadioGroupProps = {
  ariaLabel?: string
  ariaLabelledBy?: string
  children: ReactNode
  defaultValue?: string
  name?: string
  onValueChange?: (value: string) => void
  value?: string
}

export type RadioItemProps = {
  description?: ReactNode
  disabled?: boolean
  label: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  value: string
}

export function RadioGroup({ ariaLabel, ariaLabelledBy, children, defaultValue, name, onValueChange, value }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={styles.group}
      defaultValue={defaultValue}
      name={name}
      value={value}
      onValueChange={(nextValue) => {
        if (typeof nextValue === 'string') {
          onValueChange?.(nextValue)
        }
      }}
    >
      {children}
    </BaseRadioGroup>
  )
}

export function RadioItem({ description, disabled, label, leading, trailing, value }: RadioItemProps) {
  const pressRipple = usePressRipple<HTMLLabelElement>({ disabled })

  return (
    <label className={styles.item} data-disabled={disabled || undefined} onPointerDown={pressRipple.onPointerDown}>
      <PressRipple ripple={pressRipple.ripple} />
      <Radio.Root className={styles.radio} disabled={disabled} value={value}>
        <Radio.Indicator className={styles.indicator} keepMounted />
      </Radio.Root>
      {leading && <span className={styles.leading}>{leading}</span>}
      <span className={styles.copy}>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </label>
  )
}
