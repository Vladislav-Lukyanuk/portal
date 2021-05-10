import { inject, injectable } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IWordService } from "@app/service/word/IWordService";
import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { Word } from "@app/model/word";
import { ITransactionRepository } from "@app/db/ITransactionRepository";

@injectable()
export class WordService implements IWordService {
  private readonly _wordRepository: IWordRepository;
  private readonly _transactionRepository: ITransactionRepository;

  constructor(
    @inject(DECLARATIONS.WordRepository) wordRepository: IWordRepository,
    @inject(DECLARATIONS.TransactionRepository)
    transactionRepository: ITransactionRepository
  ) {
    this._wordRepository = wordRepository;
    this._transactionRepository = transactionRepository;
  }

  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }> {
    return this._wordRepository.addWordToUserPool(poolId, wordId);
  }

  createUserPool(userId: number, poolName: string) {
    return this._wordRepository.createUserPool(userId, poolName);
  }
}
