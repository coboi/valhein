import { Tabs } from '@base-ui/react/tabs'
import type { ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './BottomBar.module.css'

export type BottomBarItem = {
  value: string
  label: string
  icon?: ReactNode | ((state: { active: boolean }) => ReactNode)
}

export type BottomBarProps = {
  ariaLabel?: string
  value: string
  onValueChange: (value: string) => void
  items: BottomBarItem[]
}

export function BottomBar({ ariaLabel = 'Primary navigation', value, onValueChange, items }: BottomBarProps) {
  return (
    <Tabs.Root
      className={styles.root}
      value={value}
      onValueChange={(nextValue) => {
        if (typeof nextValue === 'string') {
          onValueChange(nextValue)
        }
      }}
    >
      <Tabs.List aria-label={ariaLabel} className={styles.list}>
        {items.map((item) => <BottomBarTab active={item.value === value} item={item} key={item.value} />)}
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
    </Tabs.Root>
  )
}

function BottomBarTab({ active, item }: { active: boolean; item: BottomBarItem }) {
  const pressRipple = usePressRipple<HTMLButtonElement>()
  const icon = typeof item.icon === 'function' ? item.icon({ active }) : item.icon

  return (
    <Tabs.Tab className={styles.tab} onPointerDown={pressRipple.onPointerDown} value={item.value}>
      <PressRipple ripple={pressRipple.ripple} />
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{item.label}</span>
    </Tabs.Tab>
  )
}
