import { Card, CardBody } from '../../components/Card'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function BottomBarExample() {
  return (
    <ExampleStack>
      <ExampleHero title="BottomBar">Persistent mobile navigation with large tap targets and selected state.</ExampleHero>
      <ExampleSection title="Live component" description="The example app navigation at the bottom of the screen is the BottomBar component.">
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>
              BottomBar is positioned against the AppShell frame, so this page documents the live control instead of nesting a second absolute bar.
            </p>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
