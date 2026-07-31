import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import type { ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Tabs.module.css'

export type TabsItem = {
  value: string
  label: ReactNode
  content?: ReactNode
  disabled?: boolean
}

export type TabsProps = {
  ariaLabel: string
  defaultValue?: string
  fitted?: boolean
  items: TabsItem[]
  onValueChange?: (value: string) => void
  value?: string
}

export function Tabs({
  ariaLabel,
  defaultValue,
  fitted = true,
  items,
  onValueChange,
  value,
}: TabsProps) {
  const hasPanels = items.some((item) => item.content !== undefined)

  return (
    <BaseTabs.Root
      className={styles.root}
      data-fitted={fitted || undefined}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(nextValue) => {
        if (typeof nextValue === 'string') {
          onValueChange?.(nextValue)
        }
      }}
    >
      <BaseTabs.List aria-label={ariaLabel} className={styles.list}>
        {items.map((item) => <TabTrigger item={item} key={item.value} />)}
        <BaseTabs.Indicator className={styles.indicator} />
      </BaseTabs.List>
      {hasPanels && (
        <div className={styles.panels}>
          {items.map((item) => (
            <BaseTabs.Panel className={styles.panel} key={item.value} value={item.value}>
              {item.content}
            </BaseTabs.Panel>
          ))}
        </div>
      )}
    </BaseTabs.Root>
  )
}

function TabTrigger({ item }: { item: TabsItem }) {
  const pressRipple = usePressRipple<HTMLButtonElement>()

  return (
    <BaseTabs.Tab className={styles.tab} disabled={item.disabled} onPointerDown={pressRipple.onPointerDown} value={item.value}>
      <PressRipple ripple={pressRipple.ripple} />
      <span className={styles.label}>{item.label}</span>
    </BaseTabs.Tab>
  )
}
