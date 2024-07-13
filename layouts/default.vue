<template>
  <main class="w-100 flex flex-col min-h-screen bg-base-100 to-base-300">
    <AppNavbar />
    <article class="flex-grow p-5">
      <slot />
    </article>
    <AppFooter />
  </main>
</template>
<script>
export default {
  head: {},
};
</script>
