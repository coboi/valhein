import { RadioGroup, RadioItem } from '../../components/RadioGroup'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function RadioGroupExample() {
  return (
    <ExampleStack>
      <ExampleHero title="RadioGroup">Single-choice rows with descriptions and large touch targets.</ExampleHero>
      <ExampleSection title="Density" description="Use radio rows when every option needs supporting copy.">
        <RadioGroup ariaLabel="Density" defaultValue="comfortable" name="density-example">
          <RadioItem label="Compact" description="Tighter rows for dense views." value="compact" />
          <RadioItem label="Comfortable" description="Larger touch area for mobile screens." value="comfortable" />
          <RadioItem label="Spacious" description="Reserved for low-density editorial views." value="spacious" />
        </RadioGroup>
      </ExampleSection>
    </ExampleStack>
  )
}
