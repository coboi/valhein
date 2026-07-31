import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppShell } from './AppShell'

describe('AppShell', () => {
  it('renders shell content', () => {
    render(<AppShell><div>Shell content</div></AppShell>)

    expect(screen.getByText('Shell content')).toBeInTheDocument()
  })
})
