import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('uses a default accessible name', () => {
    render(<SearchBar />)

    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument()
  })

  it('uses a custom accessible name', () => {
    render(<SearchBar aria-label="Search examples" />)

    expect(screen.getByRole('searchbox', { name: 'Search examples' })).toBeInTheDocument()
  })

  it('clears the current value', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<SearchBar defaultValue="patterns" onValueChange={handleValueChange} />)

    const searchbox = screen.getByRole('searchbox', { name: 'Search' })
    await user.click(screen.getByRole('button', { name: 'Clear search' }))

    expect(searchbox).toHaveValue('')
    expect(handleValueChange).toHaveBeenCalledWith('')
  })
})
