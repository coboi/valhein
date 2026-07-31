import { Slider as BaseSlider } from '@base-ui/react/slider'
import { useId, useState, type ReactNode } from 'react'
import { FormField } from '../FormField'
import styles from './Slider.module.css'

export type SliderProps = {
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
  showValue?: boolean
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function Slider({
  defaultValue,
  description,
  disabled = false,
  error,
  label,
  max = 100,
  min = 0,
  onValueChange,
  showValue = false,
  step = 1,
  value,
}: SliderProps) {
  const generatedId = useId()
  const labelId = label ? `${generatedId}-label` : undefined
  const messageId = description || error ? `${generatedId}-message` : undefined
  const [uncontrolledValue, setUncontrolledValue] = useState(() => clamp(defaultValue ?? min, min, max))
  const currentValue = clamp(value ?? uncontrolledValue, min, max)

  function handleValueChange(nextValue: number | readonly number[]) {
    if (typeof nextValue !== 'number') {
      return
    }

    const clampedValue = clamp(nextValue, min, max)

    if (value === undefined) {
      setUncontrolledValue(clampedValue)
    }

    onValueChange?.(clampedValue)
  }

  return (
    <FormField
      action={showValue ? currentValue : undefined}
      description={description}
      disabled={disabled}
      error={error}
      label={label}
      labelId={labelId}
      messageId={messageId}
    >
      <BaseSlider.Root<number>
        aria-describedby={messageId}
        aria-errormessage={error ? messageId : undefined}
        aria-invalid={error ? true : undefined}
        aria-labelledby={labelId}
        className={styles.root}
        defaultValue={value === undefined ? currentValue : undefined}
        disabled={disabled}
        max={max}
        min={min}
        onValueChange={handleValueChange}
        step={step}
        value={value}
      >
        <BaseSlider.Control className={styles.control}>
          <BaseSlider.Track className={styles.track}>
            <BaseSlider.Indicator className={styles.indicator} />
          </BaseSlider.Track>
          <BaseSlider.Thumb className={styles.thumb} />
        </BaseSlider.Control>
      </BaseSlider.Root>
    </FormField>
  )
}
