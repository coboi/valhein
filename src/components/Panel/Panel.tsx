import { Drawer } from '@base-ui/react/drawer'
import { XIcon } from '@phosphor-icons/react'
import type { ReactElement, ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Panel.module.css'

export type PanelSide = 'left' | 'right'

export type PanelProps = {
  trigger: ReactElement
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  footer?: ReactNode
  side?: PanelSide
}

export type PanelCloseProps = {
  children: ReactElement
}

export function Panel({ trigger, title, description, children, footer, side = 'left' }: PanelProps) {
  const closeRipple = usePressRipple<HTMLButtonElement>()

  return (
    <Drawer.Root swipeDirection={side}>
      <Drawer.Trigger render={trigger} />
      <Drawer.Portal>
        <Drawer.Backdrop className={styles.backdrop} />
        <Drawer.Viewport className={[styles.viewport, styles[side]].join(' ')}>
          <Drawer.Popup className={styles.popup} data-side={side}>
            <Drawer.Content className={styles.content}>
              <div className={styles.header}>
                <div className={styles.heading}>
                  {title && <Drawer.Title className={styles.title}>{title}</Drawer.Title>}
                  {description && (
                    <Drawer.Description className={styles.description}>
                      {description}
                    </Drawer.Description>
                  )}
                </div>
                <Drawer.Close
                  render={
                    <button
                      className={styles.close}
                      type="button"
                      aria-label="Close panel"
                      onPointerDown={closeRipple.onPointerDown}
                    >
                      <PressRipple ripple={closeRipple.ripple} />
                      <XIcon aria-hidden="true" size={22} weight="bold" />
                    </button>
                  }
                />
              </div>
              <div className={styles.body} data-valhein-overlay-content="">{children}</div>
              {footer && <div className={styles.footer}>{footer}</div>}
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export function PanelClose({ children }: PanelCloseProps) {
  return <Drawer.Close render={children} />
}
