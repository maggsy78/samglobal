// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'The home of SAM Global - Sherwood Artist Management',
      meta:[
        { hid: 'description', name: 'description', content: 'SAM Global is the face of Sherwood Artist Management. Management and PR for the hottest talent and artists.' },
        { hid: 'og:title', property: 'og:title', content: 'The home of SAM Global - Sherwood Artist Management' },
        { hid: 'og:url', property: 'og:url', content: 'https://samglobal.agency' },
        { hid: 'og:description', property: 'og:description', content: 'SAM Global is the face of Sherwood Artist Management. Management and PR for the hottest talent and artists.' },
        { hid: 'og:image', property: 'og:image', content: 'https://opengraph.b-cdn.net/production/documents/df131206-d634-4c49-8257-3b90188346b1.png?token=Av6RC5QzhvtpTpCxZT5iGc2jeb1WF6MuHfumoArWHhw&height=630&width=1200&expires=33243726844' },
        
        // twitter card
        { hid: 'twitter:title', name: 'twitter:title', content: 'The home of SAM Global - Sherwood Artist Management' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://samglobal.agency' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'SAM Global is the face of Sherwood Artist Management. Management and PR for the hottest talent and artists.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://opengraph.b-cdn.net/production/documents/df131206-d634-4c49-8257-3b90188346b1.png?token=Av6RC5QzhvtpTpCxZT5iGc2jeb1WF6MuHfumoArWHhw&height=630&width=1200&expires=33243726844' },
      ],
      link: [
        { hid: 'main-styles', rel: 'stylesheet', href: 'https://use.typekit.net/uab5nkb.css' },
        { hid: 'canonical', rel: "canonical", href: 'https://samglobal.agency' }
      ],
    }
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image"],
})