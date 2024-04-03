import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./view/About.vue'),
    },
    {
      path: '/game/',
      children: [
        { 
          path: '',
          name: 'game-list',
          component: () => import('./view/game/List.vue'),
          props: route => ({name: route.params.name}),
        },
        {
          path: 'new',
          name: 'game-new',
          component: () => import('./view/game/New.vue'),
        },
        { 
          path: ':name',
          name: 'game-detail',
          component: () => import('./view/game/Detail.vue'),
          props: route => ({name: route.params.name}),
        },
      ],
    },
    {
      path: 'image',
      children: [
        {
          path: '',
          name: 'image-list',
          component: () => import('./view/image/List.vue'),
        },
        {
          path: ':id',
          name: 'image-new',
          component: () => import('./view/image/New.vue')
        },
      ],
    }
  ],
})
