import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { List, ListItem } from './List'

describe('List', () => {
  it('renders clickable items as buttons', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<List><ListItem title="Account" description="Profile" onClick={handleClick} /></List>)

    await user.click(screen.getByRole('button', { name: /Account/ }))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not render static items as buttons', () => {
    render(<List><ListItem title="Account" description="Profile" /></List>)

    expect(screen.queryByRole('button', { name: /Account/ })).not.toBeInTheDocument()
    expect(screen.getByText('Account')).toBeInTheDocument()
  })
})
