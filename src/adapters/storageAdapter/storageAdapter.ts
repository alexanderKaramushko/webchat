import { Notification } from '../../application';
import { useStore } from '..';

export function useNotificationStore(): Notification {
  const { notification, updateNotification } = useStore();

  return {
    notification,
    updateNotification,
  };
}
