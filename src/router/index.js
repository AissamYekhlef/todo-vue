import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Todos from '../components/Todos.vue'
import NotFound from '@/components/NotFound.vue'

import store from "../store/index";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true, title: "Login" },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true, title: "Register" },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      title: "Dashboard"
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: {
      requiresAuth: true,
      title: "Projects"
    },
  },
  {
    path: '/projects/:project_id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props:true,
    meta: {
      requiresAuth: true,
      title: "Project Detail"
    },
  }, 
  {
    path: '/projects/:project_id/todos/:todo_id',
    name: 'Todos',
    component: Todos,
    meta: {
      requiresAuth: true,
      title: "Todos"
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About Us"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  authorize(to, next);
  setTitle(to);
});

const authorize = (to, next) => {
  const loggedIn = store.getters["auth/loggedIn"];

  if ({}.hasOwnProperty.call(to.meta,"requiresAuth") && to.meta.requiresAuth) {
    !loggedIn ? next({ name: "Login" }) : next();
  } else if ({}.hasOwnProperty.call(to.meta,"guestOnly") && to.meta.guestOnly) {
    loggedIn ? next({ name: "Projects" }) : next();
  } else {
    next();
  }
};

const setTitle = to => {
  document.title = `${
    {}.hasOwnProperty.call(to.meta, "title") ? to.meta.title + " | " : ""
  } DiTodos`;
};

export default router
