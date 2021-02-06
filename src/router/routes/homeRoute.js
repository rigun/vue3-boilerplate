import { routerFilter } from '@/plugins/helper'
import Home from '@/views/Home.vue'

function loadAuth(view) {
    return () => import( /* webpackChunkName: "auth-[request]" */ `@/views/auth/${view}.vue`)
}

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
            beforeLogin: true,
            requiresAuth: false,
            roleVerif: false,
            role: []
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: loadAuth('Login'),
        meta: {
            beforeLogin: true,
            requiresAuth: false,
            roleVerif: false,
            role: []
        },
    }
]

export default routerFilter(routes)