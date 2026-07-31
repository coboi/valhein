import { CalendarBlankIcon } from '@phosphor-icons/react'
import { useId, type ChangeEvent, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { FormField } from '../FormField'
import styles from './DatePicker.module.css'

export type DatePickerProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'value' | 'defaultValue' | 'onChange'> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onValueChange?: (value: string) => void
}

export function DatePicker({
  className,
  defaultValue,
  description,
  disabled,
  error,
  id,
  label,
  onChange,
  onValueChange,
  required,
  value,
  ...props
}: DatePickerProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = description || error ? `${inputId}-message` : undefined

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event)
    onValueChange?.(event.target.value)
  }

  return (
    <FormField description={description} disabled={disabled} error={error} htmlFor={inputId} label={label} messageId={messageId} required={required}>
      <div className={[styles.root, disabled && styles.disabled].filter(Boolean).join(' ')}>
        <input
          aria-describedby={messageId}
          aria-errormessage={error ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className={[styles.input, className].filter(Boolean).join(' ')}
          defaultValue={value === undefined ? defaultValue : undefined}
          disabled={disabled}
          id={inputId}
          onChange={handleChange}
          required={required}
          type="date"
          value={value}
          {...props}
        />
        <CalendarBlankIcon aria-hidden="true" className={styles.icon} size={18} weight="regular" />
      </div>
    </FormField>
  )
}
