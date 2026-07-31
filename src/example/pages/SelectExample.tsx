import { useState } from 'react'
import { Card, CardBody } from '../../components/Card'
import { Select } from '../../components/Select'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function SelectExample() {
  const [density, setDensity] = useState('comfortable')

  return (
    <ExampleStack>
      <ExampleHero title="Select">Native single-choice control for compact text-only form values.</ExampleHero>
      <ExampleSection title="Density" description="Use ChoiceDialog instead when options need icons, media, badges, or long descriptions.">
        <Card>
          <CardBody>
            <Select
              description="Choose the row rhythm for this screen."
              label="Density"
              onValueChange={setDensity}
              options={[
                { value: 'compact', label: 'Compact' },
                { value: 'comfortable', label: 'Comfortable' },
                { value: 'spacious', label: 'Spacious', disabled: true },
              ]}
              value={density}
            />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
