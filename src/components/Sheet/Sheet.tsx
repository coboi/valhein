import { Drawer } from '@base-ui/react/drawer'
import { XIcon } from '@phosphor-icons/react'
import type { ReactElement, ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './Sheet.module.css'

export type SheetProps = {
  trigger: ReactElement
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
}

export function Sheet({ trigger, title, description, children }: SheetProps) {
  const closeRipple = usePressRipple<HTMLButtonElement>()

  return (
    <Drawer.Root swipeDirection="down">
      <Drawer.Trigger render={trigger} />
      <Drawer.Portal>
        <Drawer.Backdrop className={styles.backdrop} />
        <Drawer.Viewport className={styles.viewport}>
          <Drawer.Popup className={styles.popup}>
            <Drawer.Content className={styles.content}>
              <div className={styles.handle} />
              <Drawer.Close
                render={
                  <button
                    className={styles.close}
                    type="button"
                    aria-label="Close sheet"
                    onPointerDown={closeRipple.onPointerDown}
                  >
                    <PressRipple ripple={closeRipple.ripple} />
                    <XIcon aria-hidden="true" size={22} weight="bold" />
                  </button>
                }
              />
              {(title || description) && (
                <div className={styles.header}>
                  {title && <Drawer.Title className={styles.title}>{title}</Drawer.Title>}
                  {description && (
                    <Drawer.Description className={styles.description}>
                      {description}
                    </Drawer.Description>
                  )}
                </div>
              )}
              <div className={styles.body} data-valhein-overlay-content="">{children}</div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
