import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/help-me-pls',
  [AppRoutes.NOT_FOUND]: '*',
  // } as const satisfies Record<AppRoutes, string> // FIXME:
} as const;

export const routeConfig: RouteProps[] = [
  { path: RoutePath.main, element: <MainPage /> },
  { path: RoutePath.about, element: <AboutPage /> },
  { path: RoutePath.not_found, element: <NotFoundPage /> },
];
