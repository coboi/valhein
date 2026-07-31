import { DotsThreeIcon, MagnifyingGlassIcon, PlusIcon } from '@phosphor-icons/react'
import { IconButton } from '../../components/IconButton'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function IconButtonExample() {
  return (
    <ExampleStack>
      <ExampleHero title="IconButton">Circular icon actions with accessible labels and loading state.</ExampleHero>
      <ExampleSection title="Toolbar actions" description="Icon-only controls must always provide labels.">
        <div className={exampleStyles.actionGroup}>
          <IconButton label="Search"><MagnifyingGlassIcon aria-hidden="true" size={21} /></IconButton>
          <IconButton label="More" variant="raised"><DotsThreeIcon aria-hidden="true" size={22} weight="bold" /></IconButton>
          <IconButton label="Create" variant="raised"><PlusIcon aria-hidden="true" size={20} weight="bold" /></IconButton>
          <IconButton label="Syncing" loading />
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
