import { useState } from 'react'
import { Card, CardBody } from '../../components/Card'
import { DatePicker } from '../../components/DatePicker'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function DatePickerExample() {
  const [date, setDate] = useState('2026-07-15')

  return (
    <ExampleStack>
      <ExampleHero title="DatePicker">Native mobile date input wrapped in project field styling.</ExampleHero>
      <ExampleSection title="Reminder date" description="Uses the browser and OS picker on mobile.">
        <Card>
          <CardBody>
            <DatePicker
              description="Pick a date inside the allowed project range."
              label="Reminder date"
              max="2026-12-31"
              min="2026-01-01"
              onValueChange={setDate}
              required
              value={date}
            />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
