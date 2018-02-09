import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ViewDetails from '@/components/ViewDetails'
import NewRequest from '@/components/NewRequest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {path:'',name:'View',component:ViewDetails},
        {path:'new',name:'New',component:NewRequest},
        {path:'view',name:'View',component:ViewDetails}
      ]
    }
  ]
})
