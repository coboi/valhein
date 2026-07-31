import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { FileUpload } from './FileUpload'

describe('FileUpload', () => {
  it('uploads files and renders the selected summary', async () => {
    const user = userEvent.setup()
    const handleFilesChange = vi.fn()
    const file = new File(['receipt'], 'receipt.txt', { type: 'text/plain' })
    render(<FileUpload label="Receipt" onFilesChange={handleFilesChange} />)

    await user.upload(screen.getByLabelText('Receipt'), file)

    expect(screen.getByText('receipt.txt')).toBeInTheDocument()
    expect(handleFilesChange).toHaveBeenCalledWith([file])
  })
})
