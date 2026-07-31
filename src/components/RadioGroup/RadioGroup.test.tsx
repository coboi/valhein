import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RadioGroup, RadioItem } from './RadioGroup'

describe('RadioGroup', () => {
  it('uses the supplied accessible name', () => {
    render(
      <RadioGroup ariaLabel="Density" defaultValue="comfortable" name="density">
        <RadioItem label="Compact" value="compact" />
        <RadioItem label="Comfortable" value="comfortable" />
      </RadioGroup>,
    )

    expect(screen.getByRole('radiogroup', { name: 'Density' })).toBeInTheDocument()
  })
})
