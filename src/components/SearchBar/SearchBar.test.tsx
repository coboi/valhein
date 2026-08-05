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

  it('fires onClear and onValueChange when clearing', async () => {
    const user = userEvent.setup()
    const handleClear = vi.fn()
    const handleValueChange = vi.fn()
    render(<SearchBar defaultValue="patterns" onClear={handleClear} onValueChange={handleValueChange} />)

    await user.click(screen.getByRole('button', { name: 'Clear search' }))

    expect(handleClear).toHaveBeenCalledTimes(1)
    expect(handleValueChange).toHaveBeenCalledWith('')
  })

  it('does not write internal state in controlled mode', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<SearchBar value="patterns" onValueChange={handleValueChange} />)

    const searchbox = screen.getByRole('searchbox', { name: 'Search' })
    await user.type(searchbox, 'x')

    expect(handleValueChange).toHaveBeenCalledWith('patternsx')
    expect(searchbox).toHaveValue('patterns')
  })

  it('hides the clear button when empty', () => {
    render(<SearchBar />)

    expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument()
  })
})
