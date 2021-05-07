import { Container } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";

import { IWordRepository } from "@app/db/IWordRepository";
import { WordRepository } from "@app/db/wordRepository";

import { UserRepository } from "@app/db/userRepository";
import { IUserRepository } from "@app/db/IUserRepository";

import { IAuthService } from "@app/service/auth/IAuthService";
import { AuthService } from "@app/service/auth/authService";

const container = new Container();

container.bind<IWordRepository>(DECLARATIONS.WordRepository).to(WordRepository);
container.bind<IUserRepository>(DECLARATIONS.UserRepository).to(UserRepository);
container.bind<IAuthService>(DECLARATIONS.AuthService).to(AuthService);

export { container };
