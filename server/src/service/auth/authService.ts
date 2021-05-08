import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { IAuthService } from "@app/service/auth/IAuthService";
import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";
import { ITokenRepository } from "@app/db/repository/tokenRepository/ITokenRepository";
import { DECLARATIONS } from "@app/ioc/declarations";

import { User } from "@app/model/user";
import { TToken } from "@app/service/auth/types";
import { ApiException } from "@app/exception/ApiException";
import { Token } from "@app/model/token";

@injectable()
export class AuthService implements IAuthService {
  private readonly userRepository: IUserRepository;
  private readonly tokenRepository: ITokenRepository;

  constructor(
    @inject(DECLARATIONS.UserRepository) userRepository: IUserRepository,
    @inject(DECLARATIONS.TokenRepository) tokenRepository: ITokenRepository
  ) {
    this.userRepository = userRepository;
    this.tokenRepository = tokenRepository;
  }

  async signIn(login: string, password: string): Promise<TToken> {
    const user = await this.userRepository.getByEmail(login);

    if (user === undefined) {
      throw new ApiException("User isn't exist");
    }

    const passwordHash = await this.hashPassword(password);

    if (await this.checkPassword(passwordHash, user.password_hash)) {
      throw new ApiException("Username or password isn't correct");
    }

    const refreshTokenObj = await this.tokenRepository.add(
      new Token(user.id, uuidv4())
    );

    return {
      accessToken: this.generateJwt(user),
      refreshToken: refreshTokenObj.refresh_token,
    };
  }

  async signUp(login: string, password: string): Promise<TToken> {
    const user = await this.userRepository.getByEmail(login);

    if (user !== undefined) {
      throw new ApiException("User is already exist");
    }

    const passwordHash = await this.hashPassword(password);

    await this.userRepository.add(new User(login, passwordHash));

    return this.signIn(login, password);
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(Number(process.env.HASH_SALT_ROUNDS));
    const hash = await bcrypt.hash(password, salt);

    return hash;
  }

  private async checkPassword(password: string, passwordHash: string) {
    return await bcrypt.compare(password, passwordHash);
  }

  private generateJwt(user: User): string {
    return jwt.sign(user, process.env.JWT_SECRET, {
      algorithm: "RS512",
      expiresIn: "1d",
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });
  }
}
