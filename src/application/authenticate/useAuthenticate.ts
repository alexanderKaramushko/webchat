import { Authentication } from './ports';

import { useAuth, useNotificationStore } from '../../adapters';
import { Notification } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAuthenticate(): any {
  const { auth }: Authentication = useAuth();
  const { updateNotification }: Notification = useNotificationStore();

  async function authenticate(nickname: string): Promise<void> {
    const response = await auth(nickname);

    if (response.status === 404) {
      updateNotification('Пользователь не найден.');
    } else if (!response.ok) {
      updateNotification('Что-то пошло не так.');
    } else {
      updateNotification('');
    }
  }

  return [authenticate];
}
