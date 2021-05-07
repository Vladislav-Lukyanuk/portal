import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";

import { IAuthService } from "@app/service/auth/IAuthService";
import { IUserRepository } from "@app/db/IUserRepository";
import { DECLARATIONS } from "@app/ioc/declarations";
import { User } from "@app/model/user";
import { TToken } from "@app/service/auth/types";
import { ApiException } from "@app/exception/ApiException";

@injectable()
export class AuthService implements IAuthService {
  @inject(DECLARATIONS.UserRepository)
  private readonly userRepository: IUserRepository;

  signIn(login: string, password: string): Promise<TToken> {
    return Promise.resolve({
      accessToken: "",
      refreshToken: "",
    });
  }

  async signUp(login: string, password: string): Promise<TToken> {
    let user = await this.userRepository.getByEmail(login);

    if (user !== undefined) {
      throw new ApiException("User is already exist");
    }

    const passwordHash = await this.hashPassword(password);

    await this.userRepository.add(new User(login, passwordHash));

    user = await this.userRepository.getByEmail(login);

    return Promise.resolve({
      accessToken: "",
      refreshToken: "",
    });
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(Number(process.env.HASH_SALT_ROUNDS));
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
}
