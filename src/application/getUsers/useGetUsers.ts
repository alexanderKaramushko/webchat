import { useUsers, useNotificationStore, useUsersStore } from '@adapters/index';
import { Notification } from '@application/index';
import { User } from '@domain/User';
import { Users, UsersState } from './ports';

export function useGetUsers(): [User[], () => Promise<void>] {
  const { getUsers }: Users = useUsers();
  const { updateNotification }: Notification = useNotificationStore();
  const { users, updateUsers }: UsersState = useUsersStore();

  async function fetchUsers(): Promise<void> {
    try {
      const response = await getUsers();
      const usersJson = await response.json();

      updateUsers(usersJson);
    } catch {
      updateNotification('Что-то пошло не так.');
    }
  }

  return [users, fetchUsers];
}
