import { Notification, UsersState } from '@application/index';
import { useStore } from '@adapters/store';

export function useNotificationStore(): Notification {
  const { notification } = useStore();

  return notification;
}

export function useUsersStore(): UsersState {
  const { users } = useStore();

  return users;
}
