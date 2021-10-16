import { ROUTES_PATHS } from '@routes/types';

import { useAuth, useNotificationStore, useNavigation } from '@adapters/index';
import { Notification, Navigation } from '@application/index';
import { Authentication } from './ports';

export function useAuthenticate(): [(nickname: string) => Promise<void>] {
  const { auth }: Authentication = useAuth();
  const { updateNotification }: Notification = useNotificationStore();
  const { navigateTo }: Navigation = useNavigation();

  async function authenticate(nickname: string): Promise<void> {
    const response = await auth(nickname);

    if (response.status === 404) {
      updateNotification('Пользователь не найден.');
    } else if (!response.ok) {
      updateNotification('Что-то пошло не так.');
    } else {
      updateNotification('');
      navigateTo(ROUTES_PATHS.APP);
    }
  }

  return [authenticate];
}
