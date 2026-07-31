import { Checkbox, CheckboxGroup } from '../../components/Checkbox'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function CheckboxExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Checkbox">Boolean choices with row labels and supporting copy.</ExampleHero>
      <ExampleSection title="Form choices" description="Checkbox rows work well for secondary form decisions.">
        <CheckboxGroup>
          <Checkbox defaultChecked label="Remember this device" description="Keep the session active on this browser." />
          <Checkbox label="Send summary" description="Email a receipt after the action completes." />
          <Checkbox disabled label="Locked option" description="Disabled rows still explain why they exist." />
        </CheckboxGroup>
      </ExampleSection>
    </ExampleStack>
  )
}
