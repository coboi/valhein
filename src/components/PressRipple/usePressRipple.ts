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
    const clickX = event.clientX - rect.left
    const clickY = event.clientY - rect.top
    const maxCornerDist = Math.max(
      Math.hypot(clickX, clickY),
      Math.hypot(rect.width - clickX, clickY),
      Math.hypot(clickX, rect.height - clickY),
      Math.hypot(rect.width - clickX, rect.height - clickY),
    )
    const size = Math.ceil(maxCornerDist * 3.2)
    const duration = Math.round(Math.min(550, Math.max(320, size * 0.75)))

    rippleId.current += 1
    setRipple({
      duration,
      id: rippleId.current,
      size,
      x: clickX,
      y: clickY,
    })
  }

  return {
    onPointerDown: handlePointerDown,
    ripple,
  }
}
