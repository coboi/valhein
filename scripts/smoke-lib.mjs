import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist-lib')

for (const file of ['index.js', 'style.css', 'types/index.d.ts']) {
  assert.ok(existsSync(join(dist, file)), `${file} should be emitted`)
}

const library = await import(pathToFileURL(join(dist, 'index.js')).href)

for (const exportName of ['Button', 'Dialog', 'DialogClose', 'Input', 'Select', 'AppShell', 'Screen']) {
  assert.ok(exportName in library, `${exportName} should be exported from the package root`)
}

assert.equal('PressRipple' in library, false, 'PressRipple should remain internal')

const styleCss = readFileSync(join(dist, 'style.css'), 'utf8')

assert.match(
  styleCss,
  /:before,:after\{[^}]*box-sizing:border-box/,
  'style.css should ship a universal box-sizing: border-box reset so generic component <div> roots (e.g. SearchBar) do not overflow the box model',
)

const topBarContentRule = styleCss.match(/\.[a-z0-9_]+\{[^}]*grid-column:1\/-1[^}]*\}/)

assert.ok(
  topBarContentRule,
  'TopBar content slot should lay out multiple children side by side with display:flex instead of stacking block children',
)

assert.match(
  topBarContentRule[0],
  /display:flex/,
  'TopBar content slot should lay out multiple children side by side with display:flex instead of stacking block children',
)

assert.match(
  topBarContentRule[0],
  /gap:var\(--space-2\)/,
  'TopBar content slot should lay out multiple children side by side with display:flex instead of stacking block children',
)

assert.match(
  topBarContentRule[0],
  /width:100%/,
  'TopBar content slot should lay out multiple children side by side with display:flex instead of stacking block children',
)

const cardRootRule = styleCss.match(/_card_[a-z0-9_]+\{[^}]*flex-direction:column[^}]*display:flex[^}]*\}/)

assert.ok(
  cardRootRule,
  'Card root should use flex column layout instead of implicit grid max-content tracks',
)

assert.match(
  cardRootRule[0],
  /background:var\(--color-surface-raised\)/,
  'Card root should use flex column layout instead of implicit grid max-content tracks',
)

assert.match(
  cardRootRule[0],
  /border-radius:var\(--radius-lg\)/,
  'Card root should use flex column layout instead of implicit grid max-content tracks',
)

assert.ok(
  /_body_[a-z0-9_]+\{[^}]*flex-direction:column[^}]*display:flex[^}]*\}/.test(styleCss),
  'CardBody should use flex column layout instead of implicit grid max-content tracks',
)

assert.ok(
  !/\._card_[a-z0-9_]+\{[^}]*display:grid[^}]*\}/.test(styleCss),
  'no Card root rule should revert to display:grid'
)

console.log('library smoke passed')
