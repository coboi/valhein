import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
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

console.log('library smoke passed')
