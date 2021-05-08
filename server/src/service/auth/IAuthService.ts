import { TToken } from "@app/service/auth/types";

export interface IAuthService {
  signIn(login: string, password: string): Promise<TToken>;
  signUp(login: string, password: string): Promise<TToken>;
}
