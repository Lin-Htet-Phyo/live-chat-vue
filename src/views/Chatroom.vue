<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  components: { Navbar },
  setup() {
    let router = useRouter();
    let {user} = getUser();
    watch(user, () => {
      if (!user.value) {
        // redirect welcom
        router.push({name: "Welcome"});
      }      
    });
  }
}
</script>

<style>

</style>