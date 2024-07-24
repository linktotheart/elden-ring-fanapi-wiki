import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
title: 'Elden Ring Wiki'
    }
  },
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
  },
  ssr: false,
});