import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { Badge } from '../../components/Badge'
import { Card } from '../../components/Card'
import { EmptyState } from '../../components/EmptyState'
import { List, ListItem } from '../../components/List'
import { SectionHeader } from '../../components/SectionHeader'
import { ExampleHero, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'
import type { ExampleCategory, ExampleRoute } from '../exampleTypes'

const categoryOrder: ExampleCategory[] = ['Actions', 'Forms', 'Feedback', 'Data Display', 'Layout', 'Navigation']

export function HomeExample({
  onOpenRoute,
  query,
  routes,
}: {
  onOpenRoute: (routeId: string) => void
  query: string
  routes: ExampleRoute[]
}) {
  const normalizedQuery = query.trim().toLowerCase()
  const filteredRoutes = normalizedQuery
    ? routes.filter((route) => `${route.title} ${route.description} ${route.category}`.toLowerCase().includes(normalizedQuery))
    : routes

  return (
    <ExampleStack>
      <ExampleHero title="Component examples.">
        Browse Valhein components the way a kitchen sink app works: one focused screen per primitive,
        with mobile chrome and real interaction states kept intact.
      </ExampleHero>

      <div className={exampleStyles.grid}>
        <Card compact>
          <div className={exampleStyles.stat}>
            <span className={exampleStyles.statValue}>{routes.length}</span>
            <span className={exampleStyles.cardMeta}>Examples</span>
          </div>
        </Card>
        <Card compact>
          <div className={exampleStyles.stat}>
            <span className={exampleStyles.statValue}>{categoryOrder.length}</span>
            <span className={exampleStyles.cardMeta}>Groups</span>
          </div>
        </Card>
      </div>

      {filteredRoutes.length === 0 ? (
        <Card>
          <EmptyState
            title="No examples found"
            description="Try a component name like Button, Dialog, Input, or Toast."
            action={<MagnifyingGlassIcon aria-hidden="true" size={24} weight="regular" />}
          />
        </Card>
      ) : (
        categoryOrder.map((category) => {
          const routesInCategory = filteredRoutes.filter((route) => route.category === category)

          if (routesInCategory.length === 0) {
            return null
          }

          return (
            <div className={exampleStyles.section} key={category}>
              <SectionHeader title={category} description={`${routesInCategory.length} examples`} />
              <List>
                {routesInCategory.map((route) => (
                  <ListItem
                    key={route.id}
                    title={route.title}
                    description={route.description}
                    leading={<span className={exampleStyles.exampleIcon}>{route.title.slice(0, 2)}</span>}
                    trailing={<Badge>{route.category}</Badge>}
                    onClick={() => onOpenRoute(route.id)}
                  />
                ))}
              </List>
            </div>
          )
        })
      )}
    </ExampleStack>
  )
}
