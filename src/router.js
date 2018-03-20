import Vue from 'vue'
import Router from 'vue-router'
import Editor from './views/Marked.vue'
import Remarkable from './views/Remarkable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'marked',
      component: Editor
    },
    {
      path: '/remarkable',
      name: 'remarkable',
      component: Remarkable
    }
  ]
})
