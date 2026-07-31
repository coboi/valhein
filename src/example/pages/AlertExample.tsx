import { CheckIcon } from '@phosphor-icons/react'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { ExampleHero, ExampleStack } from '../ExampleFrame'

export function AlertExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Alert">Inline feedback that stays in the page instead of interrupting the task.</ExampleHero>
      <Alert
        title="Draft saved"
        description="Use neutral alerts for persistent status that should remain visible."
        action={<Button leadingIcon={<CheckIcon aria-hidden="true" size={16} weight="bold" />} variant="ghost">Review</Button>}
      />
      <Alert title="Payment failed" description="Danger alerts use alert semantics for urgent feedback." variant="danger" />
    </ExampleStack>
  )
}
