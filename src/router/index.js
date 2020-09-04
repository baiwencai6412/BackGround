import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from '../views/login'
// import Home from '../views/home'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import( "../views/home")
  }
];

const router = new VueRouter({
  routes
});

export default router;