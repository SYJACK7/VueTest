import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ButtonPage from '@/components/Button/ButtonPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Button',
      name: 'Button',
      component: ButtonPage
    }
  ]
})
