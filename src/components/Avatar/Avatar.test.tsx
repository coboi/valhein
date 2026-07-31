import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('passes image alt text through', async () => {
    const OriginalImage = window.Image

    class LoadedImage {
      complete = true
      naturalWidth = 1
      onload: (() => void) | null = null

      set src(value: string) {
        void value
        this.onload?.()
      }
    }

    window.Image = LoadedImage as unknown as typeof Image

    try {
      render(<Avatar alt="Ada Lovelace" fallback="AL" src="/avatar.png" />)

      expect(await screen.findByRole('img', { name: 'Ada Lovelace' })).toBeInTheDocument()
    } finally {
      window.Image = OriginalImage
    }
  })

  it('renders fallback content', () => {
    render(<Avatar fallback="VH" />)

    expect(screen.getByText('VH')).toBeInTheDocument()
  })
})
