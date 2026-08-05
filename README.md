# Valhein

Simple mobile-first UI for React.

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

## Versioning

Valhein is pre-1.0 and follows [semantic versioning](https://semver.org/):
within `0.x`, minor versions (`0.1`, `0.2`, …) MAY contain breaking API
changes, and the CHANGELOG records them explicitly. Patch releases (`0.1.1`) are
bug fixes only.

Before publishing a release:

1. Update `CHANGELOG.md` with the changes since the last tag.
2. Bump `version` in `package.json`.
3. `git tag` the release and push the tag.
4. Run `npm publish` (guarded by `prepublishOnly`, which runs the full check).

## Docs & Demo

Browse every component live in the searchable example app:
<https://valhein.bril.my.id/>

## License

MIT
