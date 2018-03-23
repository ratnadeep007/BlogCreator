import Vue from 'vue'
import Router from 'vue-router'
import Marked from './views/Marked.vue'
import Remarkable from './views/Remarkable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/marked',
      name: 'marked',
      component: Marked
    },
    {
      path: '/',
      name: 'remarkable',
      component: Remarkable
    }
  ]
})
