<template>
  <div
    class="card bg-neutral pb-0 items-center text-neutral-content hover:bg-gradient-to-tr transition-all duration-300 cursor-pointer hover:shadow-md group shadow"
    @click.stop="$emit('open-modal')"
  >
    <figure
      class="px-5 pt-6 flex-grow max-h-[25rem] md:max-h-[30rem] transition-transform duration-300 group-hover:scale-105 translate overflow-hidden"
    >
      <img :src="image" :alt="name" class="rounded-lg shadow-lg min-h-44" />
    </figure>
    <div class="card-body pb-4 px-4 md:px-6 items-center w-full text-center">
      <h2 class="card-title text-lg md:text-xl font-bold font-serif">
        {{ name }}
      </h2>
      <p class="text-sm md:text-base">
        {{ shortDescription }} {{ description?.length > 120 ? '...' : '' }}
      </p>
      <div class="card-actions w-full justify-end relative -bottom-1 pb-0">
        <button
          class="btn btn-ghost opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 btn-circle"
        >
          <Icon name="mdi:arrow-right" />
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
      return this.description?.substring(0, 120) || 'No description found';
    },
  },
};
</script>

<style></style>
