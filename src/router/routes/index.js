import homeRoute from './homeRoute'
import { routerFilter } from '@/plugins/helper'

const generateRoutes = async () => {
  const homeChild = await homeRoute;

  const routes = [
    ...homeChild
  ]

  return await routerFilter(routes)
}
export default generateRoutes()