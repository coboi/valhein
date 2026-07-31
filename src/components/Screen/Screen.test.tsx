import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Screen } from './Screen'

describe('Screen', () => {
  it('renders children inside main content', () => {
    render(<Screen><h1>Dashboard</h1></Screen>)

    expect(screen.getByRole('main')).toContainElement(screen.getByRole('heading', { name: 'Dashboard' }))
  })
})
