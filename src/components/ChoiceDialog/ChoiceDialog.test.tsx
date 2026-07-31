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
})
