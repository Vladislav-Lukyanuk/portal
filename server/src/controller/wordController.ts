import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { Word } from "@app/model/word";
import { authMiddleware } from "@app/middleware/authMiddleware";

@controller("/word", authMiddleware())
export class WordController extends BaseHttpController {
  @inject(DECLARATIONS.WordRepository)
  private readonly wordRepository: IWordRepository;

  @httpGet("/")
  public async get(): Promise<Word[]> {
    return await this.wordRepository.getALl();
  }
}
