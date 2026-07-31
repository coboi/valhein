import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import { useId, useRef, useState, type ChangeEvent, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './SearchBar.module.css'

export type SearchBarProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange'> & {
  onValueChange?: (value: string) => void
  onClear?: () => void
  trailing?: ReactNode
}

export function SearchBar({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  className,
  defaultValue,
  disabled,
  id,
  onClear,
  onValueChange,
  placeholder = 'Search',
  readOnly,
  trailing,
  value,
  ...props
}: SearchBarProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const inputAriaLabel = ariaLabelledBy ? ariaLabel : ariaLabel ?? 'Search'
  const inputRef = useRef<HTMLInputElement>(null)
  const [uncontrolledValue, setUncontrolledValue] = useState(() => String(defaultValue ?? ''))
  const currentValue = value !== undefined ? String(value) : uncontrolledValue
  const canClear = currentValue.length > 0 && !disabled && !readOnly
  const clearRipple = usePressRipple<HTMLButtonElement>({ disabled: !canClear })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const nextValue = event.target.value

    if (value === undefined) {
      setUncontrolledValue(nextValue)
    }

    onValueChange?.(nextValue)
  }

  function handleClear() {
    if (value === undefined) {
      setUncontrolledValue('')
    }

    onValueChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div className={[styles.root, disabled && styles.disabled, className].filter(Boolean).join(' ')}>
      <MagnifyingGlassIcon aria-hidden="true" className={styles.searchIcon} size={18} weight="regular" />
      <input
        aria-label={inputAriaLabel}
        aria-labelledby={ariaLabelledBy}
        className={styles.input}
        disabled={disabled}
        id={inputId}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={inputRef}
        type="search"
        value={currentValue}
        {...props}
      />
      {canClear && (
        <button
          aria-label="Clear search"
          className={styles.clear}
          onClick={handleClear}
          onPointerDown={clearRipple.onPointerDown}
          type="button"
        >
          <PressRipple ripple={clearRipple.ripple} />
          <XIcon aria-hidden="true" size={14} weight="bold" />
        </button>
      )}
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </div>
  )
}
