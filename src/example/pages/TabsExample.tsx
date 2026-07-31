import { List, ListItem } from '../../components/List'
import { Tabs } from '../../components/Tabs'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function TabsExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Tabs">Segmented navigation for switching between nearby views.</ExampleHero>
      <ExampleSection title="Pattern filter" description="Use panels when the tab content belongs together.">
        <Tabs
          ariaLabel="Pattern filter"
          defaultValue="all"
          items={[
            {
              value: 'all',
              label: 'All',
              content: (
                <List>
                  <ListItem title="Actions" description="Buttons, menus, and confirmations" />
                  <ListItem title="Lists" description="Grouped rows with slots" />
                </List>
              ),
            },
            { value: 'layout', label: 'Layout', content: <List><ListItem title="Cards" description="Sections with header, body, and footer" /></List> },
            { value: 'feedback', label: 'Feedback', content: <List><ListItem title="Alerts" description="Persistent page feedback" /></List> },
          ]}
        />
      </ExampleSection>
    </ExampleStack>
  )
}
