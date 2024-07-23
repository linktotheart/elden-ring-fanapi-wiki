<template>
  <section>
    <container>
      <h1 class="text-3xl mb-4 mt-4 font-bold text-center font-serif">
        Search results for "{{ search }}"
      </h1>

      <div class="divider my-8" v-if="results.length > 0">
        {{ results.length }} results found...
      </div>

      <div
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2"
        v-if="!isLoading && results && results.length > 0"
      >
        <Cards
          v-for="art in results"
          :key="art.id"
          :name="art.name"
          :description="art.description"
          :image="art.image || 'https://via.placeholder.com/300'"
        />
      </div>

      <div
        class="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2"
        v-if="isLoading"
      >
        <Skeleton v-for="n in 9" :key="n" />
      </div>
      <div v-else-if="!isLoading && results.length === 0">
        <div class="text-center text-2xl font-bold mt-10">
          No results found for "{{ search }}"
        </div>
      </div>
    </container>
  </section>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'Search',
  data() {
    return {
      results: [],
      isLoading: false,
      page: parseInt(this.$route.query.page) || 1,
      limit: 50,
      totalResults: 0,
    };
  },
  computed: {
    search() {
      return this.$route.query.q || '';
    },
  },
  methods: {
    searchFor() {
      this.results = [];
      this.$router.push({ name: 'search', query: { q: this.search } });
    },
    async getResults() {
      try {
        if (this.search === '') {
          return;
        }
        this.isLoading = true;
        const { data } = await axios.get(`/items`, {
          params: {
            page: this.page - 1,
            limit: this.limit,
            name: this.search,
          },
        });
        this.results = data.data;
        this.totalResults = data.total;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async paginate(page) {
      this.$router.push({
        query: {
          page,
        },
      });
      this.page = page;
      await this.getResults();
    },
  },
  watch: {
    search() {
      this.getResults();
    },
  },
  created() {
    this.getResults();
  },
};
</script>
<!-- <script setup>
const search = ref('');
const results = ref([]);
const route = useRoute();
const handleSearch = () => {};

search.value = route.query.q || '';

//   return {
//     search,
//     results,
//     handleSearch,
//   };
</script> -->

<style></style>
