<template>
  <section class="row justify-content-center align-items-center">
    <div class="card w-50" :class="{ 'card-dark': isDarkMode }">
      <div class="card-body">
        <h1 class="text-center" style="text-transform: uppercase">
          {{ authState }}
        </h1>
        <hr />
        <form>
          <div class="form-group mt-3">
            <label for="exampleInputEmail1">E-mail</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="input.email"
              autofocus
            />
          </div>
          <div class="form-group mt-3">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="Enter password"
              v-model="input.password"
            />
          </div>
          <p v-if="authError" class="mt-2" style="color: red; margin-bottom: 0">
            {{ authError }}
          </p>
        </form>
        <button
          type="submit"
          @click="handleSubmit"
          class="btn-primary btn col-12 mt-3"
        >
          {{ authState === AuthState.LOGIN ? "Login" : "Submit" }}
        </button>
        <div class="d-flex justify-content-between mt-2">
          <a class="nav-link" @click="toggleAuthState">{{
            authState === AuthState.LOGIN
              ? "Don't have an account? Create one now"
              : "Already have an account? Go ahead and sign in"
          }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.row {
  height: 80vh !important;
}
label {
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;
  margin-top: 0.4rem;
}
a {
  font-size: 0.7rem;
  margin-top: 0.4rem;
  opacity: 0.6;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    opacity: 1;
    color: blue;
  }
}
</style>
<script lang="ts" setup>
const { isDarkMode } = useDarkMode();
enum AuthState {
  LOGIN = "login",
  SIGNUP = "signup",
}
interface ICredentials {
  email: string;
  password: string;
}
const { signUp, login } = useAuth();
const authState = ref<AuthState>(AuthState.LOGIN);
const input = ref<ICredentials>({
  email: "",
  password: "",
});
const authError = ref("");
const toggleAuthState = () => {
  authState.value === AuthState.LOGIN
    ? (authState.value = AuthState.SIGNUP)
    : (authState.value = AuthState.LOGIN);
  authError.value = "";
};
const router = useRouter();
const handleSubmit = async () => {
  try {
    if (authState.value === AuthState.LOGIN) {
      await login({ email: input.value.email, password: input.value.password });
      router.push("/profile");
    } else {
      await signUp({
        email: input.value.email,
        password: input.value.password,
      });
    }
    input.value.email = "";
    input.value.password = "";
  } catch (error) {
    authError.value = error.message;
  }
};
</script>
