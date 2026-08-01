import { Avatar } from '../../components/Avatar'
import { Badge } from '../../components/Badge'
import { List, ListItem } from '../../components/List'
import { Switch } from '../../components/Switch'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function ListExample() {
  return (
    <ExampleStack>
      <ExampleHero title="List">Grouped rows with leading content, descriptions, and trailing controls.</ExampleHero>
      <ExampleSection title="Inbox triage" description="Rows stay compact while exposing priority and action state.">
        <List>
          <ListItem onClick={() => {}} title="Review onboarding copy" description="Product · 12 min ago" leading={<Avatar fallback="PR" />} trailing={<Badge variant="danger">High</Badge>} />
          <ListItem onClick={() => {}} title="Sync design tokens" description="System · Today" leading={<Avatar fallback="DS" />} trailing={<Badge>Ready</Badge>} />
          <ListItem onClick={() => {}} title="Archive stale prompts" description="Ops · Tomorrow" leading={<Avatar fallback="OP" />} trailing={<Switch aria-label="Mark archive task enabled" />} />
        </List>
      </ExampleSection>
    </ExampleStack>
  )
}
