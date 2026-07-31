import { SlidersHorizontalIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Card, CardBody } from '../../components/Card'
import { IconButton } from '../../components/IconButton'
import { SearchBar } from '../../components/SearchBar'
import { ExampleHero, ExampleSection, ExampleStack } from '../ExampleFrame'
import { exampleStyles } from '../exampleStyles'

export function SearchBarExample() {
  const [query, setQuery] = useState('')

  return (
    <ExampleStack>
      <ExampleHero title="SearchBar">Search input with a clear action and optional trailing slot.</ExampleHero>
      <ExampleSection title="Filterable search" description="Keep filters close to the search field on mobile.">
        <SearchBar
          aria-label="Search patterns"
          onValueChange={setQuery}
          placeholder="Search patterns"
          trailing={
            <IconButton label="Filter">
              <SlidersHorizontalIcon aria-hidden="true" size={20} weight="regular" />
            </IconButton>
          }
          value={query}
        />
        <Card>
          <CardBody>
            <p className={exampleStyles.bodyText}>Current query: {query || 'Empty'}</p>
          </CardBody>
        </Card>
      </ExampleSection>
    </ExampleStack>
  )
}
