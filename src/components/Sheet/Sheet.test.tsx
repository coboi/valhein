import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sheet } from './Sheet'

describe('Sheet', () => {
  it('opens and closes with an accessible title', async () => {
    const user = userEvent.setup()
    render(<Sheet trigger={<button type="button">Open sheet</button>} title="Sheet title">Sheet content</Sheet>)

    await user.click(screen.getByRole('button', { name: 'Open sheet' }))
    expect(await screen.findByRole('dialog', { name: 'Sheet title' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close sheet' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: 'Sheet title' })).not.toBeInTheDocument()
    })
  })
})
