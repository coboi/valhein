import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useAppearance } from './useAppearance'

function stubMatchMedia(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
  window.localStorage.clear()
  delete document.documentElement.dataset.theme
  delete document.documentElement.dataset.accent
})

describe('useAppearance', () => {
  it('defaults to system mode and standard accent', () => {
    stubMatchMedia(false)
    const { result } = renderHook(() => useAppearance())

    expect(result.current.mode).toBe('system')
    expect(result.current.accent).toBe('standard')
    expect(result.current.resolvedMode).toBe('light')
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(document.documentElement.dataset.accent).toBe('standard')
  })

  it('persists the selected mode to storage and the document', () => {
    stubMatchMedia(false)
    const { result } = renderHook(() => useAppearance())

    act(() => result.current.setMode('dark'))

    expect(window.localStorage.getItem('valhein-theme')).toBe('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('restores a stored accent preference', () => {
    stubMatchMedia(false)
    window.localStorage.setItem('valhein-accent', 'blue')
    const { result } = renderHook(() => useAppearance())

    expect(result.current.accent).toBe('blue')
    expect(document.documentElement.dataset.accent).toBe('blue')
  })

  it('follows OS color-scheme changes in system mode', () => {
    let currentMatches = false
    const changeListener = vi.fn()
    vi.stubGlobal(
      'matchMedia',
      vi.fn().mockImplementation(() => ({
        matches: currentMatches,
        addEventListener: vi.fn().mockImplementation((_event, listener) => changeListener.mockImplementation(() => listener())),
        removeEventListener: vi.fn(),
      })),
    )

    const { result } = renderHook(() => useAppearance())
    expect(document.documentElement.dataset.theme).toBe('light')

    currentMatches = true
    act(() => changeListener())

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(result.current.resolvedMode).toBe('dark')
  })

  it('uses a custom storage key prefix', () => {
    stubMatchMedia(false)
    renderHook(() => useAppearance({ storageKey: 'app' }))

    expect(window.localStorage.getItem('app-theme')).toBe('system')
    expect(window.localStorage.getItem('app-accent')).toBe('standard')
  })
})
