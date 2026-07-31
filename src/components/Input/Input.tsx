import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { FormField } from '../FormField'
import styles from './Input.module.css'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
}

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
}

export function Input({ className, description, error, id, label, required, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = description || error ? `${inputId}-message` : undefined

  return (
    <FormField
      description={description}
      disabled={props.disabled}
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
        className={[styles.control, className].filter(Boolean).join(' ')}
        id={inputId}
        required={required}
        {...props}
      />
    </FormField>
  )
}

export function Textarea({ className, description, error, id, label, required, ...props }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const messageId = description || error ? `${textareaId}-message` : undefined

  return (
    <FormField
      description={description}
      disabled={props.disabled}
      error={error}
      htmlFor={textareaId}
      label={label}
      messageId={messageId}
      required={required}
    >
      <textarea
        aria-describedby={messageId}
        aria-errormessage={error ? messageId : undefined}
        aria-invalid={error ? true : undefined}
        className={[styles.control, styles.textarea, className].filter(Boolean).join(' ')}
        id={textareaId}
        required={required}
        {...props}
      />
    </FormField>
  )
}
