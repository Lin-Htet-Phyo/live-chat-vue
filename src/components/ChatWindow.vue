<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="msg in formattedMsg" :key="msg.id">
        <span class="created-at">{{
          msg.created_at
        }}</span>
        <span class="name">{{ msg.name }}</span>
        <span class="message">{{ msg.message }}</span>
      </div>
    </div>
  </div>
</template> 

<script>
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { ref, onMounted, computed, onUpdated } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    let messages = ref([]);
    // auto scrolling feature
    let msgBox = ref(null);
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    })

    let formattedMsg = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at);
        return { ...msg, created_at: formatTime };
      });
    });
    const messagesCollection = collection(db, "messages");
    const messagesQuery = query(messagesCollection, orderBy("created_at"));

    onMounted(() => {
      onSnapshot(messagesQuery, (snapshot) => {
        messages.value = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          created_at:
            doc.data().created_at instanceof Timestamp
              ? doc.data().created_at.toDate()
              : new Date(),
        }));
      });
    });

    return {
      messages,
      formattedMsg,
      msgBox,
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