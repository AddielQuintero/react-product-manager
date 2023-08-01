import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@middleware': path.resolve(__dirname, 'src/middleware/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@public': path.resolve(__dirname, './public/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@sass': path.resolve(__dirname, 'src/sass'),
    },
  },
})
