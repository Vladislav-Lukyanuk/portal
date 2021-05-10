import { Container } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";

import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { WordRepository } from "@app/db/repository/wordRepository/wordRepository";

import { UserRepository } from "@app/db/repository/userRepository/userRepository";
import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";

import { TokenRepository } from "@app/db/repository/tokenRepository/tokenRepository";
import { ITokenRepository } from "@app/db/repository/tokenRepository/ITokenRepository";

import { TransactionRepository } from "@app/db/transactionRepository";
import { ITransactionRepository } from "@app/db/ITransactionRepository";

import { IAuthService } from "@app/service/auth/IAuthService";
import { AuthService } from "@app/service/auth/authService";

import { IWordService } from "@app/service/word/IWordService";
import { WordService } from "@app/service/word/wordService";

const container = new Container();

container.bind<IWordRepository>(DECLARATIONS.WordRepository).to(WordRepository);
container.bind<IUserRepository>(DECLARATIONS.UserRepository).to(UserRepository);
container
  .bind<ITokenRepository>(DECLARATIONS.TokenRepository)
  .to(TokenRepository);
container
  .bind<ITransactionRepository>(DECLARATIONS.TransactionRepository)
  .to(TransactionRepository);

container.bind<IAuthService>(DECLARATIONS.AuthService).to(AuthService);
container.bind<IWordService>(DECLARATIONS.WordService).to(WordService);

export { container };
