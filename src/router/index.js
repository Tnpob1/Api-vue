import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import APost from '../views/APost.vue'
import WeatherView from '../views/WeatherVeiw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/post',
      name: 'Post',
      component: PostView
    },
    {
      path: '/post/:id',
      name: 'apost',
      component: APost
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    }
  ]
})

export default router
