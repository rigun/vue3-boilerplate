import authRoute from './authRoute'
import mainRoute from './mainRoute'
import userRoute from './userRoute'
import NotFound from '@/views/NotFound'
import { routerFilter } from '@/helpers/helper'

const generateRoutes = async () => {
  const auth = await authRoute;
  const main = await mainRoute;
  const user = await userRoute;

  const routes = [
    ...main,
    ...auth,
    ...user,
    {
      path: '/404', 
      name: '404',
      meta: {
        requiresAuth: false,
        beforelogin: false,
        roleVerif: false,
        role: []
      },
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'Not Found',
      meta: {
        requiresAuth: false,
        beforelogin: false,
        roleVerif: false,
        role: []
      },
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)', 
      name: 'Bad Not Found',
      meta: {
        requiresAuth: false,
        beforelogin: false,
        roleVerif: false,
        role: []
      },
      component: NotFound
    }
  ]

  return await routerFilter(routes)
}
export default generateRoutes()