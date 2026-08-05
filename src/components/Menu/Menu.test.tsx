import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Menu } from './Menu'

describe('Menu', () => {
  it('opens menu items and ignores disabled selections', async () => {
    const user = userEvent.setup()
    const handleArchive = vi.fn()
    const handleDisabled = vi.fn()
    render(
      <Menu
        trigger={<button type="button">Open menu</button>}
        items={[
          { label: 'Archive', onSelect: handleArchive },
          { label: 'Disabled', disabled: true, onSelect: handleDisabled },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(await screen.findByRole('menuitem', { name: 'Disabled' }))
    await user.click(screen.getByRole('menuitem', { name: 'Archive' }))

    expect(handleDisabled).not.toHaveBeenCalled()
    expect(handleArchive).toHaveBeenCalledTimes(1)
  })

  it('treats duplicate labels as distinct rows', async () => {
    const user = userEvent.setup()
    const handleFirst = vi.fn()
    const handleSecond = vi.fn()
    render(
      <Menu
        trigger={<button type="button">Open menu</button>}
        items={[
          { label: 'Share', onSelect: handleFirst },
          { label: 'Share', onSelect: handleSecond },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const menuItems = await screen.findAllByRole('menuitem', { name: 'Share' })
    expect(menuItems).toHaveLength(2)

    await user.click(menuItems[0])

    expect(handleFirst).toHaveBeenCalledTimes(1)
    expect(handleSecond).not.toHaveBeenCalled()
  })
})
