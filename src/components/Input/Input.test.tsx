import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input, Textarea } from './Input'

describe('Input', () => {
  it('associates descriptions and required state', () => {
    render(<Input label="Email" description="Use your work email." required />)

    const input = screen.getByRole('textbox', { name: 'Email' })
    const description = screen.getByText('Use your work email.')

    expect(input).toBeRequired()
    expect(input).toHaveAttribute('aria-describedby', description.id)
  })

  it('associates errors with textareas', () => {
    render(<Textarea label="Message" error="Message is required." />)

    const textarea = screen.getByRole('textbox', { name: 'Message' })
    const error = screen.getByText('Message is required.')

    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAttribute('aria-errormessage', error.id)
  })
})
