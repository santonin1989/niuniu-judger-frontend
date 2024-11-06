import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import SearchResult from '@/components/SearchResult.vue'
import DeveloperView from '@/views/DeveloperView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SearchView,
      children: [
        {
          path: 'search',
          name: 'search',
          component: SearchResult,
          props: route => ({
            name: route.query.name,
            domain: route.query.domain,
          }),
        },
      ],
    },
    {
      path: '/developer/:name',
      name: 'developer',
      component: DeveloperView,
    },
    {
      path: '/:pathMatch(.*)*', // 捕获所有未匹配的路径
      name: 'NotFound',
      component: NotFoundView, // 显示404页面
    },
  ],
})

export default router
