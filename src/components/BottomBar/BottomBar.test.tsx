import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { BottomBar, type BottomBarItem } from './BottomBar'

const items: BottomBarItem[] = [
  { value: 'home', label: 'Home' },
  { value: 'settings', label: 'Settings' },
]

describe('BottomBar', () => {
  it('uses a default tablist name', () => {
    render(<BottomBar items={items} value="home" onValueChange={vi.fn()} />)

    expect(screen.getByRole('tablist', { name: 'Primary navigation' })).toBeInTheDocument()
  })

  it('uses a custom tablist name', () => {
    render(<BottomBar ariaLabel="App sections" items={items} value="home" onValueChange={vi.fn()} />)

    expect(screen.getByRole('tablist', { name: 'App sections' })).toBeInTheDocument()
  })
})
