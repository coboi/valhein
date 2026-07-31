import { Card, CardBody } from '../../components/Card'
import { FileUpload } from '../../components/FileUpload'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'

export function FileUploadExample() {
  return (
    <ExampleStack>
      <ExampleHero title="FileUpload">Native file picker styled like the rest of the form controls.</ExampleHero>
      <ExampleSection title="Attachment" description="Use native upload behavior for platform reliability.">
        <Card>
          <CardBody>
            <FileUpload accept="image/*,.pdf" description="Upload an image or PDF attachment." label="Attachment" />
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
