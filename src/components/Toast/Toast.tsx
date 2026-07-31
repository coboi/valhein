import { Toast as BaseToast } from '@base-ui/react/toast'
import { XIcon } from '@phosphor-icons/react'
import { useRef, type ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import type { ToastObject } from '@base-ui/react/toast'
import { toastManager } from './toastManager'
import styles from './Toast.module.css'

export type ToastProviderProps = {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <BaseToast.Provider limit={2} timeout={3500} toastManager={toastManager}>
      {children}
      <ToastViewport />
    </BaseToast.Provider>
  )
}

function ToastViewport() {
  const manager = BaseToast.useToastManager<{ variant?: 'default' | 'danger' }>()

  return (
    <BaseToast.Portal>
      <BaseToast.Viewport className={styles.viewport}>
        {manager.toasts.map((toast) => <ToastItem key={toast.id} toast={toast} />)}
      </BaseToast.Viewport>
    </BaseToast.Portal>
  )
}

function ToastItem({ toast }: { toast: ToastObject<{ variant?: 'default' | 'danger' }> }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const closeRipple = usePressRipple<HTMLButtonElement>({
    getRippleElement: () => contentRef.current,
  })

  return (
    <BaseToast.Root className={styles.root} swipeDirection="right" toast={toast}>
      <BaseToast.Content className={styles.content} ref={contentRef}>
        <PressRipple ripple={closeRipple.ripple} />
        <div className={styles.copy}>
          <BaseToast.Title className={styles.title} />
          <BaseToast.Description className={styles.description} />
        </div>
        <BaseToast.Close className={styles.close} aria-label="Close toast" onPointerDown={closeRipple.onPointerDown}>
          <XIcon aria-hidden="true" size={18} weight="bold" />
        </BaseToast.Close>
      </BaseToast.Content>
    </BaseToast.Root>
  )
}
