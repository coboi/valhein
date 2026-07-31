import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Progress, Spinner } from './Progress'

describe('Progress', () => {
  it('renders determinate progress values', () => {
    render(<Progress label="Upload" max={10} value={4} />)

    const progress = screen.getByRole('progressbar', { name: 'Upload' })
    expect(progress).toHaveAttribute('aria-valuenow', '4')
    expect(progress).toHaveAttribute('aria-valuemax', '10')
  })

  it('renders spinner status text', () => {
    render(<Spinner label="Loading data" />)

    expect(screen.getByRole('status')).toHaveTextContent('Loading data')
  })
})
