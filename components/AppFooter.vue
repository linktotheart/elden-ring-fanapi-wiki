<template>
  <footer
    class="footer mt-20 footer-center bg-base-200 text-base-content rounded p-6"
  >
    <div class="flex">
      <img
        src="@/assets/images/logo.webp"
        class="block h-20 max-w-[20rem] filter brightness-200"
      />
    </div>
    <section class="mb-4">
      <p class="text-md">Copyright © {{ year }}</p>
      <p>
        Made with ❤️ by
        <a
          target="_blank"
          class="link link-danger"
          href="http://docs.eldenring.fanapis.com"
          >Elden Ring Fan API</a
        >
        and <a href="https://nuxtjs.org" class="link link-danger">NuxtJS</a>
      </p>
    </section>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      navLinks: [
        'Ammos',
        'Armors',
        'Ashes of War',
        'Bosses',
        'Classes',
        'Creatures',
        'Incantations',
        'Items',
        'Locations',
        'NPCs',
        'Shields',
        'Sorceries',
        'Spirits',
        'Talismans',
        'Weapons',
      ],
    };
  },

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
