import { Card, CardBody } from '../../components/Card'
import { Divider } from '../../components/Divider'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function DividerExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Divider">Quiet separators for grouping related content without adding a new surface.</ExampleHero>
      <ExampleSection title="Content split" description="Dividers work best inside existing cards and lists.">
        <Card>
          <CardBody>
            <ExampleStack>
              <p className={exampleStyles.bodyText}>Primary details stay first.</p>
              <Divider />
              <p className={exampleStyles.bodyText}>Secondary context follows after a subtle boundary.</p>
            </ExampleStack>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
