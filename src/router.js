import { createRouter, createWebHashHistory } from 'vue-router'

import counterView from './views/counterView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: counterView,
      path: '/counter'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
