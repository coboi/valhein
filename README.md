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
| `List` / `ListItem` | Vertical item list |
| `Menu` | Dropdown action menu |
| `Panel` | Side drawer panel |
| `Progress` | Linear progress bar |
| `RadioGroup` / `RadioItem` | Single-select radio group |
| `Screen` | Scrollable screen with safe-area padding |
| `SearchBar` | Search input with clear action |
| `SectionHeader` | Labeled section separator |
| `Select` | Native select input |
| `Sheet` | Bottom sheet overlay |
| `Skeleton` | Loading placeholder |
| `Slider` | Range slider |
| `Stepper` | Numeric increment/decrement |
| `Switch` | Toggle switch |
| `Tabs` / `Tab` | Tab navigation |
| `Toast` / `useToast` | Toast notification system |
| `TopBar` | Fixed top navigation bar |
| `Tooltip` | Hover popup hint |

## Theming

The stylesheet exposes CSS custom properties on `:root`. Override them to customise the look:

```css
:root {
  --color-action: #2563eb;
  --color-action-text: #ffffff;
}
```

Dark mode is supported via `data-theme="dark"` on the root element. Built-in accent presets (`blue`, `orange`, `green`, `purple`) are activated with `data-accent="blue"` etc.

## AI Assistant Skill

If you use AI coding assistants to build applications with Valhein, you can optionally install the `valhein-ui` skill guide:

```sh
npx skills add coboi/skills --skill valhein-ui
```

## License

MIT
