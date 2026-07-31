import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import type { ReactElement, ReactNode } from 'react'
import { useState } from 'react'
import { Button } from '../Button'
import { Checkbox, CheckboxGroup } from '../Checkbox'
import { RadioGroup, RadioItem } from '../RadioGroup'
import styles from './ChoiceDialog.module.css'

export type ChoiceDialogOption = {
  value: string
  label: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  disabled?: boolean
}

type ChoiceDialogBaseProps = {
  trigger: ReactElement
  title: ReactNode
  description?: ReactNode
  options: ChoiceDialogOption[]
  confirmLabel?: ReactNode
  cancelLabel?: ReactNode
}

export type ChoiceDialogSingleProps = ChoiceDialogBaseProps & {
  type?: 'single'
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export type ChoiceDialogMultipleProps = ChoiceDialogBaseProps & {
  type: 'multiple'
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

export type ChoiceDialogProps = ChoiceDialogSingleProps | ChoiceDialogMultipleProps

export function ChoiceDialog(props: ChoiceDialogProps) {
  const [open, setOpen] = useState(false)
  const isMultiple = props.type === 'multiple'
  const fallbackSingleValue = isMultiple ? '' : props.defaultValue ?? props.options.find((option) => !option.disabled)?.value ?? ''
  const [singleValue, setSingleValue] = useState(fallbackSingleValue)
  const [multipleValue, setMultipleValue] = useState(isMultiple ? props.defaultValue ?? [] : [])
  const selectedSingleValue = isMultiple ? '' : props.value ?? singleValue
  const selectedMultipleValue = isMultiple ? props.value ?? multipleValue : []
  const [draftSingleValue, setDraftSingleValue] = useState(selectedSingleValue)
  const [draftMultipleValue, setDraftMultipleValue] = useState(selectedMultipleValue)

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setDraftSingleValue(selectedSingleValue)
      setDraftMultipleValue(selectedMultipleValue)
    }

    setOpen(nextOpen)
  }

  function handleCancel() {
    setOpen(false)
  }

  function handleApply() {
    if (isMultiple) {
      if (props.value === undefined) {
        setMultipleValue(draftMultipleValue)
      }

      props.onValueChange?.(draftMultipleValue)
    } else {
      if (props.value === undefined) {
        setSingleValue(draftSingleValue)
      }

      props.onValueChange?.(draftSingleValue)
    }

    setOpen(false)
  }

  function toggleMultipleValue(value: string, checked: boolean) {
    setDraftMultipleValue((currentValue) => {
      if (checked) {
        return currentValue.includes(value) ? currentValue : [...currentValue, value]
      }

      return currentValue.filter((itemValue) => itemValue !== value)
    })
  }

  return (
    <BaseDialog.Root open={open} onOpenChange={handleOpenChange}>
      <BaseDialog.Trigger render={props.trigger} />
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={styles.backdrop} />
        <BaseDialog.Viewport className={styles.viewport}>
          <BaseDialog.Popup className={styles.popup}>
            <div className={styles.header}>
              <BaseDialog.Title className={styles.title}>{props.title}</BaseDialog.Title>
              {props.description && (
                <BaseDialog.Description className={styles.description}>
                  {props.description}
                </BaseDialog.Description>
              )}
            </div>

            <div className={styles.body} data-valhein-overlay-content="">
              {isMultiple ? (
                <CheckboxGroup>
                  {props.options.map((option) => (
                    <Checkbox
                      checked={draftMultipleValue.includes(option.value)}
                      description={option.description}
                      disabled={option.disabled}
                      key={option.value}
                      label={option.label}
                      leading={option.leading}
                      onCheckedChange={(checked) => toggleMultipleValue(option.value, checked === true)}
                      trailing={option.trailing}
                    />
                  ))}
                </CheckboxGroup>
              ) : (
                <RadioGroup value={draftSingleValue} onValueChange={setDraftSingleValue}>
                  {props.options.map((option) => (
                    <RadioItem
                      description={option.description}
                      disabled={option.disabled}
                      key={option.value}
                      label={option.label}
                      leading={option.leading}
                      trailing={option.trailing}
                      value={option.value}
                    />
                  ))}
                </RadioGroup>
              )}
            </div>

            <div className={styles.footer}>
              <Button variant="ghost" onClick={handleCancel}>{props.cancelLabel ?? 'Cancel'}</Button>
              <Button disabled={!isMultiple && !draftSingleValue} onClick={handleApply}>{props.confirmLabel ?? 'Apply'}</Button>
            </div>
          </BaseDialog.Popup>
        </BaseDialog.Viewport>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  )
}
