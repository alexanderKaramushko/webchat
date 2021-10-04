import { Signup } from '@application/signup';

export function useSignup(): Signup {
  return {
    async signup(nickname: string): Promise<Response> {
      return window.fetch('/api/signup', {
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
