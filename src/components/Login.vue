<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="text" placeholder="Display Name....." v-model="displayName">
    <input type="email" placeholder="Email....." v-model="email">
    <input type="password" placeholder="Password....." v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let login = () => {
      console.log(displayName.value);
      console.log(email.value);
      console.log(password.value);
    }

    return {
      displayName,
      email, 
      password,
      login,
    }
  }
}
</script>

<style>

</style>