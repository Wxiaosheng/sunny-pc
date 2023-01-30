import { createRouter, createWebHistory } from 'vue-router'
import Layout from './views/Layout.vue'
import Home from './views/Home.vue'
import TemplateDetail from './views/TemplateDetail.vue'
import Login from './views/Login.vue'
import Editor from './views/Editor.vue'

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Layout,
      children: [
        { path: '', name: 'home',  component: Home, },
        { path: 'detail/:id', name: 'detail',  component: TemplateDetail },
      ]
    },
    { 
      path: '/editor', 
      name: 'editor',  
      component: Editor 
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default routers