import type { ReactNode } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import styles from './Example.module.css'

export function ExampleStack({ children }: { children: ReactNode }) {
  return <div className={styles.stack}>{children}</div>
}

export function ExampleHero({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>Valhein example</p>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  )
}

export function ExampleSection({ children, description, title }: { children: ReactNode; description?: string; title: string }) {
  return (
    <div className={styles.section}>
      <SectionHeader title={title} description={description} />
      {children}
    </div>
  )
}
