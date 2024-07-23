<template>
  <div
    class="navbar bg-base-300 text-base-content sticky z-50 h-[66px] px-5 backdrop-opacity-50 top-0"
  >
    <template v-if="isSearchOpen">
      <div
        class="flex overflow-hidden focus-within:bg- w-full rounded-full border-primary-content bg-base-200 border"
      >
        <input
          v-model="search"
          type="search"
          @keypress="handlekeyPress"
          ref="search"
          class="input input-ghost px-8 w-full focus:bg- focus:outline-none focus:border-0 placeholder:text-base-content placeholder:text-opacity-50"
          placeholder="Type and Hit Enter to Search..."
        />
        <button class="btn btn-ghost btn-circle" @click="handleSearch">
          <Icon name="mdi:magnify" v-if="search !== ''" />
          <Icon name="mdi:close" v-else />
        </button>
      </div>
    </template>
    <template v-else>
      <div class="navbar-start border border-transparent">
        <router-link
          to="/"
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle"
          v-if="!isRouteHome"
        >
          <span class="btn-btn-ghost sr-only">Go Back</span>
          <Icon name="mdi:arrow-left" />
        </router-link>
      </div>
      <div class="navbar-center">
        <router-link class="btn btn-ghost font-serif text-lg" to="/">Elden Ring Wiki</router-link>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle" @click="toggleSearch">
          <Icon name="mdi:magnify" />
        </button>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      search: '',
      isSearchOpen: false,
    };
  },
  computed: {
    isRouteHome() {
      return this.$route.name === 'index';
    },
  },
  methods: {
    toggleSearch() {
      console.log('Search Toggled');
      this.isSearchOpen = !this.isSearchOpen;
      this.$nextTick(() => {
        if (this.isSearchOpen) {
          this.$refs.search.focus();
        }
      });
    },
    handleSearch() {
      if (this.search.length === 0) {
        this.isSearchOpen = false;
      } else {
        this.$router.push({ name: 'search', query: { q: this.search } });
      }
    },
    handlekeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch();
      }
    },
  },
};
</script>
