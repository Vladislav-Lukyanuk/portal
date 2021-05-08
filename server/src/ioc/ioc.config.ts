import { Container } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";

import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { WordRepository } from "@app/db/repository/wordRepository/wordRepository";

import { UserRepository } from "@app/db/repository/userRepository/userRepository";
import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";

import { TokenRepository } from "@app/db/repository/tokenRepository/tokenRepository";
import { ITokenRepository } from "@app/db/repository/tokenRepository/ITokenRepository";

import { IAuthService } from "@app/service/auth/IAuthService";
import { AuthService } from "@app/service/auth/authService";

const container = new Container();

container.bind<IWordRepository>(DECLARATIONS.WordRepository).to(WordRepository);
container.bind<IUserRepository>(DECLARATIONS.UserRepository).to(UserRepository);
container
  .bind<ITokenRepository>(DECLARATIONS.TokenRepository)
  .to(TokenRepository);

container.bind<IAuthService>(DECLARATIONS.AuthService).to(AuthService);

export { container };
