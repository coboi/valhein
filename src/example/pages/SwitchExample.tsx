import { List, ListItem } from '../../components/List'
import { Switch } from '../../components/Switch'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function SwitchExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Switch">Immediate on/off settings that do not need a save button.</ExampleHero>
      <ExampleSection title="Preferences" description="Pair switches with concise labels and descriptions.">
        <List>
          <ListItem title="Notifications" description="Push, email, and in-app alerts" trailing={<Switch defaultChecked aria-label="Toggle notifications" />} />
          <ListItem title="Archive stale prompts" description="Clean up older drafts" trailing={<Switch aria-label="Toggle archive stale prompts" />} />
        </List>
      </ExampleSection>
    </ExampleStack>
  )
}
