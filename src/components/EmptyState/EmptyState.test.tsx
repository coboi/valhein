import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders title, description, and action', () => {
    render(<EmptyState title="No projects" description="Create one to get started." action={<button type="button">Create</button>} />)

    expect(screen.getByRole('heading', { name: 'No projects' })).toBeInTheDocument()
    expect(screen.getByText('Create one to get started.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument()
  })
})
