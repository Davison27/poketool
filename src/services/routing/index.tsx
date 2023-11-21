import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants'

const Home = lazy(() => import('~/pages/home'))
const Layout = lazy(() => import('~/pages/layout'))

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Route>
  </Routes>
)

export default AppRoutes
