import { Container } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";

import { IWordRepository } from "@app/db/IWordRepository";
import { WordRepository } from "@app/db/wordRepository";

const container = new Container();

container.bind<IWordRepository>(DECLARATIONS.WordRepository).to(WordRepository);

export { container };
