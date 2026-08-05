import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { List, ListItem } from './List'
import { Switch } from '../Switch'

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

  it('keeps a trailing control outside the row button', async () => {
    const user = userEvent.setup()
    const handleRowClick = vi.fn()
    render(
      <List>
        <ListItem title="Notifications" onClick={handleRowClick} trailing={<Switch aria-label="Toggle notify" />} />
      </List>,
    )

    const rowButton = screen.getByRole('button', { name: /Notifications/ })
    const switchButton = screen.getByRole('switch', { name: 'Toggle notify' })

    expect(rowButton).not.toContainElement(switchButton)

    await user.click(switchButton)

    expect(handleRowClick).not.toHaveBeenCalled()
  })

  it('renders a trailing control of a static row as a sibling', () => {
    render(
      <List>
        <ListItem title="Static" trailing={<Switch aria-label="Static toggle" />} />
      </List>,
    )

    expect(screen.queryByRole('button', { name: /Static/ })).not.toBeInTheDocument()
    expect(screen.getByRole('switch', { name: 'Static toggle' })).toBeInTheDocument()
  })
})
