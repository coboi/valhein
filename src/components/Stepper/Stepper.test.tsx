import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
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
})
