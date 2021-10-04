import { useSignup as useSign, useNotificationStore } from '@adapters/index';
import { Notification } from '@application/index';
import { Signup } from './ports';

export function useSignup(): [(nickname: string) => Promise<void>] {
  const { signup }: Signup = useSign();
  const { updateNotification }: Notification = useNotificationStore();

  async function makeSignup(nickname: string): Promise<void> {
    const response = await signup(nickname);

    if (response.status === 409) {
      updateNotification('Пользователь с таким ником уже есть.');
    } else if (!response.ok) {
      updateNotification('Что-то пошло не так.');
    } else {
      updateNotification('');
    }
  }

  return [makeSignup];
}
