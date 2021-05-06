import { IAuthService } from "@app/service/IAuthService";
import { inject, injectable } from "inversify";
import { IUserRepository } from "@app/db/IUserRepository";
import { DECLARATIONS } from "@app/ioc/declarations";
import { User } from "@app/model/user";

@injectable()
export class AuthService implements IAuthService {
  @inject(DECLARATIONS.UserRepository)
  private readonly userRepository: IUserRepository;

  signIn(login: string, password: string): Promise<void> {
    return Promise.resolve();
  }

  signUp(login: string, password: string): Promise<User> {
    return this.userRepository.add({
      email: login,
      passwordHash: password,
      id: 0,
      hasBan: false,
    });
  }
}
