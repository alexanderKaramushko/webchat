import { User } from '@domain/User';

export interface UsersState {
  users: User[];
  updateUsers(users: User[]): void;
}

export interface Users {
  getUsers: () => Promise<Response>;
}
