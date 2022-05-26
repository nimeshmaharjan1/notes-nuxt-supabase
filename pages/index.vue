<script setup lang="ts">
const { isLoggedIn } = useAuth();
const { isDarkMode } = useDarkMode();
</script>
<template>
  <main class="container">
    <AuthCard v-if="!isLoggedIn()" />
    <div class="card" :class="{ 'nav-dark': isDarkMode }" v-else>
      <div class="card-body">
        <p>
          You are currently logged in please redirect to the
          <NuxtLink to="/profile">add note</NuxtLink> page.
        </p>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap");
:root {
  --main-font: "Poppins", sans-serif;
  --transition: 0.4s;
  --shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  --bg: #1c1c1c;
  --bg-variant: #232323;
}
.main {
  height: 80vh !important;
}
h1,
p,
div {
  font-family: var(--main-font);
}
.card-dark {
  h1,
  p,
  div {
    font-family: var(--main-font);
    color: white;
  }
  background: var(--bg-variant);
  box-shadow: var(--shadow);
  transition: var(--transition);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  input,
  textarea {
    background: var(--bg-variant);
    color: white;
    &:focus {
      background: var(--bg-variant);
      color: white;
    }
  }
}
</style>
