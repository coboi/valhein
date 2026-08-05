import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Stepper } from './Stepper'

describe('Stepper', () => {
  it('connects the visible label to the group', () => {
    render(<Stepper defaultValue={2} label="Quantity" />)

    expect(screen.getByRole('group', { name: 'Quantity' })).toBeInTheDocument()
  })

  it('keeps the increment controls named', () => {
    render(<Stepper defaultValue={2} label="Quantity" />)

    expect(screen.getByRole('button', { name: 'Decrease value' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Increase value' })).toBeInTheDocument()
  })

  it('clamps an out-of-range default value', () => {
    render(<Stepper defaultValue={10} max={5} />)

    expect(screen.getByRole('status')).toHaveTextContent('5')
  })

  it('disables the decrease button at the minimum', () => {
    render(<Stepper defaultValue={0} min={0} />)

    expect(screen.getByRole('button', { name: 'Decrease value' })).toBeDisabled()
  })

  it('disables the increase button at the maximum', () => {
    render(<Stepper defaultValue={5} max={5} />)

    expect(screen.getByRole('button', { name: 'Increase value' })).toBeDisabled()
  })

  it('steps and emits the new value', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<Stepper defaultValue={2} min={0} max={10} onValueChange={handleValueChange} />)

    await user.click(screen.getByRole('button', { name: 'Increase value' }))

    expect(screen.getByRole('status')).toHaveTextContent('3')
    expect(handleValueChange).toHaveBeenCalledWith(3)
  })

  it('does not write internal state in controlled mode', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<Stepper value={2} min={0} max={10} onValueChange={handleValueChange} />)

    await user.click(screen.getByRole('button', { name: 'Increase value' }))

    expect(handleValueChange).toHaveBeenCalledWith(3)
    expect(screen.getByRole('status')).toHaveTextContent('2')
  })
})
