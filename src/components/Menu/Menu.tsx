import { Menu as BaseMenu } from '@base-ui/react/menu'
import type { ReactElement } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Menu.module.css'

export type MenuItem =
  | {
      type?: 'item'
      label: string
      destructive?: boolean
      disabled?: boolean
      onSelect?: () => void
    }
  | {
      type: 'separator'
    }

export type MenuProps = {
  trigger: ReactElement
  items: MenuItem[]
  align?: 'start' | 'center' | 'end'
}

type ActionMenuItem = Extract<MenuItem, { type?: 'item' }>

export function Menu({ trigger, items, align = 'end' }: MenuProps) {
  return (
    <BaseMenu.Root>
      <BaseMenu.Trigger render={trigger} />
      <BaseMenu.Portal>
        <BaseMenu.Positioner
          align={align}
          alignOffset={-4}
          sideOffset={-48}
          className={styles.positioner}
        >
          <BaseMenu.Popup className={styles.popup}>
            {items.map((item, index) =>
              item.type === 'separator' ? (
                <BaseMenu.Separator className={styles.separator} key={`separator-${index}`} />
              ) : (
                <MenuActionItem item={item} key={`item-${index}`} />
              ),
            )}
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  )
}

function MenuActionItem({ item }: { item: ActionMenuItem }) {
  const pressRipple = usePressRipple<HTMLDivElement>({ disabled: item.disabled })

  return (
    <BaseMenu.Item
      className={[styles.item, item.destructive && styles.destructive].filter(Boolean).join(' ')}
      disabled={item.disabled}
      onClick={item.onSelect}
      onPointerDown={pressRipple.onPointerDown}
    >
      <PressRipple ripple={pressRipple.ripple} />
      <span className={styles.itemLabel}>{item.label}</span>
    </BaseMenu.Item>
  )
}
