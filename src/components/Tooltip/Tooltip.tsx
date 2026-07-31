import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react'
import styles from './Tooltip.module.css'

export type TooltipProps = ComponentPropsWithoutRef<typeof BaseTooltip.Root> & {
  children: ReactElement
  content: ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <BaseTooltip.Root {...props}>
      <BaseTooltip.Trigger render={children} />
      <BaseTooltip.Portal>
        <BaseTooltip.Positioner sideOffset={4} className={styles.positioner}>
          <BaseTooltip.Popup className={styles.popup}>
            {content}
          </BaseTooltip.Popup>
        </BaseTooltip.Positioner>
      </BaseTooltip.Portal>
    </BaseTooltip.Root>
  )
}
