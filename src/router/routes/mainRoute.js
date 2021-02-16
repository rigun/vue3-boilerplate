import { routerFilter } from '@/helpers/helper'
import Home from '@/views/main/Home.vue'

function loadMain(view) {
    return () => import( /* webpackChunkName: "main-view-[request]" */ `@/views/main/${view}.vue`)
}

const routes = [
    {
        path: '',
        name: 'Home',
        meta: {
          requiresAuth: false,
          roleVerif: false,
          role: []
        },
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            requiresAuth: false,
            roleVerif: false,
            role: []
        },
        component: loadMain('About')
    }
]

export default routerFilter(routes)