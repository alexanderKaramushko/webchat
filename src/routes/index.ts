import { lazy } from 'react';
import { Route, ROUTES_PATHS } from './types';

const routes: Route[] = [
  {
    component: lazy(() => import('@components/pages/MainPage')),
    path: ROUTES_PATHS.MAIN,
  },
];

export default routes;
