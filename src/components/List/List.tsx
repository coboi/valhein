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

  const content = (
    <>
      {leading && <div className={styles.leading}>{leading}</div>}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </>
  )

  if (onClick) {
    return (
      <button className={styles.item} type="button" onClick={onClick} onPointerDown={pressRipple.onPointerDown}>
        <PressRipple ripple={pressRipple.ripple} />
        {content}
      </button>
    )
  }

  return <div className={styles.item}>{content}</div>
}
