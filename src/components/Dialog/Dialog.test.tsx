import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Dialog, DialogClose } from './Dialog'

describe('Dialog', () => {
  it('opens default dialogs with dialog semantics', async () => {
    const user = userEvent.setup()
    render(
      <Dialog
        trigger={<button type="button">Open settings</button>}
        title="Settings"
        footer={(
          <DialogClose>
            <button type="button">Close settings</button>
          </DialogClose>
        )}
      >
        Configure the app.
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open settings' }))
    expect(screen.getByRole('dialog', { name: 'Settings' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close settings' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: 'Settings' })).not.toBeInTheDocument()
    })
  })

  it('opens alert variants with alert-dialog semantics', async () => {
    const user = userEvent.setup()
    render(
      <Dialog
        trigger={<button type="button">Archive</button>}
        title="Archive project?"
        variant="alert"
        footer={(
          <DialogClose>
            <button type="button">Cancel</button>
          </DialogClose>
        )}
      >
        This action can be restored later.
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Archive' }))
    expect(screen.getByRole('alertdialog', { name: 'Archive project?' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => {
      expect(screen.queryByRole('alertdialog', { name: 'Archive project?' })).not.toBeInTheDocument()
    })
  })
})
