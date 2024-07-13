<template>
  <main class="w-100 flex flex-col h-screen overflow-hidden bg-base-200">
    <Navbar />
    <main class="flex-grow bg-base-200 p-5">
      <slot />
    </main>
    <AppFooter />
  </main>
</template>
<script>
export default {
  head: {},
};
</script>
