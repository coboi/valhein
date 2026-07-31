import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('uses its label as the accessible name', () => {
    render(<IconButton label="Open menu"><span aria-hidden="true">icon</span></IconButton>)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('disables itself while loading', () => {
    render(<IconButton label="Saving" loading><span aria-hidden="true">icon</span></IconButton>)

    const button = screen.getByRole('button', { name: 'Saving' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })
})
