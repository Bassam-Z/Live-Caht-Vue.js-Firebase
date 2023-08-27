import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'

const routes = [
  {
   path: '/',
   name: 'Welcome',
   component: WelcomeView

  },
  {
   path: '/chatroom',
   name: 'Chatroom',
   component: ChatRoomView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
