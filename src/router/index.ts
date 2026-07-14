import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from "../views/Auth.vue"
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'
import Feed from '../views/Feed.vue'
import Analytics from '../views/Analytics.vue'
import Post from '../views/Post.vue'
import pinia from "../stores/store";
import { useCounterStore } from "../stores/counter";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
     
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: { requiresAuth: true },
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
      meta: { requiresAuth: true },
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics,
      meta: { requiresAuth: true },
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      meta: { requiresAuth: true },
    },
  ]
})

router.beforeEach((to, from, next) => {
const stores = useCounterStore(pinia);
  const currentUser = stores.signUser;
  console.log(currentUser)

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // const notRequiresAuth = to.matched.some(record => record.meta.notRequiresAuth);

  if (requiresAuth && currentUser == '') {

    next('/login');

  }
 else {

    next();

  }

});

export default router
