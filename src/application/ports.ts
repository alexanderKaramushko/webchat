import { ROUTES_PATHS } from '@routes/types';

export interface Notification {
  notification: string;
  updateNotification(message: string): void;
}

export interface Navigation {
  navigateTo(path: ROUTES_PATHS): void;
}
