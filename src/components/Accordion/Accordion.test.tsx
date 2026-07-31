import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Accordion } from './Accordion'

const items = [
  { value: 'details', title: 'Details', content: 'Project details' },
  { value: 'billing', title: 'Billing', content: 'Billing settings' },
  { value: 'disabled', title: 'Disabled', content: 'Disabled content', disabled: true },
]

describe('Accordion', () => {
  it('renders default open items', () => {
    render(<Accordion defaultValue={['details']} items={items} />)

    expect(screen.getByRole('button', { name: 'Details' })).toHaveAttribute('aria-expanded', 'true')
  })

  it('supports multiple values and emits changes', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<Accordion defaultValue={['details']} items={items} multiple onValueChange={handleValueChange} />)

    await user.click(screen.getByRole('button', { name: 'Billing' }))

    expect(handleValueChange).toHaveBeenCalledWith(['details', 'billing'])
  })

  it('keeps disabled items disabled', () => {
    render(<Accordion items={items} />)

    expect(screen.getByRole('button', { name: 'Disabled' })).toHaveAttribute('aria-disabled', 'true')
  })
})
