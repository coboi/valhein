import { Button } from '../../components/Button'
import { Card, CardBody } from '../../components/Card'
import { Tooltip } from '../../components/Tooltip'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function TooltipExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Tooltip">Hover or focus a control to reveal a short explanation.</ExampleHero>
      <ExampleSection title="Simple" description="Wraps a trigger with a text popup.">
        <Card>
          <CardBody>
            <Tooltip content="Opens the settings drawer.">
              <Button variant="secondary">Settings</Button>
            </Tooltip>
          </CardBody>
        </Card>
      </ExampleSection>
      <ExampleSection title="Rich content" description="Touch devices show tooltips on long-press.">
        <Card>
          <CardBody>
            <Tooltip content="Deletes the project and its history.">
              <Button variant="ghost">Delete</Button>
            </Tooltip>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
