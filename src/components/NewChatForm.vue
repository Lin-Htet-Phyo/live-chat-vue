<template>
  <textarea
    placeholder="Text message and press enter to send....."
    v-model="message"
    @keypress.enter="handleSubmit"
  ></textarea>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { serverTimestamp } from 'firebase/firestore';

export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let {error, addDocument} = useCollection("messages");
    let handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: serverTimestamp()
      };
      console.log(chat);
      await addDocument(chat);
      message.value = "";
    };

    return {
      message,
      handleSubmit,
      error,
    };
  },
};
</script>

<style>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>