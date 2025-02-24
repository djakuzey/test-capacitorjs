import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), svgr({
    svgrOptions: ({
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    }),
  })],
})
