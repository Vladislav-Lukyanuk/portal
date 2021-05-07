import { TToken } from "@app/service/auth/types";

export interface IAuthService {
  signUp(login: string, password: string): Promise<TToken>;
  signIn(login: string, password: string): Promise<TToken>;
}
