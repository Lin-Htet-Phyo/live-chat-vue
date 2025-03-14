<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name....." v-model="displayName">
    <input type="email" placeholder="Email....." v-model="email">
    <input type="password" placeholder="Password....." v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let signUp = () => {
      console.log(displayName.value);
      console.log(email.value);
      console.log(password.value);
    }

    return {
      displayName,
      email, 
      password,
      signUp,
    }
  }
}
</script>

<style>

</style>