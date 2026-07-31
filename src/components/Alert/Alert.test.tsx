import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders neutral alerts as status messages', () => {
    render(<Alert title="Saved" description="Your changes are ready." />)

    expect(screen.getByRole('status')).toHaveTextContent('Saved')
    expect(screen.getByText('Your changes are ready.')).toBeInTheDocument()
  })

  it('renders danger alerts as alerts', () => {
    render(<Alert title="Failed" description="Try again." variant="danger" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Failed')
  })
})
