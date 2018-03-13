import Vue from 'vue'
import Router from 'vue-router'
import LayoutMenu from '@/components/layout/LayoutMenu'
import BasicLayout from '@/components/layout/BasicLayout'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Erro404 from '@/components/pages/Erro404'
import NovaPagina from '@/components/pages/NovaPagina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LayoutMenu,
      children: [
        { path: '', component: Home, name: 'home', title: 'Home', menu: true },
        { path: '/novapagina', component: NovaPagina, name: 'novapagina', title: 'Nova Página', menu: true }
      ]
    },
    {
      path: '/login',
      component: BasicLayout,
      children: [
        { path: '/login', component: Login, name: 'login', title: 'Login', menu: false }
      ]
    },
    { // Always leave this as last one
      path: '*',
      component: BasicLayout,
      children: [
        { path: '', component: Erro404, name: 'erro404', title: 'Erro 404', menu: false }
      ]
    }
  ],
  mode: 'history' // Caso o servidor suporte, remove o # da URL da aplicação.
})
