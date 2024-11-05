import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import SearchResult from '@/components/SearchResult.vue'
import DeveloperView from '@/views/DeveloperView.vue'

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
      path: '/developer',
      name: 'developer',
      component: DeveloperView,
      props: route => ({
        name: route.query.name,
      }),
    },
  ],
})

export default router
