import { RouteProps } from 'react-router-dom';

export enum ROUTES_PATHS {
  MAIN = '/',
  APP = '/app',
}

export interface Route extends RouteProps {
  path: ROUTES_PATHS;
}
