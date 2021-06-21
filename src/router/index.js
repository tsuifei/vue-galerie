import { createRouter, createWebHashHistory } from 'vue-router'
// import Front from '../views/Front.vue';

const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: 'about',
        component: () => import('../views/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'carts',
        component: () => import('../views/Carts.vue')
      }
    ]
  },

  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue') /* 後台入口 */,
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
