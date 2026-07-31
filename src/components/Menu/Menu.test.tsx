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
})
