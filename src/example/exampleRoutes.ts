import { lazy } from 'react'
import type { ExampleRoute } from './exampleTypes'

const AccordionExample = lazy(() => import('./pages/AccordionExample').then((module) => ({ default: module.AccordionExample })))
const AlertExample = lazy(() => import('./pages/AlertExample').then((module) => ({ default: module.AlertExample })))
const AppShellExample = lazy(() => import('./pages/AppShellExample').then((module) => ({ default: module.AppShellExample })))
const AvatarExample = lazy(() => import('./pages/AvatarExample').then((module) => ({ default: module.AvatarExample })))
const BadgeExample = lazy(() => import('./pages/BadgeExample').then((module) => ({ default: module.BadgeExample })))
const BottomBarExample = lazy(() => import('./pages/BottomBarExample').then((module) => ({ default: module.BottomBarExample })))
const ButtonExample = lazy(() => import('./pages/ButtonExample').then((module) => ({ default: module.ButtonExample })))
const CardExample = lazy(() => import('./pages/CardExample').then((module) => ({ default: module.CardExample })))
const CheckboxExample = lazy(() => import('./pages/CheckboxExample').then((module) => ({ default: module.CheckboxExample })))
const ChoiceDialogExample = lazy(() => import('./pages/ChoiceDialogExample').then((module) => ({ default: module.ChoiceDialogExample })))
const ChipExample = lazy(() => import('./pages/ChipExample').then((module) => ({ default: module.ChipExample })))
const DatePickerExample = lazy(() => import('./pages/DatePickerExample').then((module) => ({ default: module.DatePickerExample })))
const DialogExample = lazy(() => import('./pages/DialogExample').then((module) => ({ default: module.DialogExample })))
const DividerExample = lazy(() => import('./pages/DividerExample').then((module) => ({ default: module.DividerExample })))
const EmptyStateExample = lazy(() => import('./pages/EmptyStateExample').then((module) => ({ default: module.EmptyStateExample })))
const FileUploadExample = lazy(() => import('./pages/FileUploadExample').then((module) => ({ default: module.FileUploadExample })))
const FormFieldExample = lazy(() => import('./pages/FormFieldExample').then((module) => ({ default: module.FormFieldExample })))
const IconButtonExample = lazy(() => import('./pages/IconButtonExample').then((module) => ({ default: module.IconButtonExample })))
const InputExample = lazy(() => import('./pages/InputExample').then((module) => ({ default: module.InputExample })))
const ListExample = lazy(() => import('./pages/ListExample').then((module) => ({ default: module.ListExample })))
const MenuExample = lazy(() => import('./pages/MenuExample').then((module) => ({ default: module.MenuExample })))
const PanelExample = lazy(() => import('./pages/PanelExample').then((module) => ({ default: module.PanelExample })))
const ProgressExample = lazy(() => import('./pages/ProgressExample').then((module) => ({ default: module.ProgressExample })))
const RadioGroupExample = lazy(() => import('./pages/RadioGroupExample').then((module) => ({ default: module.RadioGroupExample })))
const ScreenExample = lazy(() => import('./pages/ScreenExample').then((module) => ({ default: module.ScreenExample })))
const SearchBarExample = lazy(() => import('./pages/SearchBarExample').then((module) => ({ default: module.SearchBarExample })))
const SectionHeaderExample = lazy(() => import('./pages/SectionHeaderExample').then((module) => ({ default: module.SectionHeaderExample })))
const SelectExample = lazy(() => import('./pages/SelectExample').then((module) => ({ default: module.SelectExample })))
const SheetExample = lazy(() => import('./pages/SheetExample').then((module) => ({ default: module.SheetExample })))
const SkeletonExample = lazy(() => import('./pages/SkeletonExample').then((module) => ({ default: module.SkeletonExample })))
const SliderExample = lazy(() => import('./pages/SliderExample').then((module) => ({ default: module.SliderExample })))
const StepperExample = lazy(() => import('./pages/StepperExample').then((module) => ({ default: module.StepperExample })))
const SwitchExample = lazy(() => import('./pages/SwitchExample').then((module) => ({ default: module.SwitchExample })))
const TabsExample = lazy(() => import('./pages/TabsExample').then((module) => ({ default: module.TabsExample })))
const ToastExample = lazy(() => import('./pages/ToastExample').then((module) => ({ default: module.ToastExample })))
const TopBarExample = lazy(() => import('./pages/TopBarExample').then((module) => ({ default: module.TopBarExample })))
const TooltipExample = lazy(() => import('./pages/TooltipExample').then((module) => ({ default: module.TooltipExample })))

const routes = [
  { id: 'accordion', title: 'Accordion', description: 'Disclosure rows for compact content.', category: 'Layout', component: AccordionExample },
  { id: 'alert', title: 'Alert', description: 'Inline feedback and page status.', category: 'Feedback', component: AlertExample },
  { id: 'app-shell', title: 'AppShell', description: 'Fixed mobile frame for app chrome.', category: 'Layout', component: AppShellExample },
  { id: 'avatar', title: 'Avatar', description: 'Identity markers for rows and profiles.', category: 'Data Display', component: AvatarExample },
  { id: 'badge', title: 'Badge', description: 'Small counts, labels, and priority marks.', category: 'Data Display', component: BadgeExample },
  { id: 'bottom-bar', title: 'BottomBar', description: 'Persistent mobile tab navigation.', category: 'Navigation', component: BottomBarExample },
  { id: 'button', title: 'Button', description: 'Primary, secondary, ghost, and loading actions.', category: 'Actions', component: ButtonExample },
  { id: 'card', title: 'Card', description: 'Grouped surfaces with header, body, and footer.', category: 'Layout', component: CardExample },
  { id: 'checkbox', title: 'Checkbox', description: 'Boolean form choices with descriptions.', category: 'Forms', component: CheckboxExample },
  { id: 'choice-dialog', title: 'ChoiceDialog', description: 'Dialog picker for rich single and multiple choices.', category: 'Forms', component: ChoiceDialogExample },
  { id: 'chip', title: 'Chip', description: 'Compact filters and selection labels.', category: 'Actions', component: ChipExample },
  { id: 'date-picker', title: 'DatePicker', description: 'Native date input with field styling.', category: 'Forms', component: DatePickerExample },
  { id: 'dialog', title: 'Dialog', description: 'Focused modal confirmation flows.', category: 'Feedback', component: DialogExample },
  { id: 'divider', title: 'Divider', description: 'Quiet separators inside grouped content.', category: 'Layout', component: DividerExample },
  { id: 'empty-state', title: 'EmptyState', description: 'Useful blank states with optional actions.', category: 'Feedback', component: EmptyStateExample },
  { id: 'file-upload', title: 'FileUpload', description: 'Native upload input with project chrome.', category: 'Forms', component: FileUploadExample },
  { id: 'form-field', title: 'FormField', description: 'Shared field label and message wrapper.', category: 'Forms', component: FormFieldExample },
  { id: 'icon-button', title: 'IconButton', description: 'Icon-only actions with labels.', category: 'Actions', component: IconButtonExample },
  { id: 'input', title: 'Input', description: 'Text inputs, textareas, and validation.', category: 'Forms', component: InputExample },
  { id: 'list', title: 'List', description: 'Rows with leading, trailing, and description slots.', category: 'Data Display', component: ListExample },
  { id: 'menu', title: 'Menu', description: 'Overflow actions and contextual commands.', category: 'Actions', component: MenuExample },
  { id: 'panel', title: 'Panel', description: 'Side drawer for app menus and tools.', category: 'Navigation', component: PanelExample },
  { id: 'progress', title: 'Progress', description: 'Bars and spinners for loading states.', category: 'Feedback', component: ProgressExample },
  { id: 'radio-group', title: 'RadioGroup', description: 'Single-choice row groups.', category: 'Forms', component: RadioGroupExample },
  { id: 'screen', title: 'Screen', description: 'Scrollable content region inside AppShell.', category: 'Layout', component: ScreenExample },
  { id: 'search-bar', title: 'SearchBar', description: 'Search input with clear and trailing controls.', category: 'Forms', component: SearchBarExample },
  { id: 'section-header', title: 'SectionHeader', description: 'Consistent headings for grouped content.', category: 'Layout', component: SectionHeaderExample },
  { id: 'select', title: 'Select', description: 'Native single-choice select control.', category: 'Forms', component: SelectExample },
  { id: 'sheet', title: 'Sheet', description: 'Bottom drawer for focused mobile tasks.', category: 'Feedback', component: SheetExample },
  { id: 'skeleton', title: 'Skeleton', description: 'Static loading placeholders.', category: 'Feedback', component: SkeletonExample },
  { id: 'slider', title: 'Slider', description: 'Single-thumb range control.', category: 'Forms', component: SliderExample },
  { id: 'stepper', title: 'Stepper', description: 'Increment and decrement numeric values.', category: 'Forms', component: StepperExample },
  { id: 'switch', title: 'Switch', description: 'Immediate on/off settings.', category: 'Forms', component: SwitchExample },
  { id: 'tabs', title: 'Tabs', description: 'Segmented navigation between nearby views.', category: 'Navigation', component: TabsExample },
  { id: 'toast', title: 'Toast', description: 'Floating non-blocking feedback.', category: 'Feedback', component: ToastExample },
  { id: 'top-bar', title: 'TopBar', description: 'Fixed top app chrome and search mode.', category: 'Navigation', component: TopBarExample },
  { id: 'tooltip', title: 'Tooltip', description: 'Hover or focus popup hints.', category: 'Actions', component: TooltipExample },
] satisfies ExampleRoute[]

export const exampleRoutes: ExampleRoute[] = [...routes].sort((a, b) => a.title.localeCompare(b.title))
