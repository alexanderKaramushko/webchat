import { lazy } from 'react';
import { Route, ROUTES_PATHS } from './types';

const routes: Route[] = [
  {
    component: lazy(() => import('@components/pages/MainPage')),
    exact: true,
    path: ROUTES_PATHS.MAIN,
  },
  {
    component: lazy(() => import('@components/pages/App')),
    path: ROUTES_PATHS.APP,
  },
];

export default routes;
