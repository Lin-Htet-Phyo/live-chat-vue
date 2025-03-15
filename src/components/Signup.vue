<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name....." v-model="displayName" />
    <input type="email" placeholder="Email....." v-model="email" />
    <input type="password" placeholder="Password....." v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let { error, createAccount } = useSignup();
    let signUp = async () => {
      let resp = await createAccount(email.value, password.value, displayName.value);
      if (resp) {
        console.log(resp.user);
      }
    };

    return {
      displayName,
      email,
      password,
      signUp,
      error,
    };
  },
};
</script>

<style>
</style>