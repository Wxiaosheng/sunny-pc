import { createRouter, createWebHistory } from 'vue-router'
import Layout from './views/Layout.vue'
import Home from './views/Home.vue'
import TemplateDetail from './views/TemplateDetail.vue'

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Layout,
      children: [
        { path: '', name: 'home',  component: Home, },
        { path: '/detail/:id', name: 'detail',  component: TemplateDetail, meta: { noFooter: true } },
      ]
    },
    
  ]
})

export default routers