import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tabs } from './Tabs'

describe('Tabs', () => {
  it('renders a named tablist, selected tab, disabled tab, and panel', () => {
    render(
      <Tabs
        ariaLabel="Example tabs"
        defaultValue="preview"
        items={[
          { value: 'preview', label: 'Preview', content: 'Preview content' },
          { value: 'code', label: 'Code', content: 'Code content' },
          { value: 'disabled', label: 'Disabled', disabled: true, content: 'Disabled content' },
        ]}
      />,
    )

    expect(screen.getByRole('tablist', { name: 'Example tabs' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Preview' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Disabled' })).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Preview content')
  })
})
