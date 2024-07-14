<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<script setup>
import '@/assets/style/style.css';
import { categories } from '@/data/categories';
useState('categories', () => [...categories]);

</script>
