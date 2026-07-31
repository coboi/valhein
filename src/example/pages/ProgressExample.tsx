import { Card, CardBody } from '../../components/Card'
import { Divider } from '../../components/Divider'
import { Progress, Spinner } from '../../components/Progress'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function ProgressExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Progress">Deterministic, indeterminate, and compact loading states.</ExampleHero>
      <ExampleSection title="Loading states" description="Use labels for longer work and spinners for compact status.">
        <Card>
          <CardBody>
            <ExampleStack>
              <Progress label="Upload" value={64} />
              <Divider />
              <Progress label="Syncing" />
              <div className={exampleStyles.loadingRow}>
                <Spinner size="sm" />
                <span className={exampleStyles.bodyText}>Preparing preview</span>
              </div>
            </ExampleStack>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
