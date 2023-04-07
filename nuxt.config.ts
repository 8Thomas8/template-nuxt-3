// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', 'nuxt-og-image', 'nuxt-schema-org'],
    css: [
        '@/assets/scss/main.scss'
    ],
    tailwindcss: {
        cssPath: '~/assets/scss/main.scss',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {
            content: [],
            theme: {
                fontFamily: {
                    poppins: ['"Poppins"', 'sans-serif'],
                    roboto: ['"Roboto"', 'sans-serif']
                }
            },
            plugins: [
                require('@tailwindcss/typography')
            ]
        },
        injectPosition: 0,
        viewer: true
    },
    eslint: {
        lintOnStart: false,
        emitWarning: true,
        emitError: true,
        failOnError: true,
        failOnWarning: false
    },
    schemaOrg: {
        // TODO Changer url
        host: 'https://exemple.fr/'
    }
})
