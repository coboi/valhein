## Commands
- Use Node 24 and npm 11 (`.nvmrc`, `packageManager: npm@11.8.0`); `.npmrc` pins the public npm registry.
- Install deps with `npm install`; `package-lock.json` is the npm lockfile. `skills-lock.json` is only the local agent-skill lock.
- Dev server: `npm run dev`.
- Full verification: `npm run check`; it runs `npm run lint`, `npm test -- --run`, `npm run build`, then `npm run check:lib`.
- Focused tests: `npm test -- --run <path>`; example `npm test -- --run src/components/Button/Button.test.tsx`.
- Build is the app typecheck step too: `npm run build` runs `tsc -b && vite build`.
- Library verification: `npm run check:lib` runs `npm run build:lib`, `node scripts/smoke-lib.mjs`, and `npm pack --dry-run`; library output is `dist-lib/`.
- Lint is Oxlint only (`.oxlintrc.json`); no ESLint or Prettier config is present.

## App / Library Shape
- Single Vite React TypeScript package plus private library build; no monorepo/workspace is present.
- Runtime entrypoint is `src/main.tsx`; `src/App.tsx` is intentionally thin and renders `src/example/Example.tsx`.
- `src/example/` is the kitchen-sink-style demo app. Add new demo pages under `src/example/pages/*Example.tsx` and register them in `src/example/exampleRoutes.ts`.
- `src/index.ts` is the public library export surface and imports `src/styles/library.css`; `tsconfig.lib.json` emits declarations only for `src/index.ts` and `src/components/**`.
- Do not export internal helpers such as `PressRipple` unless product API intentionally changes; `scripts/smoke-lib.mjs` asserts it stays internal.
- Components live in `src/components/<Component>/` with `<Component>.tsx`, `<Component>.module.css`, `index.ts`, and usually `<Component>.test.tsx`.
- `AppShell` fixes the `100dvh` mobile frame; `Screen` owns scrolling and includes safe-area padding for `TopBar`/`BottomBar` overlays.
- `plans/` contains implementation plans, not app source.
- `dist/` and `dist-lib/` are generated build outputs and are gitignored.

## Styling
- CSS Modules are the component styling convention; reusable tokens live in `src/styles/tokens.css`, library-safe globals in `src/styles/library.css`, and app-only globals in `src/index.css`.
- Keep UI work monochrome, token-based, and mobile-app oriented; avoid ad hoc colors, glass/blur effects, or desktop-first layouts.
- `TopBar` normally uses `left`, `center`, and `right`; `content` replaces all slots for full-width states like search.
- `PressRipple` is intentionally long and expansive across pressable controls; do not flag its duration, keyframe expansion, or `scale: 0` start as animation audit findings unless the product direction changes.

## Base UI Usage
- Base UI is used for behavior/accessibility, not visual styling.
- Current Base UI wrappers: `Button`/`IconButton`, `Avatar`, `BottomBar`/`Tabs`, `Accordion`, `Dialog`/`ChoiceDialog`, `Menu`, `Sheet`/`Panel` (Drawer), `Toast`, `Checkbox`, `Switch`, `Slider`, and `RadioGroup`.
- `Select`, `DatePicker`, and `FileUpload` intentionally use native controls wrapped in project styling.
- Base UI `render={...}` triggers/closes in `Dialog`, `ChoiceDialog`, `Menu`, `Sheet`, and `Panel` expect `ReactElement`, not arbitrary `ReactNode`.
- `Dialog` has no top-right X close button; use footer actions with `DialogClose`.
- Alert confirmation is `Dialog variant="alert"`, not a separate component.
- For Base UI docs, prefer installed `@base-ui/react` v1.6.0 (`/mui/base-ui/v1.6.0`) or the Base UI llms refs.

## Releases
- Version lives in `package.json`; pre-1.0, so any release may include breaking API changes. Keep `CHANGELOG.md` in the same concise style.
- Publish flow: bump version → add CHANGELOG entry → commit → `git tag vX.Y.Z` and push → `npm publish` (`prepublishOnly` runs `npm run check`).

## TypeScript / Tests
- TypeScript has `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, and `noFallthroughCasesInSwitch` enabled; remove unused values and avoid enums/namespaces.
- Oxlint uses `react`, `typescript`, and `oxc` plugins; `react/rules-of-hooks` is an error and `react/only-export-components` is a warning with constant exports allowed.
- Vitest runs in `jsdom` with `src/test/setup.ts`, which installs `@testing-library/jest-dom/vitest` and cleans up after each test.
