import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Switch } from './Switch'

describe('Switch', () => {
  it('uses the supplied accessible name and emits checked changes', async () => {
    const user = userEvent.setup()
    const handleCheckedChange = vi.fn()
    render(<Switch aria-label="Airplane mode" onCheckedChange={handleCheckedChange} />)

    await user.click(screen.getByRole('switch', { name: 'Airplane mode' }))

    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything())
  })
})
