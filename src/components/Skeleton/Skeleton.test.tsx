import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton, SkeletonRow } from './Skeleton'

describe('Skeleton', () => {
  it('is hidden from assistive technology', () => {
    render(<Skeleton data-testid="skeleton" />)

    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders rows as hidden placeholders', () => {
    const { container } = render(<SkeletonRow />)

    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })
})
