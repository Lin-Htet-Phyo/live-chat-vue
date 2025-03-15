import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue"
import Chatroom from "../views/Chatroom.vue"

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    props: true
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
