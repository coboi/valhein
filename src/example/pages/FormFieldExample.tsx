import { Card, CardBody } from '../../components/Card'
import { FormField } from '../../components/FormField'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function FormFieldExample() {
  return (
    <ExampleStack>
      <ExampleHero title="FormField">Shared label, description, and error chrome for custom controls.</ExampleHero>
      <ExampleSection title="Custom control" description="Wrap bespoke UI without adding extra behavior.">
        <Card>
          <CardBody>
            <FormField description="FormField can label any custom surface." label="Readonly field">
              <div className={exampleStyles.mockField}>Readonly surface</div>
            </FormField>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
