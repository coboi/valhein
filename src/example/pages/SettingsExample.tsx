import { Card, CardBody } from '../../components/Card'
import { Select } from '../../components/Select'
import { ExampleSection, ExampleStack } from '../ExampleFrame'
import type { AppearanceSettings } from '../exampleTypes'

export function SettingsExample({
  accentPreference,
  onAccentPreferenceChange,
  onThemePreferenceChange,
  themePreference,
}: AppearanceSettings) {
  return (
    <ExampleStack>
      <ExampleSection title="Appearance" description="Choose a color mode and accent color for primary actions.">
        <Card>
          <CardBody>
            <Select
              label="Theme"
              description="Match the OS or pick a fixed color scheme."
              value={themePreference}
              onValueChange={(next) => {
                if (next === 'system' || next === 'light' || next === 'dark') {
                  onThemePreferenceChange(next)
                }
              }}
              options={[
                { value: 'system', label: 'System' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
            />
            <Select
              label="Accent"
              description="Applied to primary buttons and selected states."
              value={accentPreference}
              onValueChange={(next) => {
                if (next === 'standard' || next === 'blue' || next === 'orange' || next === 'green' || next === 'purple') {
                  onAccentPreferenceChange(next)
                }
              }}
              options={[
                { value: 'standard', label: 'Standard' },
                { value: 'blue', label: 'Blue' },
                { value: 'orange', label: 'Orange' },
                { value: 'green', label: 'Green' },
                { value: 'purple', label: 'Purple' },
              ]}
            />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
