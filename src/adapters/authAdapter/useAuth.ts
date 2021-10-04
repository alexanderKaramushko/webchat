import { Authentication } from '../../application/authenticate';

export function useAuth(): Authentication {
  return {
    async auth(nickname: string): Promise<Response> {
      return window.fetch('/api/login', {
        body: JSON.stringify({
          nickname,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    },
  };
}
