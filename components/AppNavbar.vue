<template>
  <div class="navbar bg-base-200 top-0">
    <template v-if="isSearchOpen">
      <div
        class="flex overflow-hidden focus-within:bg-neutral-content w-full rounded-full border- border"
      >
        <input
          v-model="search"
          type="text"
          ref="search"
          class="input input-ghost px-8 w-full focus:bg-neutral-content focus:outline-none focus:border-0 placeholder:text-base-content placeholder:text-opacity-50"
          placeholder="Search..."
        />
        <button class="btn btn-ghost btn-circle" @click="handleSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
              v-if="search.length === 0"
            />
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                v-else
              />
          </svg>
        </button>
      </div>
    </template>
    <template v-else>
      <div class="navbar-start border border-transparent">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <router-link class="btn btn-ghost font-serif text-lg" to="/">Elden Ring</router-link>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle" @click="toggleSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </template>
  </div>
</template>
<!-- <script>
export default {
  data() {
    return {
      search: '',
      isSearchOpen: false,
    };
  },
  methods: {
    toggleSearch() {
      console.log('Search Toggled');
      this.isSearchOpen = !this.isSearchOpen;
    },
  },
};
</script> -->

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      search: '',
      isSearchOpen: false,
    };
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
  },
};
</script>
