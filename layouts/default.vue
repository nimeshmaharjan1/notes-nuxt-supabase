<script setup lang="ts">
const { isDarkMode } = useDarkMode();
</script>
<template>
  <div :style="isDarkMode ? { background: '#1c1c1c' } : null">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
