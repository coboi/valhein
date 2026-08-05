# Valhein

Simple mobile-first UI for React.

> Valhein is pre-1.0 — breaking API changes may land in any release.

## Install

```sh
npm install valhein @base-ui/react @phosphor-icons/react react react-dom
```

## Usage

Import components from the package root and include the stylesheet:

```ts
import { Button, Dialog, Input } from 'valhein'
import 'valhein/style.css'
```

## Peer Dependencies

| Package | Version |
|---|---|
| `react` | `^19` |
| `react-dom` | `^19` |
| `@base-ui/react` | `^1.6` |
| `@phosphor-icons/react` | `^2.1` |

## Components

| Component | Description |
|---|---|
| `Accordion` | Collapsible content sections |
| `Alert` | Inline status messages |
| `AppShell` | Fixed 100dvh mobile frame |
| `Avatar` | User avatar with fallback |
| `Badge` | Count and status indicators |
| `BottomBar` | Fixed bottom navigation bar |
| `Button` | Press button with variants |
| `Card` | Elevated surface container |
| `CardHeader` / `CardBody` / `CardFooter` | Card surface parts (companion to `Card`) |
| `Checkbox` / `CheckboxGroup` | Single and grouped checkboxes |
| `Chip` | Compact selectable tag |
| `ChoiceDialog` | Single or multi-select dialog |
| `DatePicker` | Native date input |
| `Dialog` / `DialogClose` | Modal dialog with alert variant |
| `Divider` | Horizontal separator |
| `EmptyState` | Placeholder for empty lists |
| `FileUpload` | Native file input |
| `FormField` | Label + input + error wrapper |
| `IconButton` | Icon-only press button |
| `Input` | Text input |
| `Textarea` | Multi-line text input (companion to `Input`) |
| `List` / `ListItem` | Vertical item list |
| `Menu` | Dropdown action menu |
| `Panel` | Side drawer panel |
| `Progress` | Linear progress bar |
| `Spinner` | Loading spinner (companion to `Progress`) |
| `RadioGroup` / `RadioItem` | Single-select radio group |
| `Screen` | Scrollable screen with safe-area padding |
| `SearchBar` | Search input with clear action |
| `SectionHeader` | Labeled section separator |
| `Select` | Native select input |
| `Sheet` | Bottom sheet overlay |
| `Skeleton` | Loading placeholder |
| `SkeletonRow` | List-style skeleton row (companion to `Skeleton`) |
| `Slider` | Range slider |
| `Stepper` | Numeric increment/decrement |
| `Switch` | Toggle switch |
| `Tabs` | Props-driven tab navigation (`items: TabsItem[]`, values must be unique) |
| `ToastProvider` / `useToast` | Toast notification system (mount one `ToastProvider` at app root) |
| `TopBar` | Fixed top navigation bar |
| `Tooltip` | Hover popup hint |

## Toast

Toast needs a single `ToastProvider` mounted once, typically at the app root:

```tsx
import { ToastProvider, useToast } from 'valhein'

function App() {
  return <ToastProvider>{/* your app */}</ToastProvider>
}

function SaveButton() {
  const toast = useToast()
  return (
    <button type="button" onClick={() => toast.add({ title: 'Saved', description: 'Draft stored.' })}>
      Save
    </button>
  )
}
```

Toasts without a mounted provider render nowhere and callbacks are dropped silently — mount `ToastProvider` before using `useToast`.

## Theming

The stylesheet exposes CSS custom properties on `:root`. Override them to customise the look:

```css
:root {
  --color-action: #2563eb;
  --color-action-text: #ffffff;
}
```

Dark mode is supported via `data-theme="dark"` on the root element. Built-in accent presets (`blue`, `orange`, `green`, `purple`) are activated with `data-accent="blue"` etc.

The `useAppearance` hook manages both with persistence:

```tsx
import { useAppearance } from 'valhein'

function App() {
  const { mode, accent, setMode, setAccent } = useAppearance()
  return (
    <div>
      <button type="button" onClick={() => setMode('dark')}>Dark</button>
      <button type="button" onClick={() => setAccent('green')}>Green</button>
    </div>
  )
}
```

It applies `data-theme` / `data-accent` to the root element and stores the choice in `localStorage`. Call with `{ storageKey: 'app' }` to scope the storage key.

All tokens are CSS custom properties defined in `src/styles/tokens.css`. The main families:

| Family | Prefix | Examples |
|---|---|---|
| Color | `--color-*` | `--color-surface`, `--color-text`, `--color-border`, `--color-danger` |
| Radius | `--radius-*` | `--radius-sm` (8px) … `--radius-pill` (999px) |
| Spacing | `--space-*` | `--space-1` (4px) … `--space-7` (32px) |
| Type | `--text-*` / `--leading-*` / `--weight-*` / `--tracking-*` | `--text-body` (14px), `--weight-semibold` |
| Motion | `--duration-*` / `--ease-*` | `--duration-press` (140ms), `--ease-out` |
| Elevation | `--shadow-*` / `--z-*` | `--shadow-floating`, `--z-menu`, `--z-toast` |

## AI Assistant Skill

If you use AI coding assistants to build applications with Valhein, you can optionally install the `valhein-ui` skill guide:

```sh
npx skills add coboi/skills --skill valhein-ui
```

## Docs & Demo

Browse every component live in the searchable example app:
<https://valhein.bril.my.id/>

## License

MIT
