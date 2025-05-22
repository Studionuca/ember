import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/@nuxt/ui-templates/**/*.{js,vue,ts}',
    './node_modules/@nuxt/ui/**/*.{js,vue,ts}'
  ],
  presets: [
    require('@nuxt/ui/tailwind')
  ],
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
} satisfies Config
