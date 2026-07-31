import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('disables itself while loading', () => {
    render(<Button loading>Saving</Button>)

    const button = screen.getByRole('button', { name: 'Saving' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('keeps decorative icons out of the accessible name', () => {
    render(
      <Button
        leadingIcon={<span aria-hidden="true">leading</span>}
        trailingIcon={<span aria-hidden="true">trailing</span>}
      >
        Save
      </Button>,
    )

    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
  })
})
