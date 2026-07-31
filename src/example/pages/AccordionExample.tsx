import { Accordion } from '../../components/Accordion'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function AccordionExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Accordion">Disclosure rows for dense settings, FAQs, and compact help content.</ExampleHero>
      <ExampleSection title="Default open item" description="Use stable values so panels can preserve their state.">
        <Accordion
          defaultValue={['account']}
          items={[
            { value: 'account', title: 'Account details', content: 'Keep secondary copy hidden until it is useful.' },
            { value: 'billing', title: 'Billing controls', content: 'Accordion content follows the same rhythm as list rows.' },
            { value: 'danger', title: 'Danger zone', content: 'Use Dialog for confirmation; Accordion only reveals context.' },
          ]}
        />
      </ExampleSection>
    </ExampleStack>
  )
}
