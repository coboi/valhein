import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

describe('Card', () => {
  it('renders header, body, footer, and actions', () => {
    render(
      <Card>
        <CardHeader title="Billing" description="Manage invoices." action={<button type="button">Edit</button>} />
        <CardBody>Current plan</CardBody>
        <CardFooter>Renews tomorrow</CardFooter>
      </Card>,
    )

    expect(screen.getByRole('heading', { name: 'Billing' })).toBeInTheDocument()
    expect(screen.getByText('Manage invoices.')).toBeInTheDocument()
    expect(screen.getByText('Current plan')).toBeInTheDocument()
    expect(screen.getByText('Renews tomorrow')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
  })
})
