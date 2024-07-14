<template>
  <div
    class="card bg-base-200 to-base-300 from-base-200 bg-gradient-to-br hover:bg-gradient-to-tr transition-all cursor-pointer hover:shadow-lg group text-base-200-content shadow"
  >
    <figure class="px-5 pt-8 max-h-[30rem] overflow-hidden">
      <img :src="image" :alt="name" class="rounded min-h-44" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title font-bold font-serif">
        {{ name }}
      </h2>
      <div class="tooltip mb-2" :data-tip="description">
        <p>{{ shortDescription }}...</p>
      </div>
      <div class="card-actions w-full justify-end relative -bottom-1 pb-0">
        <button
          class="btn btn-ghost opacity-0 group-hover:opacity-100 btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    shortDescription() {
      return this.description?.substring(0, 100) || 'No description found';
    },
  },
};
</script>

<style></style>
