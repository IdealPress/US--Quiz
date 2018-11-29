import Vue from 'vue'
import Router from 'vue-router'

// VIEWS
import Home from '../views/Home'
import Start from '../views/Start'
import Intros from '../views/introductions/Intros'
import Intro from '../views/introductions/Intro'
import Reception from '../views/rooms/Reception'
import CommunualArea from '../views/rooms/Communualarea'
import Bedroom from '../views/rooms/Bedroom'
import Kitchen from '../views/rooms/Kitchen'
import Question from '../views/Question'
import Feedback from '../views/Feedback'

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
