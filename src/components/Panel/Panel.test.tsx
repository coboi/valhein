import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Panel, PanelClose } from './Panel'

describe('Panel', () => {
  it('opens and closes with an accessible title', async () => {
    const user = userEvent.setup()
    render(
      <Panel
        trigger={<button type="button">Open panel</button>}
        title="App menu"
        footer={(
          <PanelClose>
            <button type="button">Done</button>
          </PanelClose>
        )}
      >
        Navigation links
      </Panel>,
    )

    await user.click(screen.getByRole('button', { name: 'Open panel' }))
    expect(await screen.findByRole('dialog', { name: 'App menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Done' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: 'App menu' })).not.toBeInTheDocument()
    })
  })
})
