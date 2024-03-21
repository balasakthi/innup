// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/styles/globals.css"],
  modules: [
    "@pinia/nuxt",
    "nuxt-primevue",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
  pinia: {
    storesDirs: ["./pages/stores/**", "./store/**"],
  },
  runtimeConfig: {
    baseUrl: "",
  },
  build: {
    transpile: ["vue-sonner"],
  },
  ssr: false,
  primevue: {
    components: {
      prefix: "Prime",
      // what components to exclude
      exclude: ["Editor", "Chart"],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Bestellen Sie Flyer, Poster und Aufkleber in hoher Qualität bei Ihrer Online-Druckerei INnUP: Wir bieten Service-Druck zum Online-Preis!",
        },
        {
          name: "keywords",
          content:
            "flyer, druck, drucken, druckerei, flyer drucken, flyer druck, aufkleber drucken, aufkleber druck, plakate drucken, plakate druck, poster drucken, poster druck, flyer gestalten, flyer erstellen, flyer drucken, flyer druck, falzflyer, falz, günstig, qualität, shop, rubbellose, rubbellos, schilder drucken, hohlkammerplakate, innup,  block,  blöcke,  logo",
        },
      ],
    },
  },
});
