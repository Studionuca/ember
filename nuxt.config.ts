export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    components: {
        global: true,
        dirs: ['~/components']
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