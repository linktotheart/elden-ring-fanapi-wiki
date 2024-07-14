<template>
  <section>
	<container>
		<h1 class="text-3xl mb-4 mt-4 font-bold text-center font-serif">Search results for "{{ search }}"</h1>
	</container>

	<div class="divider">search results...</div>
  </section>
</template>

<!-- <script>
export default {
	  name: 'Search',
  data() {
	return {
	  search: '',
	  results: [],
	};
  },
  methods: {
	searchFor() {
	  console.log('Searching for:', this.search);
	  this.results = [];
	  this.$router.push({ name: 'search', query: { q: this.search } });
	},
  },
  created() {
	this.search = this.$route.query.q;
	console.log('Searching for:', this.search);
  },
};
</script> -->
<script setup>
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
</script>

<style></style>
