import { routerFilter } from '@/helpers/helper'

function loadUser(view) {
    return () => import( /* webpackChunkName: "user-view-[request]" */ `@/views/user/${view}.vue`)
}

const routes = [
    {
        path: '/profile',
        name: 'UserProfile',
        meta: {
            requiresAuth: true,
            roleVerif: true,
            role: ['user']
        },
        component: loadUser('UserProfile')
    }
]

export default routerFilter(routes)