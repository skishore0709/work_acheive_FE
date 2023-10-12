import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import RegiesterView from '../views/RegiesterView.vue';
import HomeView from '../views/HomeView.vue';



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component:RegiesterView
  },
  {
    path:'/',
    name:'Home',
    component:HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
