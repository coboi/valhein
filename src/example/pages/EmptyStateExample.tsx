import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { EmptyState } from '../../components/EmptyState'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function EmptyStateExample() {
  return (
    <ExampleStack>
      <ExampleHero title="EmptyState">Useful blank states with a title, description, and optional action.</ExampleHero>
      <ExampleSection title="No data" description="Keep empty screens calm and actionable.">
        <Card>
          <EmptyState title="Nothing queued" description="Create the first item to start building this workflow." action={<Button variant="secondary">Create item</Button>} />
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
