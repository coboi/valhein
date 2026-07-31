import { FunnelIcon, StarIcon, TrayIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Avatar } from '../../components/Avatar'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { ChoiceDialog } from '../../components/ChoiceDialog'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ChoiceDialogExample() {
  const [workspace, setWorkspace] = useState('team')
  const [filters, setFilters] = useState(['unread'])

  return (
    <ExampleStack>
      <ExampleHero title="ChoiceDialog">Dialog selection for rich options that need icons, badges, images, or supporting copy.</ExampleHero>
      <ExampleSection title="Single choice" description="Use RadioItem inside the dialog when one option can be active.">
        <div className={exampleStyles.actionGroup}>
          <ChoiceDialog
            title="Choose workspace"
            description="Switch where new items will be created."
            trigger={<Button variant="secondary">Workspace: {workspace === 'team' ? 'Team' : 'Personal'}</Button>}
            value={workspace}
            onValueChange={setWorkspace}
            options={[
              {
                value: 'personal',
                label: 'Personal',
                description: 'Private drafts and experiments.',
                leading: <Avatar fallback="ME" size="sm" />,
              },
              {
                value: 'team',
                label: 'Team',
                description: 'Shared workflows and review queues.',
                leading: <Avatar fallback="TM" size="sm" />,
                trailing: <Badge>Active</Badge>,
              },
            ]}
          />
        </div>
      </ExampleSection>
      <ExampleSection title="Multiple choice" description="Use Checkbox rows when the user can apply several filters at once.">
        <div className={exampleStyles.actionGroup}>
          <ChoiceDialog
            type="multiple"
            title="Choose filters"
            description="Apply the filters together after reviewing the list."
            trigger={<Button>Filters: {filters.length}</Button>}
            value={filters}
            onValueChange={setFilters}
            options={[
              {
                value: 'unread',
                label: 'Unread',
                description: 'Only items with new activity.',
                leading: <TrayIcon aria-hidden="true" size={22} />,
              },
              {
                value: 'starred',
                label: 'Starred',
                description: 'Pinned work that needs quick access.',
                leading: <StarIcon aria-hidden="true" size={22} />,
              },
              {
                value: 'priority',
                label: 'Priority',
                description: 'Tasks marked for the next pass.',
                leading: <FunnelIcon aria-hidden="true" size={22} />,
                trailing: <Badge variant="danger">Hot</Badge>,
              },
            ]}
          />
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
