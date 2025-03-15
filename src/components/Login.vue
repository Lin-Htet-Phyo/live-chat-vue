<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <!-- <input type="text" placeholder="Display Name....." v-model="displayName" /> -->
    <input type="email" placeholder="Email....." v-model="email" />
    <input type="password" placeholder="Password....." v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin"

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let {error, signIn} = useLogin();
    let login = async () => {
      let resp = await signIn(
        email.value, 
        password.value
      );
      if (resp) {
        console.log(resp.user);
      }
    };

    return {
      displayName,
      email,
      password,
      login,
      error,
    };
  },
};
</script>

<style>

</style>