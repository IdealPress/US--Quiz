import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '../views/home'
import Start from '../views/start'
import Intros from '../views/introductions/intros'
import Intro from '../views/introductions/intro'
import Reception from '../views/rooms/reception'
import CommunualArea from '../views/rooms/communualarea'
import Bedroom from '../views/rooms/bedroom'
import Kitchen from '../views/rooms/kitchen'
import Question from '../views/question'
import Feedback from '../views/feedback'

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
    },
    {
      path: '/reception',
      name: 'reception',
      component: Reception
    },
    {
      path: '/communual-area',
      name: 'communual-area',
      component: CommunualArea
    },
    {
      path: '/bedroom',
      name: 'bedroom',
      component: Bedroom
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/:room/q/:question',
      name: 'question',
      component: Question
    },
    {
      path: '/:room/q/:question/f/:answer',
      name: 'feedback',
      component: Feedback
    }
  ]
})
