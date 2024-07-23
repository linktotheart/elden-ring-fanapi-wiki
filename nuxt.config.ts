import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon"],
  compatibilityDate: '2024-07-14',
  vite: {
    plugins: [
      vitePluginRequire()
    ]
  },
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    mode: 'css'
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
});