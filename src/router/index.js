import Vue from "vue"
import VueRouter from "vue-router"

import Layout from '@/layout'
import Empty from '@/layout/empty.vue'

Vue.use(VueRouter)

export const pageRoutes = [
    {
        path: 'goods',
        name: 'goods',
        meta: {
            title: '商品'
        },
        redirect: 'goods/manage',
        component: Empty,
        children: [
            {
                path: 'manage',
                name: 'goods/manage',
                meta: {
                    title: '商品管理（新）'
                },
                component: () => import('@/pages/goods/manage'),
            },
            {
                path: 'service',
                name: 'goods/service',
                meta: {
                    title: '商品服务（新）'
                },
                component: () => import('@/pages/goods/service'),
            },
            {
                path: 'price',
                name: 'goods/price',
                meta: {
                    title: '价格管理（新）'
                }
            },
            {
                path: 'stock',
                name: 'goods/stock',
                meta: {
                    title: '库存管理（新）'
                }
            }
        ]
    },
    {
        path: 'order',
        meta: {
            title: '订单'
        },
        component: Empty,
        children: [
            {
                path: 'manage',
                name: 'order/manage',
                meta: {
                    title: '订单管理（新）'
                },
                component: () => import('@/pages/order/manage'),
            },
            {
                path: 'service',
                name: 'order/service',
                meta: {
                    title: '订单服务（新）'
                },
                component: () => import('@/pages/order/service'),
            }
        ]
    },
    {
        path: 'market',
        meta: {
            title: '商场'
        }
    },
    {
        path: 'consumer',
        meta: {
            title: '客户'
        }
    }
]

const routes = [
    {
        path: "/",
        component: Layout,
        children: pageRoutes
    },
    {
        path: "/login",
        component: () => import('@/pages/login')
    },
]

const router = new VueRouter({
    routes
})

export default router