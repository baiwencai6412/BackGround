import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from '../views/login'
// import Home from '../views/home'
import Index from '../views/home'
import Home from '../components/home'
import Goods from '../views/goods'
import Membel from '../views/membel'
import Staff from '../views/staff'
import Supplier from '../views/supplier'

Vue.use(VueRouter);

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:"/",
    name:"home",
    component:Home,
    refirect:"/index",
    children:[
      {
        path:"/index",
        name:"index",
        component:Index
      },
      {
        path:"/goods",
        name:"goods",
        component:Goods,
        meta:{
          title:"供应商管理"
        }
      },
      {
        path:"/membel",
        name:"membel",
        component:Membel,
        meta:{
          title:"会员管理"
        }
      },
      {
        path:"/staff",
        name:"staff",
        component:Staff,
        meta:{
          title:"商品管理"
        }
      },
      {
        path:"/supplier",
        name:"supplier",
        component:Supplier,
        meta:{
          title:"员工管理"
        }
      },
    ]
  }
 

];

const router = new VueRouter({
  routes
});

export default router;