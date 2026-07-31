import { DotsThreeIcon } from '@phosphor-icons/react'
import { Accordion } from '../../components/Accordion'
import { Avatar } from '../../components/Avatar'
import { Badge } from '../../components/Badge'
import { IconButton } from '../../components/IconButton'
import { List, ListItem } from '../../components/List'
import { Menu } from '../../components/Menu'
import { RadioGroup, RadioItem } from '../../components/RadioGroup'
import { Switch } from '../../components/Switch'
import { ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'
import type { AppearanceSettings } from '../exampleTypes'

export function SettingsExample({
  accentPreference,
  onAccentPreferenceChange,
  onThemePreferenceChange,
  themePreference,
}: AppearanceSettings) {
  return (
    <ExampleStack>
      <ExampleSection title="Foundation" description="Solid surfaces, clear borders, large tap targets, and internal scrolling.">
        <List>
          <ListItem title="Account" description="Profile and display preferences" leading={<Avatar fallback="VH" />} />
          <ListItem
            title="Notifications"
            description="Push, email, and in-app alerts"
            trailing={<Switch defaultChecked aria-label="Toggle notifications" />}
          />
          <ListItem title="Unread alerts" description="New activity since your last visit" trailing={<Badge variant="danger">3</Badge>} />
          <ListItem title="Privacy" description="Control visibility and access" trailing={<Badge>Beta</Badge>} />
        </List>
      </ExampleSection>

      <ExampleSection title="Appearance" description="Choose a color mode and a reserved accent for important actions.">
        <RadioGroup
          ariaLabel="Theme"
          name="theme"
          value={themePreference}
          onValueChange={(nextPreference) => {
            if (nextPreference === 'system' || nextPreference === 'light' || nextPreference === 'dark') {
              onThemePreferenceChange(nextPreference)
            }
          }}
        >
          <RadioItem label="System" description="Match the current OS color scheme." value="system" />
          <RadioItem label="Light" description="Use the bright monochrome palette." value="light" />
          <RadioItem label="Dark" description="Use the low-light monochrome palette." value="dark" />
        </RadioGroup>
        <RadioGroup
          ariaLabel="Accent"
          name="accent"
          value={accentPreference}
          onValueChange={(nextPreference) => {
            if (
              nextPreference === 'standard' ||
              nextPreference === 'blue' ||
              nextPreference === 'orange' ||
              nextPreference === 'green' ||
              nextPreference === 'purple'
            ) {
              onAccentPreferenceChange(nextPreference)
            }
          }}
        >
          <RadioItem label="Standard" description="Keep actions in the monochrome palette." value="standard" />
          <RadioItem label="Blue" description="Use a cool accent for primary actions." value="blue" />
          <RadioItem label="Orange" description="Use a warm accent for primary actions." value="orange" />
          <RadioItem label="Green" description="Use a steady accent for primary actions." value="green" />
          <RadioItem label="Purple" description="Use a vivid accent for primary actions." value="purple" />
        </RadioGroup>
      </ExampleSection>

      <ExampleSection title="Settings menu" description="A compact overflow action remains available from the top bar pattern.">
        <div className={exampleStyles.actionGroup}>
          <Menu
            trigger={
              <IconButton label="Open settings menu" variant="raised">
                <DotsThreeIcon aria-hidden="true" size={22} weight="bold" />
              </IconButton>
            }
            items={[{ label: 'Account' }, { label: 'Notifications' }, { type: 'separator' }, { label: 'Sign out' }]}
          />
        </div>
      </ExampleSection>

      <ExampleSection title="Accordion" description="Disclosure rows for compact help content.">
        <Accordion
          defaultValue={['account']}
          items={[
            {
              value: 'account',
              title: 'Account details',
              content: 'Keep low-priority settings collapsed until the user asks for them.',
            },
            {
              value: 'billing',
              title: 'Billing controls',
              content: 'Use the same row rhythm as List, but reserve extra copy for the panel.',
            },
            {
              value: 'danger',
              title: 'Danger zone',
              content: 'Confirmation still belongs in Dialog; Accordion only reveals context.',
            },
          ]}
        />
      </ExampleSection>
    </ExampleStack>
  )
}
