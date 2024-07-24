<template>
  <footer
    class="footer mt-20 footer-center bg-base-200 text-base-content rounded p-6 gap-4"
  >
    <div class="flex items-center">
      <img
        src="@/assets/images/logo.webp"
        class="block h-20 max-w-[20rem] filter brightness-200"
      />

    </div>
    <div class="text-base font-mono flex text-center text-neutral-content">
      Crafted with ❤️ by <a target="_blank" ref="norefferer" href="https://pulkits.netlify.app" class="link animate-pulse link-primary link-hover">Pulkit Singh</a>
    </div>
    <div class="flex">
      
      <a target="_blank" ref="norefferer" href="https://github.com/linktotheart/elden-ring-fanapi-wiki" class="btn btn-circle btn-ghost">
        <Icon name="mdi:github" class="text-current" />
      </a>
      <a target="_blank" ref="norefferer" href="https://x.com/ultraaaaviolent" class="btn btn-circle btn-ghost">
        <Icon name="mdi:twitter" class="text-current" />
      </a>
      <!-- linkedin  -->
      <a target="_blank" ref="norefferer" href="https://www.linkedin.com/in/pulkitsingh302/" class="btn btn-circle btn-ghost">
        <Icon name="mdi:linkedin" class="text-current" />
      </a>
    </div>
    <section class="mb-4">
      <p class="text-md ">Copyright © {{ year }}</p>
      <p class="italic">
        Special thanks to the creators of the
        <a
          target="_blank"
          class="link link-danger"
          href="http://docs.eldenring.fanapis.com"
          >Elden Ring Fan API</a
        >
        and <a target="_blank" ref="norefferer" href="https://nuxtjs.org" class="link link-danger">NuxtJS</a>
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
