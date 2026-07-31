import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Select } from './Select'

describe('Select', () => {
  it('renders label, placeholder, disabled options, and errors', () => {
    render(
      <Select
        label="Accent"
        placeholder="Choose accent"
        error="Choose an accent."
        options={[
          { value: 'standard', label: 'Standard' },
          { value: 'orange', label: 'Orange', disabled: true },
        ]}
      />,
    )

    const select = screen.getByRole('combobox', { name: 'Accent' })
    const error = screen.getByText('Choose an accent.')

    expect(screen.getByRole('option', { name: 'Choose accent' })).toBeDisabled()
    expect(screen.getByRole('option', { name: 'Orange' })).toBeDisabled()
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveAttribute('aria-errormessage', error.id)
  })

  it('forwards native select attributes and invokes onChange and onValueChange', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    const handleValueChange = vi.fn()

    render(
      <Select
        id="custom-select"
        name="country"
        onChange={handleChange}
        onValueChange={handleValueChange}
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
        ]}
      />,
    )

    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('id', 'custom-select')
    expect(select).toHaveAttribute('name', 'country')

    await user.selectOptions(select, 'ca')
    expect(handleChange).toHaveBeenCalled()
    expect(handleValueChange).toHaveBeenCalledWith('ca')
  })
})

