import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import { Trans } from '@/plugins/translation'

const setRouter = async (routes) => {
  const data = await routes
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: data
  })
  // router.beforeEach(Trans.routeMiddleware)
  return router
}
export default setRouter(routes)