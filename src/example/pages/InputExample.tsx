import { useState } from 'react'
import { Button } from '../../components/Button'
import { Card, CardBody, CardFooter } from '../../components/Card'
import { Checkbox } from '../../components/Checkbox'
import { Input, Textarea } from '../../components/Input'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function InputExample() {
  const [values, setValues] = useState({ email: '', name: '', notes: '' })
  const [errors, setErrors] = useState({ email: '', name: '' })

  function validateForm() {
    const nextErrors = { email: '', name: '' }

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Use a valid email address.'
    }

    setErrors(nextErrors)
  }

  return (
    <ExampleStack>
      <ExampleHero title="Input">Solid text fields with focused, invalid, required, and multiline states.</ExampleHero>
      <ExampleSection title="Form validation" description="Errors are associated with the matching controls.">
        <Card>
          <CardBody>
            <ExampleStack>
              <Input
                error={errors.name}
                label="Name"
                onChange={(event) => {
                  setValues((currentValues) => ({ ...currentValues, name: event.target.value }))
                  setErrors((currentErrors) => ({ ...currentErrors, name: '' }))
                }}
                placeholder="Valhein"
                required
                value={values.name}
              />
              <Input
                error={errors.email}
                label="Email"
                onChange={(event) => {
                  setValues((currentValues) => ({ ...currentValues, email: event.target.value }))
                  setErrors((currentErrors) => ({ ...currentErrors, email: '' }))
                }}
                placeholder="you@example.com"
                required
                type="email"
                value={values.email}
              />
              <Textarea
                label="Notes"
                onChange={(event) => setValues((currentValues) => ({ ...currentValues, notes: event.target.value }))}
                placeholder="Write a short note"
                value={values.notes}
              />
              <Checkbox defaultChecked label="Remember this device" description="Use checkbox rows for secondary choices." />
            </ExampleStack>
          </CardBody>
          <CardFooter>
            <Button variant="secondary" onClick={validateForm}>Validate form</Button>
          </CardFooter>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
