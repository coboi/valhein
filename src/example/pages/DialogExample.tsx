import { Button } from '../../components/Button'
import { Dialog, DialogClose } from '../../components/Dialog'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function DialogExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Dialog">Focused overlay flows for confirmations and short decisions.</ExampleHero>
      <ExampleSection title="Standard dialog" description="Use footer actions instead of a top-right close button.">
        <div className={exampleStyles.actionGroup}>
          <Dialog
            title="Save changes?"
            description="This keeps the user in a focused decision flow."
            trigger={<Button>Open dialog</Button>}
            footer={(
              <>
                <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
                <DialogClose><Button>Save</Button></DialogClose>
              </>
            )}
          >
            Dialog content can include short supporting copy or a compact form.
          </Dialog>
        </div>
      </ExampleSection>
      <ExampleSection title="Alert variant" description="Use alert dialogs for destructive confirmation.">
        <div className={exampleStyles.actionGroup}>
          <Dialog
            title="Archive pattern?"
            description="This action can be undone from the activity log."
            trigger={<Button variant="secondary">Try alert</Button>}
            variant="alert"
            footer={(
              <>
                <DialogClose><Button variant="ghost">Cancel</Button></DialogClose>
                <DialogClose><Button>Archive</Button></DialogClose>
              </>
            )}
          />
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
