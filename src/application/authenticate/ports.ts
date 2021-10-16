export interface Authentication {
  auth(nickname: string): Promise<Response>;
}
