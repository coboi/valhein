import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ToastProvider } from './Toast'
import { useToast } from './useToast'

function ToastTrigger() {
  const toast = useToast()

  return <button type="button" onClick={() => toast.add({ title: 'Saved', description: 'Draft stored.' })}>Show toast</button>
}

function ToastQueue() {
  const toast = useToast()

  return (
    <>
      <button type="button" onClick={() => toast.add({ title: 'Toast 1' })}>Add toast 1</button>
      <button type="button" onClick={() => toast.add({ title: 'Toast 2' })}>Add toast 2</button>
      <button type="button" onClick={() => toast.add({ title: 'Toast 3' })}>Add toast 3</button>
    </>
  )
}

function DangerToast() {
  const toast = useToast()

  return <button type="button" onClick={() => toast.add({ title: 'Deleted', data: { variant: 'danger' } })}>Add danger toast</button>
}

function toastRoot(title: string): HTMLElement {
  const root = screen.getByText(title).closest<HTMLElement>('[role="dialog"]')
  if (!root) {
    throw new Error(`No toast root found for ${title}`)
  }
  return root
}

describe('Toast', () => {
  it('renders toasts and closes them', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Show toast' }))
    expect(await screen.findByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Draft stored.')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close toast'))
    await waitFor(() => {
      expect(screen.queryByText('Saved')).not.toBeInTheDocument()
    })
  })

  it('limits the oldest toast at capacity', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <ToastQueue />
      </ToastProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Add toast 1' }))
    await user.click(screen.getByRole('button', { name: 'Add toast 2' }))
    await user.click(screen.getByRole('button', { name: 'Add toast 3' }))

    expect(await screen.findByText('Toast 3')).toBeInTheDocument()
    expect(toastRoot('Toast 1')).toHaveAttribute('data-limited')
    expect(toastRoot('Toast 1')).toHaveAttribute('inert')
    expect(toastRoot('Toast 2')).not.toHaveAttribute('data-limited')
    expect(toastRoot('Toast 3')).not.toHaveAttribute('data-limited')
  })

  it('surfaces the danger variant on the root', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <DangerToast />
      </ToastProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Add danger toast' }))
    expect(await screen.findByText('Deleted')).toBeInTheDocument()

    expect(toastRoot('Deleted')).toHaveAttribute('data-type', 'danger')
  })
})
