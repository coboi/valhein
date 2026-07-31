import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { useId, useState, type ReactNode } from 'react'
import { FormField } from '../FormField'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Stepper.module.css'

export type StepperProps = {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number) => void
  disabled?: boolean
}

function clamp(value: number, min: number, max?: number) {
  const withMin = Math.max(value, min)
  return typeof max === 'number' ? Math.min(withMin, max) : withMin
}

export function Stepper({
  defaultValue,
  description,
  disabled = false,
  error,
  label,
  max,
  min = 0,
  onValueChange,
  step = 1,
  value,
}: StepperProps) {
  const generatedId = useId()
  const labelId = label ? `${generatedId}-label` : undefined
  const messageId = description || error ? `${generatedId}-message` : undefined
  const [uncontrolledValue, setUncontrolledValue] = useState(() => clamp(defaultValue ?? min, min, max))
  const currentValue = clamp(value ?? uncontrolledValue, min, max)
  const canDecrease = !disabled && currentValue > min
  const canIncrease = !disabled && (typeof max !== 'number' || currentValue < max)
  const decreaseRipple = usePressRipple<HTMLButtonElement>({ disabled: !canDecrease })
  const increaseRipple = usePressRipple<HTMLButtonElement>({ disabled: !canIncrease })

  function commit(nextValue: number) {
    const clampedValue = clamp(nextValue, min, max)

    if (value === undefined) {
      setUncontrolledValue(clampedValue)
    }

    onValueChange?.(clampedValue)
  }

  return (
    <FormField description={description} disabled={disabled} error={error} label={label} labelId={labelId} messageId={messageId}>
      <div
        aria-describedby={messageId}
        aria-errormessage={error ? messageId : undefined}
        aria-invalid={error ? true : undefined}
        aria-labelledby={labelId}
        className={styles.root}
        role="group"
      >
        <button
          aria-label="Decrease value"
          className={styles.button}
          disabled={!canDecrease}
          onClick={() => commit(currentValue - step)}
          onPointerDown={decreaseRipple.onPointerDown}
          type="button"
        >
          <PressRipple ripple={decreaseRipple.ripple} />
          <MinusIcon aria-hidden="true" size={17} weight="bold" />
        </button>
        <output aria-live="polite" className={styles.value}>
          {currentValue}
        </output>
        <button
          aria-label="Increase value"
          className={styles.button}
          disabled={!canIncrease}
          onClick={() => commit(currentValue + step)}
          onPointerDown={increaseRipple.onPointerDown}
          type="button"
        >
          <PressRipple ripple={increaseRipple.ripple} />
          <PlusIcon aria-hidden="true" size={17} weight="bold" />
        </button>
      </div>
    </FormField>
  )
}
