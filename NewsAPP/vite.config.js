import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // __APP_ENV__: JSON.stringify(env.VITE_REACT_NEWS_API),
    'process.env.VITE_REACT_NEWS_API':JSON.stringify(process.env.VITE_REACT_NEWS_API)
  },
})
