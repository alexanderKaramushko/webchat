import { Users } from '@application/index';

export function useUsers(): Users {
  return {
    async getUsers(): Promise<Response> {
      return window.fetch('/api/users', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
    },
  };
}
