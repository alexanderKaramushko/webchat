export interface Signup {
  signup(nickname: string): Promise<Response>;
}
