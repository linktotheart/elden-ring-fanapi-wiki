import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-07-14',
  vite: {
    plugins: [
      vitePluginRequire()
    ]
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
});