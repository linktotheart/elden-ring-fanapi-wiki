<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<script>
import "@/assets/style/style.css";

export default {
  name: "App",
  head: {
    title: "Elden Ring Fan Wiki",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Elden Ring Fan API"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
        rel: "stylesheet"
      }
    ]
  },
  setup() {
    const categories = useState([]);
  }
};
</script>
