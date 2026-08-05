import { useEffect, useLayoutEffect, useState } from 'react'

export type AppearanceMode = 'light' | 'dark' | 'system'

export type AppearanceAccent = 'standard' | 'blue' | 'orange' | 'green' | 'purple'

export type UseAppearanceOptions = {
  storageKey?: string
  defaultMode?: AppearanceMode
  defaultAccent?: AppearanceAccent
}

export type UseAppearanceResult = {
  accent: AppearanceAccent
  mode: AppearanceMode
  resolvedMode: 'light' | 'dark'
  setAccent: (accent: AppearanceAccent) => void
  setMode: (mode: AppearanceMode) => void
}

function getStoredValue(key: string, allowedValues: string[], fallback: string) {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const storedValue = window.localStorage.getItem(key)

    if (allowedValues.includes(storedValue ?? '')) {
      return storedValue
    }
  } catch {
    return fallback
  }

  return fallback
}

function resolveMode(mode: AppearanceMode) {
  if (mode !== 'system') {
    return mode
  }

  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useAppearance(options: UseAppearanceOptions = {}): UseAppearanceResult {
  const { storageKey = 'valhein', defaultMode = 'system', defaultAccent = 'standard' } = options
  const themeStorageKey = `${storageKey}-theme`
  const accentStorageKey = `${storageKey}-accent`
  const [mode, setMode] = useState<AppearanceMode>(() => getStoredValue(themeStorageKey, ['system', 'light', 'dark'], defaultMode) as AppearanceMode)
  const [accent, setAccent] = useState<AppearanceAccent>(() => getStoredValue(accentStorageKey, ['standard', 'blue', 'orange', 'green', 'purple'], defaultAccent) as AppearanceAccent)
  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>(() => resolveMode(mode))

  useLayoutEffect(() => {
    const applyMode = () => {
      const nextMode = resolveMode(mode)
      document.documentElement.dataset.theme = nextMode
      setResolvedMode(nextMode)
    }

    applyMode()
    document.documentElement.dataset.accent = accent

    if (mode !== 'system' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    colorSchemeQuery.addEventListener('change', applyMode)

    return () => {
      colorSchemeQuery.removeEventListener('change', applyMode)
    }
  }, [accent, mode])

  useEffect(() => {
    try {
      window.localStorage.setItem(themeStorageKey, mode)
    } catch {
      // The current session still reflects the selected mode.
    }
  }, [mode, themeStorageKey])

  useEffect(() => {
    try {
      window.localStorage.setItem(accentStorageKey, accent)
    } catch {
      // The current session still reflects the selected accent.
    }
  }, [accent, accentStorageKey])

  return { accent, mode, resolvedMode, setAccent, setMode }
}
