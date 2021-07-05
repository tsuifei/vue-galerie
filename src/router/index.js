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
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'ProductDetail',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'carts',
        name: 'Carts',
        component: () => import('../views/Carts.vue')
      }
    ]
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Dashboard.vue') /* 後台入口 */,
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/admin/Coupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
