<template>
  <div class="join" :class="{ 'pointer-events-none': disabled }">
    <button
      :disabled="firstPageDisabled"
      class="join-item btn"
      @click="handlePagination(page - 1)"
    >
      «
    </button>
    <span class="join-item pointer-events-none select-none btn" v-if="showDetails">
      Showing results {{ getShowingPageRemainingLimit }}
    </span>
    <span class="join-item pointer-events-none select-none btn" v-else>
      Page {{ page }}
    </span>
    <button
      :disabled="lastPageDisabled"
      class="join-item btn"
      @click="handlePagination(page + 1)"
    >
      »
    </button>
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
    total: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showDetails: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    firstPageDisabled() {
      return parseInt(this.page) === 1 || this.disabled;
    },
    lastPageDisabled() {
      return this.total <= this.page * this.limit || this.disabled;
    },
    getShowingPageRemainingLimit() {
      const { page, limit, total } = this;
      const currentPage = page * limit > total ? total : page * limit;
      return `${(page - 1) * limit + 1} - ${currentPage} of ${total}`;
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
