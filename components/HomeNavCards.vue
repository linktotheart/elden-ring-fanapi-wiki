<template>
  <div
    class="card group bg-base-100 image-full shadow hover:shadow-xl duration-300 transition-shadow rounded-2xl"
  >
    <figure>
      <img :src="getImagesUrl()" :alt="title" />
    </figure>
    <div class="card-body p-3 pt-6 md:p-6">
      <h2 class="card-title font-serif text-lg sm:text-xl md:text-2xl">
        {{ title }}
      </h2>
      <p class="mb-0 text-sm md:text-base">
        {{ description }}
      </p>
      <div
        class="card-actions opacity-0 group-hover:opacity-100 duration-300 transition-opacity justify-end"
      >
        <button class="btn max-[w3rem]:btn-sm  btn-circle" @click="$emit('click')">
          <Icon name="mdi:arrow-right" class="text-current text-base" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavCards',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: require('@/assets/images/home/0LEqvzR.jpg'),
    },
  },
  methods: {
    getImagesUrl() {
      return `./images/home/${this.imageUrl}`;
    },
  },
};
</script>

<style></style>
