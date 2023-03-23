// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:["~/assets/css/main.scss", "~/assets/css/base.scss", "~/assets/css/variables.scss"],
    modules: ['@nuxtjs/tailwindcss'],
    app:{
        head:{
            title: 'Yaj Tech',
            meta:[{name:'description', content: 'Yaj Tech'}],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '../assets/img/logo.svg' }
              ]
        }
    }
    
})
