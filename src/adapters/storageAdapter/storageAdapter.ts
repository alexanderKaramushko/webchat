import { Notification } from '@application/index';
import { useStore } from '@adapters/store';

export function useNotificationStore(): Notification {
  const { notification } = useStore();

  return notification;
}
