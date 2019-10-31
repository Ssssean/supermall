import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/Home/Home')
const Category = () => import('../views/Category/Category')
const ShopCart = () => import('../views/ShopCart/ShopCart')
const Profile = () => import('../views/Profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    component:Detail
  }
]

export default new Router({
  routes,
  mode:"history"
})
