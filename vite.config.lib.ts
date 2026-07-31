import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const external = (id: string) =>
  id === 'react' ||
  id === 'react-dom' ||
  id === 'react/jsx-runtime' ||
  id === '@base-ui/react' ||
  id.startsWith('@base-ui/react/') ||
  id === '@phosphor-icons/react' ||
  id.startsWith('@phosphor-icons/react/')

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'style',
    },
    rolldownOptions: {
      external,
    },
  },
})
