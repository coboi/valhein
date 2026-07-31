import { DotsThreeIcon } from '@phosphor-icons/react'
import { IconButton } from '../../components/IconButton'
import { Menu } from '../../components/Menu'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function MenuExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Menu">Compact overflow actions for contextual commands.</ExampleHero>
      <ExampleSection title="Overflow" description="Separate destructive actions from regular actions.">
        <div className={exampleStyles.actionGroup}>
          <Menu
            trigger={
              <IconButton label="More" variant="raised">
                <DotsThreeIcon aria-hidden="true" size={22} weight="bold" />
              </IconButton>
            }
            items={[{ label: 'New item' }, { label: 'Share' }, { type: 'separator' }, { label: 'Archive', destructive: true }]}
          />
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
