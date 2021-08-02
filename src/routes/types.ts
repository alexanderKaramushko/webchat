import { RouteProps } from 'react-router-dom';

export enum ROUTES_PATHS {
  ENTER = '/enter',
  APP = '/app',
  LOGIN = '/enter/login',
  SIGNUP = '/enter/sign-up',
}
export interface Route extends RouteProps {
  path: ROUTES_PATHS;
}
