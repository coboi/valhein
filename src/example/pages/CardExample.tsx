import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Card, CardBody, CardFooter, CardHeader } from '../../components/Card'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function CardExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Card">Grouped content with optional header, body, footer, and compact mode.</ExampleHero>
      <ExampleSection title="Structured card" description="Use sections when the content has distinct actions.">
        <Card>
          <CardHeader title="Inbox triage" description="A compact queue with one clear next action." action={<Badge variant="solid">Live</Badge>} />
          <CardBody>
            <p className={exampleStyles.bodyText}>Card content sits on a quiet surface with a clear boundary.</p>
          </CardBody>
          <CardFooter>
            <Button variant="secondary">Snooze</Button>
            <Button>Process</Button>
          </CardFooter>
        </Card>
      </ExampleSection>
      <ExampleSection title="Compact stats" description="Compact cards remove extra internal structure.">
        <div className={exampleStyles.grid}>
          <Card compact><div className={exampleStyles.stat}><span className={exampleStyles.statValue}>20</span><span className={exampleStyles.cardMeta}>Patterns</span></div></Card>
          <Card compact><div className={exampleStyles.stat}><span className={exampleStyles.statValue}>3</span><span className={exampleStyles.cardMeta}>Modes</span></div></Card>
        </div>
      </ExampleSection>
    </ExampleStack>
  )
}
