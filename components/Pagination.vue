<template>
  <div class="join" :class="{'pointer-events-none': disabled}">
    <button :disabled="isLoading" class="join-item btn" @click="handlePagination(page-1)">«</button>
    <button :disabled="isLoading" class="join-item pointer-events-none btn">Page {{ page }}</button>
    <button :disabled="isLoading" class="join-item btn"  @click="handlePagination(page+1)">»</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    totalArticles: {
      type: Number,
      required: true,
    },
	disabled: {
	  type: Boolean,
	  default: false,
	},
  },
  methods: {
	handlePagination(page) {
	  this.$emit('change', page);
	},
  },
};
</script>

<style></style>
