import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { CaretDownIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Accordion.module.css'

export type AccordionItem = {
  value: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type AccordionProps = {
  defaultValue?: string[]
  disabled?: boolean
  items: AccordionItem[]
  multiple?: boolean
  onValueChange?: (value: string[]) => void
  value?: string[]
}

export function Accordion({
  defaultValue,
  disabled = false,
  items,
  multiple = false,
  onValueChange,
  value,
}: AccordionProps) {
  return (
    <BaseAccordion.Root
      className={styles.root}
      defaultValue={defaultValue}
      disabled={disabled}
      multiple={multiple}
      value={value}
      onValueChange={(nextValue) => {
        onValueChange?.(nextValue as string[])
      }}
    >
      {items.map((item) => <AccordionEntry disabled={disabled} item={item} key={item.value} />)}
    </BaseAccordion.Root>
  )
}

function AccordionEntry({ disabled, item }: { disabled: boolean; item: AccordionItem }) {
  const pressRipple = usePressRipple<HTMLButtonElement>({ disabled: disabled || item.disabled })

  return (
    <BaseAccordion.Item className={styles.item} disabled={item.disabled} value={item.value}>
      <BaseAccordion.Header className={styles.header}>
        <BaseAccordion.Trigger className={styles.trigger} onPointerDown={pressRipple.onPointerDown}>
          <PressRipple ripple={pressRipple.ripple} />
          <span className={styles.title}>{item.title}</span>
          <CaretDownIcon aria-hidden="true" className={styles.chevron} size={18} weight="bold" />
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel className={styles.panel}>
        <div className={styles.content}>{item.content}</div>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  )
}
