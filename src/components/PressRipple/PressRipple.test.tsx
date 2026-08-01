import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PressRipple } from './PressRipple'
import { usePressRipple, type UsePressRippleOptions } from './usePressRipple'

function TestComponent(props: UsePressRippleOptions<HTMLButtonElement>) {
  const { onPointerDown, ripple } = usePressRipple<HTMLButtonElement>(props)

  return (
    <button data-testid="target" onPointerDown={onPointerDown}>
      Click me
      <PressRipple ripple={ripple} />
    </button>
  )
}

describe('PressRipple', () => {
  it('does not render ripple initially', () => {
    render(<TestComponent />)
    expect(
      screen.getByTestId('target').querySelector('span[data-press-ripple]'),
    ).not.toBeInTheDocument()
  })

  it('adds ripple on pointer down with correct math', async () => {
    const user = userEvent.setup()
    render(<TestComponent />)

    const button = screen.getByTestId('target')

    vi.spyOn(button, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 40,
      top: 10,
      left: 10,
      bottom: 50,
      right: 110,
      x: 10,
      y: 10,
      toJSON: () => {},
    })

    await user.pointer({ keys: '[MouseLeft>]', target: button, coords: { clientX: 50, clientY: 20 } })

    const ripple = button.querySelector('span[data-press-ripple]')
    expect(ripple).toBeInTheDocument()

    expect(ripple).toHaveStyle({
      '--press-ripple-size': '215px',
      '--press-ripple-x': '40px',
      '--press-ripple-y': '10px',
      '--press-ripple-duration': '320ms',
    })
  })

  it('does not add ripple if disabled', async () => {
    const user = userEvent.setup()
    render(<TestComponent disabled />)

    const button = screen.getByTestId('target')
    await user.pointer({ keys: '[MouseLeft>]', target: button })

    expect(button.querySelector('span[data-press-ripple]')).not.toBeInTheDocument()
  })

  it('does not add ripple if shouldRipple returns false', async () => {
    const user = userEvent.setup()
    render(<TestComponent shouldRipple={() => false} />)

    const button = screen.getByTestId('target')
    await user.pointer({ keys: '[MouseLeft>]', target: button })

    expect(button.querySelector('span[data-press-ripple]')).not.toBeInTheDocument()
  })

  it('replaces ripple on subsequent pointer down', async () => {
    const user = userEvent.setup()
    render(<TestComponent />)

    const button = screen.getByTestId('target')
    await user.pointer({ keys: '[MouseLeft>]', target: button })

    const firstRipple = button.querySelector('span[data-press-ripple]')
    expect(firstRipple).toBeInTheDocument()

    await user.pointer({ keys: '[/MouseLeft]' })
    await user.pointer({ keys: '[MouseLeft>]', target: button })

    const secondRipple = button.querySelector('span[data-press-ripple]')
    expect(secondRipple).toBeInTheDocument()
  })
})
