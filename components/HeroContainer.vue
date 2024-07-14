<template>
  <div
    class="card bg-base-100 rounded-xl lg:h-[20rem] overflow-hidden image-full shadow-lg hover:shadow-xl duration-300 transition-shadow"
  >
    <figure>
      <img src="@/assets/images/elden-ring.jpg" class="h-auto w-full object-center" alt="background" />
    </figure>
    <div class="card-body grid place-content-center">
      <h2 class="font-serif text-3xl mb-4 font-bold text-center">
        <span class="text-4xl">E</span>LDENRIN<span class="text-4xl">G</span>
      </h2>
      <p class="text-md font-serif text-center lg:max-w-sm max-w-xs">
        This wiki is a collection of information about Elden Ring, including
        items, enemies, NPCs, and more.
      </p>
    </div>
  </div>
</template>

<script setup>
const top = ref(0)
</script>

<style></style>
