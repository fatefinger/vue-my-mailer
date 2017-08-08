import Vue from 'vue'
import Router from 'vue-router'
import conf from '@/pages/conf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'conf',
      component: conf
    }
  ]
})
