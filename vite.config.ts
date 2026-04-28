import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/hra-2048-wa/',
    plugins: [react()],
})