import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Avatar.module.css'

export type AvatarSize = 'sm' | 'md'

export type AvatarProps = ComponentPropsWithoutRef<typeof BaseAvatar.Root> & {
  alt?: string
  fallback: ReactNode
  size?: AvatarSize
  src?: string
}

export function Avatar({ alt = '', className, fallback, size = 'md', src, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root className={[styles.root, styles[size], className].filter(Boolean).join(' ')} {...props}>
      {src && <BaseAvatar.Image alt={alt} className={styles.image} src={src} />}
      <BaseAvatar.Fallback className={styles.fallback}>{fallback}</BaseAvatar.Fallback>
    </BaseAvatar.Root>
  )
}
