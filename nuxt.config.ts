// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/uab5nkb.css' }]
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
})