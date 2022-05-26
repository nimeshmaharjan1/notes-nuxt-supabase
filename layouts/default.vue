<script setup lang="ts">
const { isDarkMode } = useDarkMode();
</script>
<template>
  <div
    :style="isDarkMode ? { background: '#1c1c1c' } : null"
    style="min-height: 100vh"
  >
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
