import type { ReactNode } from 'react'
import styles from './FormField.module.css'

export type FormFieldProps = {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  disabled?: boolean
  htmlFor?: string
  labelId?: string
  messageId?: string
  action?: ReactNode
  required?: boolean
  children: ReactNode
}

export function FormField({
  action,
  children,
  description,
  disabled = false,
  error,
  htmlFor,
  label,
  labelId,
  messageId,
  required = false,
}: FormFieldProps) {
  const message = error || description

  return (
    <div className={[styles.field, disabled && styles.disabled].filter(Boolean).join(' ')}>
      {(label || action) && (
        <div className={styles.header}>
          {label && (
            <label className={styles.label} htmlFor={htmlFor} id={labelId}>
              {label}
              {required && (
                <span aria-hidden="true" className={styles.required}>
                  *
                </span>
              )}
            </label>
          )}
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      {children}
      {message && <span className={error ? styles.error : styles.description} id={messageId}>{message}</span>}
    </div>
  )
}
