import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '@/views/home'
import Start from '@/views/start'
import Intros from '@/views/introductions/intros'
import Intro from '@/views/introductions/intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/intros',
      name: 'intros',
      component: Intros
    },
    {
      path: '/intro/:id',
      name: 'intro',
      component: Intro
    }
  ]
})
