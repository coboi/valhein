import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children and preserves custom class names', () => {
    render(<Badge className="custom-badge" variant="danger">3</Badge>)

    expect(screen.getByText('3')).toHaveClass('custom-badge')
  })
})
