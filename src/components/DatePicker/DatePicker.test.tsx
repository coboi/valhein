import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DatePicker } from './DatePicker'

describe('DatePicker', () => {
  it('renders an uncontrolled default value', () => {
    render(<DatePicker defaultValue="2026-07-16" label="Start" />)

    expect(screen.getByLabelText('Start')).toHaveValue('2026-07-16')
  })

  it('renders a controlled value and emits changes', () => {
    const handleValueChange = vi.fn()
    render(<DatePicker label="Start" onValueChange={handleValueChange} value="2026-07-16" />)

    const input = screen.getByLabelText('Start')
    expect(input).toHaveValue('2026-07-16')

    fireEvent.change(input, { target: { value: '2026-07-17' } })

    expect(handleValueChange).toHaveBeenCalledWith('2026-07-17')
  })

  it('does not warn when value and defaultValue are both supplied', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined)

    render(<DatePicker defaultValue="2026-07-15" label="Start" onValueChange={vi.fn()} value="2026-07-16" />)

    expect(consoleError).not.toHaveBeenCalled()
    consoleError.mockRestore()
  })

  it('invokes both onChange and onValueChange on input change', () => {
    const handleChange = vi.fn()
    const handleValueChange = vi.fn()

    render(<DatePicker label="Start" onChange={handleChange} onValueChange={handleValueChange} />)
    const input = screen.getByLabelText('Start')
    fireEvent.change(input, { target: { value: '2026-08-01' } })

    expect(handleChange).toHaveBeenCalled()
    expect(handleValueChange).toHaveBeenCalledWith('2026-08-01')
  })
})

