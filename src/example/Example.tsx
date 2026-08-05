import { Suspense, useEffect, useState } from 'react'
import {
  CaretLeftIcon,
  DotsThreeIcon,
  GearSixIcon,
  MagnifyingGlassIcon,
  SquaresFourIcon,
  XIcon,
} from '@phosphor-icons/react'
import { useAppearance } from '../components/Appearance'
import { AppShell } from '../components/AppShell'
import { BottomBar, type BottomBarItem } from '../components/BottomBar'
import { IconButton } from '../components/IconButton'
import { Menu } from '../components/Menu'
import { Screen } from '../components/Screen'
import { SearchBar } from '../components/SearchBar'
import { ToastProvider } from '../components/Toast'
import { TopBar } from '../components/TopBar'
import { exampleRoutes } from './exampleRoutes'
import { HomeExample } from './pages/HomeExample'
import { SettingsExample } from './pages/SettingsExample'
import styles from './Example.module.css'

const navItems: BottomBarItem[] = [
  {
    value: 'examples',
    label: 'Examples',
    icon: ({ active }) => <SquaresFourIcon aria-hidden="true" size={21} weight={active ? 'fill' : 'regular'} />,
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: ({ active }) => <GearSixIcon aria-hidden="true" size={21} weight={active ? 'fill' : 'regular'} />,
  },
]

export function Example() {
  const [tab, setTab] = useState('examples')
  const [activeRouteId, setActiveRouteId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [searchMode, setSearchMode] = useState<'closed' | 'open' | 'closing'>('closed')
  const { accent, mode, setAccent, setMode } = useAppearance()
  const activeRoute = exampleRoutes.find((route) => route.id === activeRouteId)
  const ActiveRouteComponent = activeRoute?.component
  const isSearchVisible = searchMode !== 'closed'
  const isSearchClosing = searchMode === 'closing'
  const screenContentKey = tab === 'settings' ? 'settings' : activeRouteId ?? 'home'

  useEffect(() => {
    if (!isSearchClosing) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setSearchMode('closed')
    }, 160)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isSearchClosing])

  useEffect(() => {
    if (tab !== 'examples' || activeRouteId) {
      setSearchMode('closed')
    }
  }, [activeRouteId, tab])

  return (
    <ToastProvider>
      <AppShell>
        <TopBar
          content={
            tab === 'examples' && !activeRoute && isSearchVisible ? (
              <div className={`${styles.topBarSearch} ${isSearchClosing ? styles.topBarSearchClosing : ''}`}>
                <SearchBar
                  aria-label="Search examples"
                  autoFocus
                  onValueChange={setQuery}
                  placeholder="Search examples"
                  value={query}
                />
                <IconButton
                  className={styles.topBarSearchClose}
                  label="Close search"
                  onClick={() => setSearchMode('closing')}
                  variant="raised"
                >
                  <XIcon aria-hidden="true" size={20} weight="bold" />
                </IconButton>
              </div>
            ) : undefined
          }
          left={
            activeRoute ? (
              <IconButton label="Back to examples" onClick={() => setActiveRouteId(null)} variant="raised">
                <CaretLeftIcon aria-hidden="true" size={23} weight="bold" />
              </IconButton>
            ) : undefined
          }
          center={activeRoute?.title ?? (tab === 'settings' ? 'Settings' : 'Valhein Example')}
          right={
            tab === 'examples' && !activeRoute ? (
              <>
                <IconButton label="Search" onClick={() => setSearchMode('open')} variant="raised">
                  <MagnifyingGlassIcon aria-hidden="true" size={21} weight="regular" />
                </IconButton>
                <Menu
                  trigger={
                    <IconButton label="More" variant="raised">
                      <DotsThreeIcon aria-hidden="true" size={22} weight="bold" />
                    </IconButton>
                  }
                  items={[{ label: 'Components' }, { label: 'Examples' }, { type: 'separator' }, { label: 'Valhein' }]}
                />
              </>
            ) : undefined
          }
        />
        <Screen>
          <div className={styles.screenContent} key={screenContentKey}>
            {tab === 'settings' ? (
              <SettingsExample
                accentPreference={accent}
                themePreference={mode}
                onAccentPreferenceChange={setAccent}
                onThemePreferenceChange={setMode}
              />
            ) : ActiveRouteComponent ? (
              <Suspense fallback={<p className={styles.bodyText}>Loading example...</p>}>
                <ActiveRouteComponent />
              </Suspense>
            ) : (
              <HomeExample routes={exampleRoutes} query={query} onOpenRoute={setActiveRouteId} />
            )}
          </div>
        </Screen>
        <BottomBar items={navItems} value={tab} onValueChange={setTab} />
      </AppShell>
    </ToastProvider>
  )
}

export default Example
