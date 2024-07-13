<template>
  <div class="card group bg-base-100 image-full shadow hover:shadow-xl duration-300 transition-shadow rounded-2xl">
    <figure>
      <img :src="imageUrl" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title font-serif text-2xl">
        {{ title }}
      </h2>
      <p class="mb-4">
        {{ description }}
      </p>
      <div class="card-actions opacity-0 group-hover:opacity-100 transition-opacity justify-end">
        <button class="btn  btn-circle" @click="$emit('click')">
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
              d="M9 5l7 7-7 7"
            />
          </svg>
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
      default: require('@/assets/images/elden-ring.jpg'),
    },
  },
};
</script>

<style></style>
