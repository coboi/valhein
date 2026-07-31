import { DotsThreeIcon, MagnifyingGlassIcon } from '@phosphor-icons/react'
import { Card, CardBody } from '../../components/Card'
import { IconButton } from '../../components/IconButton'
import { Menu } from '../../components/Menu'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function TopBarExample() {
  return (
    <ExampleStack>
      <ExampleHero title="TopBar">Fixed top app chrome with left, center, right, and full-width content modes.</ExampleHero>
      <ExampleSection title="Current top bar" description="This screen itself is controlled by TopBar.">
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>
              Use left for back navigation, center for the title, and right for grouped actions. The content slot replaces all slots for states like search.
            </p>
          </CardBody>
        </Card>
      </ExampleSection>
      <ExampleSection title="Common actions" description="The action group keeps adjacent icon buttons visually connected.">
        <Card>
          <CardBody>
            <div className={exampleStyles.rowAction}>
              <IconButton label="Search"><MagnifyingGlassIcon aria-hidden="true" size={21} /></IconButton>
              <Menu
                trigger={<IconButton label="More" variant="raised"><DotsThreeIcon aria-hidden="true" size={22} weight="bold" /></IconButton>}
                items={[{ label: 'New item' }, { label: 'Share' }, { type: 'separator' }, { label: 'Archive', destructive: true }]}
              />
            </div>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
