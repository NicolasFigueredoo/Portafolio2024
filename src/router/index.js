import { createRouter, createWebHistory } from 'vue-router'
import ProyectosView from '../views/ProyectosView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: '',
  //   component: 
  // },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: ProyectosView
  },
  {
    path: '/miPerfil',
    name: 'miPerfil',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
