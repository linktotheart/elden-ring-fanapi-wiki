<template>
  <section>
    <h1 class="text-xl font-medium">Search results for "{{ search }}"</h1>
  </section>
</template>

<script>
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
</script>

<style></style>
