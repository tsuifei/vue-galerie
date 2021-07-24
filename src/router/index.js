import { createRouter, createWebHashHistory } from 'vue-router'
// import Front from '../views/Front.vue';

const routes = [
  // 前台路由
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
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
        path: 'articles',
        name: 'Articles',
        component: () => import('../views/Articles.vue')
      },
      {
        path: 'article/:id',
        name: 'Article',
        component: () => import('../views/Article.vue')
      },
      {
        path: 'carts',
        name: 'Carts',
        component: () => import('../views/Carts.vue')
      }
    ]
  },
  // 登入
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/Login.vue')
  },
  // 後台路由
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
        name: 'AdminCoupons',
        component: () => import('../views/admin/Coupons.vue')
      },
      {
        path: 'articles',
        name: 'AdminArticles',
        component: () => import('../views/admin/Articles.vue')
      },
      // 404 訊息頁面
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  },
  // 重新導向回首頁
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
