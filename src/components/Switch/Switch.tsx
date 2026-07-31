import { Switch as BaseSwitch } from '@base-ui/react/switch'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './Switch.module.css'

export type SwitchProps = ComponentPropsWithoutRef<typeof BaseSwitch.Root>

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root className={[styles.root, className].filter(Boolean).join(' ')} {...props}>
      <BaseSwitch.Thumb className={styles.thumb} />
    </BaseSwitch.Root>
  )
}
