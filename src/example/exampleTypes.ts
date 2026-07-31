import type { ComponentType, LazyExoticComponent } from 'react'

export type ThemePreference = 'system' | 'light' | 'dark'

export type AccentPreference = 'standard' | 'blue' | 'orange' | 'green' | 'purple'

export type ExampleCategory = 'Actions' | 'Data Display' | 'Feedback' | 'Forms' | 'Layout' | 'Navigation'

export type ExampleComponent = ComponentType | LazyExoticComponent<ComponentType>

export type ExampleRoute = {
  id: string
  title: string
  description: string
  category: ExampleCategory
  component: ExampleComponent
}

export type AppearanceSettings = {
  accentPreference: AccentPreference
  onAccentPreferenceChange: (preference: AccentPreference) => void
  onThemePreferenceChange: (preference: ThemePreference) => void
  themePreference: ThemePreference
}
