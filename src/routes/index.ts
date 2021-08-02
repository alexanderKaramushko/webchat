import { lazy } from 'react';
import { Route, ROUTES_PATHS } from './types';

const routes: Route[] = [
  {
    component: lazy(() => import('@components/pages/EnterPage')),
    path: ROUTES_PATHS.ENTER,
  },
  {
    component: lazy(() => import('@components/pages/App')),
    path: ROUTES_PATHS.APP,
  },
];

export default routes;
