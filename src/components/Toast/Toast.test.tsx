import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ToastProvider } from './Toast'
import { useToast } from './useToast'

function ToastTrigger() {
  const toast = useToast()

  return <button type="button" onClick={() => toast.add({ title: 'Saved', description: 'Draft stored.' })}>Show toast</button>
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
})
