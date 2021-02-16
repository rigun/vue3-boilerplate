import { routerFilter } from '@/helpers/helper'

function loadAuth(view) {
    return () => import( /* webpackChunkName: "view-[request]" */ `@/views/auth/${view}.vue`)
}

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            requiresAuth: false,
            beforelogin: true,
            roleVerif: false,
            role: []
        },
        component: loadAuth('Login')
    },
    {
        path: '/logout',
        name: 'Logout',
        meta: {
            requiresAuth: true,
            roleVerif: false,
            role: []
        },
        component: loadAuth('Logout')
    },
]

export default routerFilter(routes)