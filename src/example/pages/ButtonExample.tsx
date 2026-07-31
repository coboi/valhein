import { PlusIcon } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ButtonExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Button">Primary actions, secondary actions, ghost actions, and loading states.</ExampleHero>
      <ExampleSection title="Action row" description="Buttons preserve a mobile-sized hit target across variants.">
        <div className={exampleStyles.actionGroup}>
          <Button leadingIcon={<PlusIcon aria-hidden="true" size={17} weight="bold" />}>New item</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </ExampleSection>
      <ExampleSection title="Loading" description="Loading buttons are disabled and expose busy state.">
        <div className={exampleStyles.actionGroup}>
          <Button loading>Saving</Button>
          <Button loading variant="secondary">Syncing</Button>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
