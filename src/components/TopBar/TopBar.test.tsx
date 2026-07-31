import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders slot content', () => {
    render(<TopBar left={<button type="button">Back</button>} center="Title" right={<button type="button">More</button>} />)

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'More' })).toBeInTheDocument()
  })

  it('uses content as the full-width state', () => {
    render(<TopBar content={<label>Search<input /></label>} left={<button type="button">Back</button>} />)

    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument()
  })
})
