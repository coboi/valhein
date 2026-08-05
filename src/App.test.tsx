import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { Button, Dialog, DialogClose, Input, Select } from './index'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-accent')
  document.documentElement.removeAttribute('data-theme')
})

describe('App', () => {
  it('renders the example catalog', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Component examples.' })).toBeInTheDocument()
    expect(screen.getByText('Valhein example')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Forms' })).toBeInTheDocument()
  })

  it('opens and closes a component example', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /ButtonPrimary/ }))
    expect(await screen.findByRole('heading', { name: 'Button' })).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    expect(screen.getByRole('heading', { name: 'Foundation' })).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Examples' }))
    expect(await screen.findByRole('heading', { name: 'Button' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Back to examples' }))
    expect(screen.getByRole('heading', { name: 'Component examples.' })).toBeInTheDocument()
  })

  it('opens and closes topbar search', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByPlaceholderText('Search examples')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close search' }))

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Search examples')).not.toBeInTheDocument()
    })
  })

  it('shows form validation feedback', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /InputText/ }))
    await user.click(await screen.findByRole('button', { name: 'Validate form' }))

    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('Email is required.')).toBeInTheDocument()
  })

  it('opens and closes the dialog overlay flow', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /DialogFocused/ }))
    await user.click(await screen.findByRole('button', { name: 'Try alert' }))
    expect(screen.getByRole('heading', { name: 'Archive pattern?' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: 'Archive pattern?' })).not.toBeInTheDocument()
    })
  })

  it('opens and closes the sheet overlay flow', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /SheetBottom/ }))
    await user.click(await screen.findByRole('button', { name: 'Open sheet' }))
    expect(screen.getByRole('heading', { name: 'Sheet' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close sheet' }))
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Close sheet' })).not.toBeInTheDocument()
    })
  })

  it('opens and closes the panel overlay flow', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /PanelSide/ }))
    await user.click(await screen.findByRole('button', { name: 'Open left panel' }))
    expect(screen.getByRole('heading', { name: 'App menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close panel' }))
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Close panel' })).not.toBeInTheDocument()
    })
  })

  it('applies a saved dark theme from settings', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    expect(screen.getByRole('heading', { name: 'Appearance' })).toBeInTheDocument()

    await user.click(screen.getByText('Dark'))

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    })
    expect(window.localStorage.getItem('valhein-theme')).toBe('dark')
  })

  it('applies a saved accent from settings', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('tab', { name: 'Settings' }))
    await user.click(screen.getByText('Orange'))

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute('data-accent', 'orange')
    })
    expect(window.localStorage.getItem('valhein-accent')).toBe('orange')
  })
})

describe('Button', () => {
  it('disables itself while loading', () => {
    render(<Button loading>Saving</Button>)

    const button = screen.getByRole('button', { name: 'Saving' })
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
  })
})

describe('Form controls', () => {
  it('associates input descriptions with the control', () => {
    render(<Input label="Email" description="Use your work email." />)

    const input = screen.getByRole('textbox', { name: 'Email' })
    const description = screen.getByText('Use your work email.')

    expect(input).toHaveAttribute('aria-describedby', description.id)
  })

  it('associates input errors with the control', () => {
    render(<Input label="Email" error="Email is required." />)

    const input = screen.getByRole('textbox', { name: 'Email' })
    const error = screen.getByText('Email is required.')

    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-errormessage', error.id)
  })

  it('associates native wrapper messages with the control', () => {
    render(
      <Select
        label="Accent"
        description="Choose an accent color."
        options={[{ value: 'standard', label: 'Standard' }]}
      />,
    )

    const select = screen.getByRole('combobox', { name: 'Accent' })
    const description = screen.getByText('Choose an accent color.')

    expect(select).toHaveAttribute('aria-describedby', description.id)
  })
})

describe('Public library entrypoint', () => {
  it('opens and closes dialog exports from the root entrypoint', async () => {
    const user = userEvent.setup()

    render(
      <Dialog
        trigger={<Button>Open library dialog</Button>}
        title="Library dialog"
        footer={(
          <DialogClose>
            <Button variant="secondary">Close library dialog</Button>
          </DialogClose>
        )}
      >
        Root exports render overlay components.
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open library dialog' }))
    expect(screen.getByRole('heading', { name: 'Library dialog' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close library dialog' }))
    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: 'Library dialog' })).not.toBeInTheDocument()
    })
  })
})
