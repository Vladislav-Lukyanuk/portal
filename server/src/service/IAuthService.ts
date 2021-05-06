import { User } from "@app/model/user";

export interface IAuthService {
  signUp(login: string, password: string): Promise<User>;
  signIn(login: string, password: string): Promise<void>;
}
