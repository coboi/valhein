import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog'
import { createContext, useContext, type ReactElement, type ReactNode } from 'react'
import styles from './Dialog.module.css'

export type DialogVariant = 'default' | 'alert'

export type DialogProps = {
  trigger: ReactElement
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  variant?: DialogVariant
}

export type DialogCloseProps = {
  children: ReactElement
}

const DialogVariantContext = createContext<DialogVariant>('default')

export function Dialog({
  trigger,
  title,
  description,
  children,
  footer,
  variant = 'default',
}: DialogProps) {
  if (variant === 'alert') {
    return (
      <BaseAlertDialog.Root>
        <BaseAlertDialog.Trigger render={trigger} />
        <BaseAlertDialog.Portal>
          <DialogVariantContext.Provider value="alert">
            <BaseAlertDialog.Backdrop className={styles.backdrop} />
            <BaseAlertDialog.Viewport className={styles.viewport}>
              <BaseAlertDialog.Popup className={[styles.popup, styles.alert].join(' ')}>
                {(title || description) && (
                  <div className={styles.header}>
                    {title && <BaseAlertDialog.Title className={styles.title}>{title}</BaseAlertDialog.Title>}
                    {description && (
                      <BaseAlertDialog.Description className={styles.description}>
                        {description}
                      </BaseAlertDialog.Description>
                    )}
                  </div>
                )}
                {children && <div className={styles.body} data-valhein-overlay-content="">{children}</div>}
                {footer && <div className={styles.footer}>{footer}</div>}
              </BaseAlertDialog.Popup>
            </BaseAlertDialog.Viewport>
          </DialogVariantContext.Provider>
        </BaseAlertDialog.Portal>
      </BaseAlertDialog.Root>
    )
  }

  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger render={trigger} />
      <BaseDialog.Portal>
        <DialogVariantContext.Provider value="default">
          <BaseDialog.Backdrop className={styles.backdrop} />
          <BaseDialog.Viewport className={styles.viewport}>
            <BaseDialog.Popup className={[styles.popup, styles.default].join(' ')}>
              {(title || description) && (
                <div className={styles.header}>
                  {title && <BaseDialog.Title className={styles.title}>{title}</BaseDialog.Title>}
                  {description && (
                    <BaseDialog.Description className={styles.description}>
                      {description}
                    </BaseDialog.Description>
                  )}
                </div>
              )}
              {children && <div className={styles.body} data-valhein-overlay-content="">{children}</div>}
              {footer && <div className={styles.footer}>{footer}</div>}
            </BaseDialog.Popup>
          </BaseDialog.Viewport>
        </DialogVariantContext.Provider>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  )
}

export function DialogClose({ children }: DialogCloseProps) {
  const variant = useContext(DialogVariantContext)

  if (variant === 'alert') {
    return <BaseAlertDialog.Close render={children} />
  }

  return <BaseDialog.Close render={children} />
}
