import { useState } from 'react'
import { Card, CardBody } from '../../components/Card'
import { Stepper } from '../../components/Stepper'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function StepperExample() {
  const [quantity, setQuantity] = useState(2)

  return (
    <ExampleStack>
      <ExampleHero title="Stepper">Increment and decrement values with large mobile tap targets.</ExampleHero>
      <ExampleSection title="Quantity" description="Clamp simple numeric values without opening a keyboard.">
        <Card>
          <CardBody>
            <Stepper description="Quantity stays between one and six." label="Quantity" max={6} min={1} onValueChange={setQuantity} value={quantity} />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
