import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PaginaProyectoTD/', // <--- DEBE SER EL NOMBRE DE TU REPO ENTRE SLASHES
})