import { useState } from 'react'
import { Card, CardBody } from '../../components/Card'
import { Slider } from '../../components/Slider'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function SliderExample() {
  const [volume, setVolume] = useState(72)

  return (
    <ExampleStack>
      <ExampleHero title="Slider">Single-thumb range control with optional visible value.</ExampleHero>
      <ExampleSection title="Volume" description="Slider works best for approximate numeric adjustment.">
        <Card>
          <CardBody>
            <Slider description="Drag or use keyboard controls." label="Volume" onValueChange={setVolume} showValue value={volume} />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
