import { UploadSimpleIcon } from '@phosphor-icons/react'
import { useId, useState, type ChangeEvent, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { FormField } from '../FormField'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './FileUpload.module.css'

export type FileUploadProps = Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'onChange' | 'type'> & {
  buttonText?: ReactNode
  description?: ReactNode
  error?: ReactNode
  label?: ReactNode
  onFilesChange?: (files: File[]) => void
}

export function FileUpload({
  buttonText = 'Choose file',
  className,
  description,
  disabled = false,
  error,
  id,
  label,
  multiple,
  onFilesChange,
  required,
  ...props
}: FileUploadProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = description || error ? `${inputId}-message` : undefined
  const [fileNames, setFileNames] = useState<string[]>([])
  const summary = getFileSummary(fileNames, multiple)
  const pressRipple = usePressRipple<HTMLLabelElement>({ disabled })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? [])

    setFileNames(files.map((file) => file.name))
    onFilesChange?.(files)
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
      <input
        aria-describedby={messageId}
        aria-errormessage={error ? messageId : undefined}
        aria-invalid={error ? true : undefined}
        className={styles.input}
        disabled={disabled}
        id={inputId}
        multiple={multiple}
        onChange={handleChange}
        required={required}
        type="file"
        {...props}
      />
      <label
        className={[styles.surface, disabled && styles.disabled, error && styles.invalid, className]
          .filter(Boolean)
          .join(' ')}
        htmlFor={inputId}
        onPointerDown={pressRipple.onPointerDown}
      >
        <PressRipple ripple={pressRipple.ripple} />
        <span className={styles.icon} aria-hidden="true">
          <UploadSimpleIcon size={18} weight="regular" />
        </span>
        <span className={styles.copy}>
          <span className={styles.buttonText}>{buttonText}</span>
          <span className={styles.summary} key={summary}>{summary}</span>
        </span>
      </label>
    </FormField>
  )
}

function getFileSummary(fileNames: string[], multiple?: boolean) {
  if (fileNames.length === 0) {
    return multiple ? 'No files selected' : 'No file selected'
  }

  if (fileNames.length === 1) {
    return fileNames[0]
  }

  return `${fileNames.length} files selected`
}
