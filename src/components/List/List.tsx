import type { MouseEventHandler, ReactNode } from 'react'
import { PressRipple, usePressRipple } from '../PressRipple'
import styles from './List.module.css'

export type ListProps = {
  children: ReactNode
}

export type ListItemProps = {
  title: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function List({ children }: ListProps) {
  return <div className={styles.list}>{children}</div>
}

export function ListItem({ title, description, leading, trailing, onClick }: ListItemProps) {
  const pressRipple = usePressRipple<HTMLButtonElement>({ disabled: !onClick })

  const leadingAndCopy = (
    <>
      {leading && <div className={styles.leading}>{leading}</div>}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
    </>
  )

  if (onClick) {
    return (
      <div className={styles.item}>
        <button
          className={styles.main}
          onClick={onClick}
          onPointerDown={pressRipple.onPointerDown}
          type="button"
        >
          <PressRipple ripple={pressRipple.ripple} />
          {leadingAndCopy}
        </button>
        {trailing && <div className={styles.trailing}>{trailing}</div>}
      </div>
    )
  }

  return (
    <div className={styles.item}>
      {leadingAndCopy}
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </div>
  )
}
