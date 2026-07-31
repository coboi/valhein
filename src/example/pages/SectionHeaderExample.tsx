import { Badge } from '../../components/Badge'
import { Card, CardBody } from '../../components/Card'
import { SectionHeader } from '../../components/SectionHeader'
import { ExampleHero, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function SectionHeaderExample() {
  return (
    <ExampleStack>
      <ExampleHero title="SectionHeader">Consistent labels for grouped component examples and product sections.</ExampleHero>
      <div className={exampleStyles.section}>
        <SectionHeader title="Topbar is quiet by default" description="Only the left, center, and right action slots matter." action={<Badge>Today</Badge>} />
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>Section headers align title, description, and optional action without creating another card.</p>
          </CardBody>
        </Card>
      </div>
    </ExampleStack>
  )
}
