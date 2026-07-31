import { Badge } from '../../components/Badge'
import { Card, CardBody } from '../../components/Card'
import { List, ListItem } from '../../components/List'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function BadgeExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Badge">Small status marks for counts, labels, and priority hints.</ExampleHero>
      <ExampleSection title="Variants" description="Reserve solid and danger for stronger status.">
        <Card>
          <CardBody>
            <List>
              <ListItem title="Neutral" description="Default status" trailing={<Badge>Beta</Badge>} />
              <ListItem title="Solid" description="Prominent state" trailing={<Badge variant="solid">Live</Badge>} />
              <ListItem title="Danger" description="Urgent count" trailing={<Badge variant="danger">3</Badge>} />
            </List>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
