import { GearSixIcon, HouseIcon, MagnifyingGlassIcon, StarIcon } from '@phosphor-icons/react'
import { Button } from '../../components/Button'
import { List, ListItem } from '../../components/List'
import { Panel, PanelClose } from '../../components/Panel'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function PanelExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Panel">Side drawer for app menus, navigation lists, and persistent action groups.</ExampleHero>
      <ExampleSection title="Side menu" description="Use Panel when the content reads like app chrome, not a transient bottom task.">
        <div className={exampleStyles.actionGroup}>
          <Panel
            title="App menu"
            description="Navigate across durable areas."
            trigger={<Button variant="secondary">Open left panel</Button>}
            footer={(
              <PanelClose>
                <Button variant="secondary">Done</Button>
              </PanelClose>
            )}
          >
            <List>
              <ListItem title="Home" description="Return to the overview" leading={<HouseIcon aria-hidden="true" size={22} />} />
              <ListItem title="Discover" description="Browse saved patterns" leading={<MagnifyingGlassIcon aria-hidden="true" size={22} />} />
              <ListItem title="Favorites" description="Pinned examples and flows" leading={<StarIcon aria-hidden="true" size={22} />} />
              <ListItem title="Settings" description="Theme and preferences" leading={<GearSixIcon aria-hidden="true" size={22} />} />
            </List>
          </Panel>
        </div>
      </ExampleSection>
      <ExampleSection title="Action panel" description="Right panels work well for contextual tools and secondary controls.">
        <div className={exampleStyles.actionGroup}>
          <Panel
            side="right"
            title="Tools"
            description="Keep supporting actions close without covering the whole task."
            trigger={<Button>Open right panel</Button>}
            footer={(
              <>
                <PanelClose><Button variant="ghost">Cancel</Button></PanelClose>
                <PanelClose><Button>Apply</Button></PanelClose>
              </>
            )}
          >
            <List>
              <ListItem title="Sort by priority" description="Highest signal first" />
              <ListItem title="Show archived" description="Include completed items" />
              <ListItem title="Compact rows" description="Fit more entries on small screens" />
            </List>
          </Panel>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
