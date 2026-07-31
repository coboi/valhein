import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox, CheckboxGroup } from './Checkbox'

describe('Checkbox', () => {
  it('renders label and description and emits checked changes', async () => {
    const user = userEvent.setup()
    const handleCheckedChange = vi.fn()
    render(<Checkbox description="Daily digest" label="Email" onCheckedChange={handleCheckedChange} />)

    await user.click(screen.getByRole('checkbox', { name: /Email/ }))

    expect(screen.getByText('Daily digest')).toBeInTheDocument()
    expect(handleCheckedChange).toHaveBeenCalledWith(true, expect.anything())
  })

  it('keeps disabled choices disabled inside groups', () => {
    render(
      <CheckboxGroup>
        <Checkbox disabled label="Email" />
      </CheckboxGroup>,
    )

    expect(screen.getByRole('checkbox', { name: 'Email' })).toHaveAttribute('aria-disabled', 'true')
  })
})
