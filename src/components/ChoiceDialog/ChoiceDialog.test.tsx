import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../Button'
import { ChoiceDialog } from './ChoiceDialog'

describe('ChoiceDialog', () => {
  it('applies a single choice only when confirmed', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(
      <ChoiceDialog
        trigger={<Button>Choose workspace</Button>}
        title="Choose workspace"
        defaultValue="personal"
        onValueChange={handleValueChange}
        options={[
          { value: 'personal', label: 'Personal' },
          { value: 'team', label: 'Team' },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))
    await user.click(screen.getByText('Team'))
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(handleValueChange).not.toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))
    await user.click(screen.getByText('Team'))
    await user.click(screen.getByRole('button', { name: 'Apply' }))

    expect(handleValueChange).toHaveBeenCalledWith('team')
  })

  it('reports a controlled single choice', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(
      <ChoiceDialog
        trigger={<Button>Choose workspace</Button>}
        title="Choose workspace"
        value="personal"
        onValueChange={handleValueChange}
        options={[
          { value: 'personal', label: 'Personal' },
          { value: 'team', label: 'Team' },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))
    await user.click(screen.getByText('Team'))
    await user.click(screen.getByRole('button', { name: 'Apply' }))

    expect(handleValueChange).toHaveBeenCalledWith('team')
  })

  it('discards the draft when canceling then reopening', async () => {
    const user = userEvent.setup()
    render(
      <ChoiceDialog
        trigger={<Button>Choose workspace</Button>}
        title="Choose workspace"
        defaultValue="personal"
        options={[
          { value: 'personal', label: 'Personal' },
          { value: 'team', label: 'Team' },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))
    await user.click(screen.getByText('Team'))
    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))
    expect(screen.getByRole('radio', { name: 'Personal' })).toBeChecked()
  })

  it('toggles multiple choices in place', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(
      <ChoiceDialog
        type="multiple"
        trigger={<Button>Choose filters</Button>}
        title="Choose filters"
        onValueChange={handleValueChange}
        options={[
          { value: 'unread', label: 'Unread' },
          { value: 'starred', label: 'Starred' },
          { value: 'priority', label: 'Priority' },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Choose filters' }))
    await user.click(screen.getByText('Starred'))
    await user.click(screen.getByText('Starred'))
    await user.click(screen.getByRole('button', { name: 'Apply' }))

    expect(handleValueChange).toHaveBeenCalledWith([])
  })

  it('selects a default option when options arrive after mount', async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <ChoiceDialog
        trigger={<Button>Choose workspace</Button>}
        title="Choose workspace"
        options={[]}
      />,
    )

    rerender(
      <ChoiceDialog
        trigger={<Button>Choose workspace</Button>}
        title="Choose workspace"
        options={[
          { value: 'personal', label: 'Personal' },
          { value: 'team', label: 'Team' },
        ]}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Choose workspace' }))

    const radio = await screen.findByRole('radio', { name: 'Personal' })
    expect(radio).toBeChecked()
    expect(screen.getByRole('button', { name: 'Apply' })).toBeEnabled()
  })
})
