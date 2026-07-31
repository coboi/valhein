import { Card, CardBody } from '../../components/Card'
import { Skeleton, SkeletonRow } from '../../components/Skeleton'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function SkeletonExample() {
  return (
    <ExampleStack>
      <ExampleHero title="Skeleton">Static loading placeholders for card and list layouts.</ExampleHero>
      <ExampleSection title="Loading card" description="Use placeholders that match the eventual content rhythm.">
        <Card>
          <CardBody>
            <ExampleStack>
              <Skeleton />
              <SkeletonRow />
              <SkeletonRow />
            </ExampleStack>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
