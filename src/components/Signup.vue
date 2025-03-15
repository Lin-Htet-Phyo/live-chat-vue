<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name....." v-model="displayName" />
    <input type="email" placeholder="Email....." v-model="email" />
    <input type="password" placeholder="Password....." v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { FirebaseError } from 'firebase/app';
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let error = ref("");
    let signUp = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        if (!userCredential) {
          throw new Error("Could not create new user");
        }
      } catch (err) {
        error.value = err.message;
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