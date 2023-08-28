// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-headlessui",
  ],
  googleFonts: {
    subsets: ["latin"],
    families: {
      "Kumbh Sans": true,
    },
  },
});
