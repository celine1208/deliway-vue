import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // 브라우저 주소: http://localhost:5173/
      name: 'login', // 이름 (나중에 router.push 등에서 사용 가능)
      component: LoginView,  // 보여줄 컴포넌트
    },
    {
      path: '/about', // http://localhost:5173/about
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'), // 동적으로 불러오는 방식
    },
  ],
})

export default router
