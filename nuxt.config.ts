// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
      {
        path: '~/components/',
        prefix: 'Em'
      },
    ],
    ui: {
      prefix: 'Em',
      colorMode: true,
    },
    modules: [
      '@nuxt/ui',
    ],
    css: [
      '~/assets/css/main.css'
    ],
  })
  