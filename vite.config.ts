import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal'

export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()]

  // Optional: Replit plugin in dev
  if (process.env.REPL_ID && process.env.NODE_ENV !== 'production') {
    const { cartographer } = await import('@replit/vite-plugin-cartographer')
    plugins.push(cartographer())
  }

  return {
    base: '/Newsoftheweek/',
    plugins,
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@shared': path.resolve(__dirname, 'shared'),
        '@assets': path.resolve(__dirname, 'attached_assets'),
      },
    },
    server: {
      fs: {
        strict: true,
        deny: ['**/.*'],
      },
    },
  }
})
