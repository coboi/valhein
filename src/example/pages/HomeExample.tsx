import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { EmptyState } from '../../components/EmptyState'
import { List, ListItem } from '../../components/List'
import { SectionHeader } from '../../components/SectionHeader'
import { ExampleStack } from '../ExampleFrame'
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
