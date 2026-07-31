import { CaretDownIcon } from '@phosphor-icons/react'
import { useId, type ChangeEvent, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { FormField } from '../FormField'
import styles from './Select.module.css'

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'value' | 'defaultValue' | 'onChange'> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  placeholder?: ReactNode
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  onValueChange?: (value: string) => void
}

export function Select({
  className,
  defaultValue,
  description,
  disabled = false,
  error,
  id,
  label,
  onChange,
  onValueChange,
  options,
  placeholder = 'Select option',
  required = false,
  value,
  ...props
}: SelectProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = description || error ? `${inputId}-message` : undefined

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange?.(event)
    onValueChange?.(event.target.value)
  }

  return (
    <FormField
      description={description}
      disabled={disabled}
      error={error}
      htmlFor={inputId}
      label={label}
      messageId={messageId}
      required={required}
    >
      <div className={[styles.root, disabled && styles.disabled].filter(Boolean).join(' ')}>
        <select
          aria-describedby={messageId}
          aria-errormessage={error ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className={[styles.select, className].filter(Boolean).join(' ')}
          defaultValue={value === undefined ? defaultValue ?? '' : undefined}
          disabled={disabled}
          id={inputId}
          onChange={handleChange}
          required={required}
          value={value}
          {...props}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option disabled={option.disabled} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <CaretDownIcon aria-hidden="true" className={styles.icon} size={18} weight="bold" />
      </div>
    </FormField>
  )
}
