<template>
  <section class="container mx-auto max-w-screen-lg relative">
    <hero-container />

    <div class="divider my-10">Praise the Sun</div>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <HomeNavCards
        v-for="nav in eldenRingNavList"
        :key="nav.id"
        :title="nav.label"
        :description="nav.description"
        @click="() => $router.push(`/category/${nav.name}`)"
        :imageUrl="nav.thumbnail"
      />
    </div>
  </section>
</template>
<script>
import { categories } from '~/data/categories';
export default {
  head: {
    title: 'Elden Ring Wiki',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Elden Ring Wiki',
      },
    ],
  },
  data() {
    return {
      eldenRingNavList: categories,
    };
  },
};
</script>
