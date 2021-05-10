import { inject, injectable } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IWordService } from "@app/service/word/IWordService";
import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { Word } from "@app/model/word";
import { UserWordsPool } from "@app/model/userWordsPool";

@injectable()
export class WordService implements IWordService {
  private readonly _wordRepository: IWordRepository;

  constructor(
    @inject(DECLARATIONS.WordRepository) wordRepository: IWordRepository
  ) {
    this._wordRepository = wordRepository;
  }

  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }> {
    return this._wordRepository.addWordToUserPool(poolId, wordId);
  }

  createUserPool(userId: number, poolName: string): Promise<UserWordsPool> {
    return this._wordRepository.createUserPool(userId, poolName);
  }
}
