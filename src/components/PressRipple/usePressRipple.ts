import { useRef, useState, type PointerEvent, type PointerEventHandler } from 'react'

export type RippleState = {
  duration: number
  id: number
  size: number
  x: number
  y: number
}

export type UsePressRippleOptions<T extends HTMLElement> = {
  disabled?: boolean
  getRippleElement?: (event: PointerEvent<T>) => HTMLElement | null
  onPointerDown?: PointerEventHandler<T>
  shouldRipple?: (event: PointerEvent<T>) => boolean
}

export function usePressRipple<T extends HTMLElement>({
  disabled = false,
  getRippleElement,
  onPointerDown,
  shouldRipple,
}: UsePressRippleOptions<T> = {}) {
  const [ripple, setRipple] = useState<RippleState | null>(null)
  const rippleId = useRef(0)

  function handlePointerDown(event: PointerEvent<T>) {
    onPointerDown?.(event)

    if (disabled || event.defaultPrevented || event.button !== 0 || shouldRipple?.(event) === false) {
      return
    }

    const rippleElement = getRippleElement?.(event) ?? event.currentTarget
    const rect = rippleElement.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 1.7
    const duration = Math.round(Math.min(460, Math.max(280, size * 1.15)))

    rippleId.current += 1
    setRipple({
      duration,
      id: rippleId.current,
      size,
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
    })
  }

  return {
    onPointerDown: handlePointerDown,
    ripple,
  }
}
