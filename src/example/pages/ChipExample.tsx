import { XIcon } from '@phosphor-icons/react'
import { Chip } from '../../components/Chip'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ChipExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Chip">Compact filters and labels for mobile lists and search results.</ExampleHero>
      <ExampleSection title="Filter row" description="Selected state is explicit and still touch-friendly.">
        <div className={exampleStyles.chipRow}>
          <Chip selected>All</Chip>
          <Chip>Layout</Chip>
          <Chip>Feedback</Chip>
          <Chip trailingIcon={<XIcon aria-hidden="true" size={14} weight="bold" />}>Draft</Chip>
          <Chip disabled>Locked</Chip>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
