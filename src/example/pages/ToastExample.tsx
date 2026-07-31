import { Button } from '../../components/Button'
import { useToast } from '../../components/Toast'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ToastExample() {
  const toast = useToast()

  return (
    <ExampleStack>
      <ExampleHero title="Toast">Short feedback that floats above the bottom navigation.</ExampleHero>
      <ExampleSection title="Saved feedback" description="Use toasts for non-blocking confirmation.">
        <div className={exampleStyles.actionGroup}>
          <Button variant="secondary" onClick={() => toast.add({ title: 'Saved', description: 'Your changes are ready.' })}>Show toast</Button>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
