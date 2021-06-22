import { RouteProps } from 'react-router-dom';

export enum ROUTES_PATHS {
  MAIN = '/'
}

export interface Route extends RouteProps {
  path: ROUTES_PATHS;
}
