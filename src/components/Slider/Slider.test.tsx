import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Slider } from './Slider'

describe('Slider', () => {
  it('connects the visible label to the slider', () => {
    render(<Slider defaultValue={30} description="Speaker output." label="Volume" />)

    expect(screen.getByRole('slider', { name: 'Volume' })).toBeInTheDocument()
  })

  it('associates descriptions with the slider group', () => {
    render(<Slider defaultValue={30} description="Speaker output." label="Volume" />)

    const group = screen.getByRole('group', { name: 'Volume' })
    const description = screen.getByText('Speaker output.')

    expect(group).toHaveAttribute('aria-describedby', description.id)
  })
})
