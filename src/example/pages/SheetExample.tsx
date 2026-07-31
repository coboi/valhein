import { Button } from '../../components/Button'
import { Sheet } from '../../components/Sheet'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function SheetExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Sheet">Bottom drawer for focused mobile tasks and short action groups.</ExampleHero>
      <ExampleSection title="Action sheet" description="Use Sheet when actions need more context than a menu.">
        <div className={exampleStyles.actionGroup}>
          <Sheet title="Sheet" description="Use this bottom treatment for focused actions." trigger={<Button>Open sheet</Button>}>
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="ghost">Another action</Button>
          </Sheet>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
