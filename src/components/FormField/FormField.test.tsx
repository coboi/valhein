import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormField } from './FormField'

describe('FormField', () => {
  it('applies a caller-provided label id', () => {
    render(
      <FormField label="Name" labelId="field-label">
        <input />
      </FormField>,
    )

    expect(screen.getByText('Name')).toHaveAttribute('id', 'field-label')
  })
})
