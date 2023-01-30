import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath   = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/help-me-pls',
} as const satisfies Record<AppRoutes, string>;

export const routeConfig = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> }
] satisfies RouteProps[];