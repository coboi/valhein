import { Card, CardBody } from '../../components/Card'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ScreenExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Screen">The scrollable region inside AppShell, padded for top and bottom overlays.</ExampleHero>
      <ExampleSection title="Current scroll area" description="This page is rendered inside Screen.">
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>
              Screen owns overflow and safe-area padding. Keep long content inside it so fixed chrome never scrolls away.
            </p>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
