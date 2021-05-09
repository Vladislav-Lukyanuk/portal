import { User } from "@app/model/user";
import { TToken } from "@app/service/auth/types";

export interface IAuthService {
  signIn(login: string, password: string): Promise<TToken>;
  signUp(login: string, password: string): Promise<TToken>;
  verifyToken(token: string): User | null;
}
