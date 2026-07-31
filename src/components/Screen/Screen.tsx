import type { ReactNode } from 'react'
import styles from './Screen.module.css'

export type ScreenProps = {
  children: ReactNode
}

export function Screen({ children }: ScreenProps) {
  return <main className={styles.screen}>{children}</main>
}
