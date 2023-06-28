import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/findiff-cjk/',
  plugins: [svelte(), UnoCSS()],
})
