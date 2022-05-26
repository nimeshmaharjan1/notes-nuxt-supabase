<script setup lang="ts">
const { signOut, isLoggedIn } = useAuth();
const { isDarkMode, toggleDarkMode } = useDarkMode();
const router = useRouter();
const logout = () => {
  signOut();
  router.push("/");
};
</script>
<template>
  <nav
    class="navbar navbar-expand-lg bg-light mb-3 sticky-top"
    :class="{ 'nav-dark': isDarkMode }"
  >
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand py-2"
        ><img
          src="https://cdn-icons.flaticon.com/png/512/3025/premium/3025547.png?token=exp=1653556675~hmac=551019b01b0cc4b2c61178884c7fc5f1"
          alt=""
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div
          class="navbar-nav d-flex align-items-center justify-content-between gap-1"
        >
          <div class="d-flex align-items-center">
            <NuxtLink class="nav-link" to="/profile">Notes</NuxtLink>
            <a v-if="isLoggedIn()" class="nav-link" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  a {
    cursor: pointer;
  }
  img {
    height: 50px;
    width: 50px;
  }
}
.nav-dark {
  background: var(--bg-variant) !important;
  border-bottom: 0.5px solid rgb(79, 79, 79) !important;
  h1,
  p,
  .nav-link,
  .navbar-brand,
  div {
    font-family: var(--main-font);
    color: white;
  }
}
</style>
