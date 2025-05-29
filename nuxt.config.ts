export default defineNuxtModule({
  css: ['~/assets/css/main.css'],
  components: {
    global: true,
    dirs: ['~/components'],
    prefix: 'Em'
  },
  tailwindcss: {
    configPath: './tailwind.config.ts'
  },
  ui: {
    prefix: 'Em',
    colorMode: true,
  },
  modules: [
    '@nuxt/ui',
  ],
})