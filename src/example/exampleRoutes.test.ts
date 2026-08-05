import { describe, expect, it } from 'vitest'
import * as library from '../index'
import { exampleRoutes } from './exampleRoutes'

const routeIds = new Set(exampleRoutes.map((route) => route.id))

const compositeExports = new Set([
  'CheckboxGroup',
  'DialogClose',
  'PanelClose',
  'ListItem',
  'RadioItem',
  'CardHeader',
  'CardBody',
  'CardFooter',
  'Textarea',
  'Spinner',
  'SkeletonRow',
  'ToastProvider',
  'useToast',
  'useAppearance',
])

function toRouteId(name: string) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

describe('demo parity', () => {
  it('gives every standalone library export a demo page', () => {
    const missing = Object.keys(library)
      .filter((name) => !compositeExports.has(name))
      .map((name) => ({ name, routeId: toRouteId(name) }))
      .filter(({ routeId }) => !routeIds.has(routeId))

    expect(missing).toEqual([])
  })
})
