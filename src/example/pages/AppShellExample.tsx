import { Card, CardBody } from '../../components/Card'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function AppShellExample() {
  return (
    <ExampleStack>
      <ExampleHero title="AppShell">The outer mobile frame that holds fixed chrome and scrollable screens.</ExampleHero>
      <ExampleSection title="Current shell" description="This example app itself is rendered inside AppShell.">
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>
              AppShell fixes the 100dvh frame. TopBar and BottomBar stay over the frame while Screen owns scrolling.
            </p>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
