import { Avatar } from '../../components/Avatar'
import { Card, CardBody } from '../../components/Card'
import { List, ListItem } from '../../components/List'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function AvatarExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Avatar">Compact identity markers for lists, cards, and account surfaces.</ExampleHero>
      <ExampleSection title="Fallback initials" description="Fallbacks keep rows readable without external images.">
        <Card>
          <CardBody>
            <List>
              <ListItem title="Product Review" description="Updated 12 min ago" leading={<Avatar fallback="PR" />} />
              <ListItem title="Design System" description="Ready for sync" leading={<Avatar fallback="DS" />} />
              <ListItem title="Operations" description="Queued tomorrow" leading={<Avatar fallback="OP" />} />
            </List>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
