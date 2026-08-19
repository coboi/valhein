# Changelog

## [0.1.2] — 2026-08-19

Visual refinements for secondary surfaces and neutral badges, plus example app cleanup.

- Switch secondary button, bottom bar active tab, and tab indicators to solid `--color-surface-raised` background.
- Lighten `--color-badge-neutral` token.
- Streamline Home and Settings pages in the demo application.

## [0.1.1] — 2026-08-05

Polish release with a new `useAppearance` hook and fixes.

- Add `useAppearance` hook for `data-theme` / `data-accent` state and persistence.
- Polish theme tokens, Panel, Menu, and Tabs visuals.
- Fix press-ripple and active-tab alignment.
- Fix Tooltip text color and List item styling.
- Use flex layout for Card and TopBar content; add global box-sizing reset.

## [0.1.0] — 2026-08-01

Initial public release of the Valhein React component library.

- 40 components with TypeScript types and CSS Modules; dark-mode + accent theming via `data-theme` / `data-accent`.
- Peer deps: `react` 19, `@base-ui/react` ^1.6, `@phosphor-icons/react` ^2.1.
- ESM output with a single stylesheet export (`valhein/style.css`).
