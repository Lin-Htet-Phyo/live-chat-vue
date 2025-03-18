<template>
  <div class="chat-window">
    <div class="messages" v-if="messages.length">
      <div class="single" v-for="msg in messages" :key="msg.id">
        <span class="created-at">{{
          msg.created_at?.toDate().toLocaleString()
        }}</span>
        <span class="name">{{ msg.name }}</span>
        <span class="message">{{ msg.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { ref, onMounted } from "vue";

export default {
  setup() {
    let messages = ref([]); 

    const messagesCollection = collection(db, "messages");
    const messagesQuery = query(messagesCollection, orderBy("created_at"));

    onMounted(() => {
      onSnapshot(messagesQuery, (snapshot) => {
        messages.value = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      });
    });

    return {
      messages,
    };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>