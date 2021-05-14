import { inject, injectable } from "inversify";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IWordService } from "@app/service/word/IWordService";
import { IWordRepository } from "@app/db/repository/wordRepository/IWordRepository";
import { Word } from "@app/model/word";
import { ITransactionRepository } from "@app/db/ITransactionRepository";
import { IUserWordPoolRepository } from "@app/db/repository/userWordPool/IUserWordPoolRepository";
import { UserWordsPool } from "@app/model/userWordsPool";

@injectable()
export class WordService implements IWordService {
  private readonly _wordRepository: IWordRepository;
  private readonly _userWordPoolRepository: IUserWordPoolRepository;
  private readonly _transactionRepository: ITransactionRepository;

  constructor(
    @inject(DECLARATIONS.WordRepository) wordRepository: IWordRepository,
    @inject(DECLARATIONS.TransactionRepository)
    transactionRepository: ITransactionRepository,
    @inject(DECLARATIONS.UserWordPoolRepository)
    userWordPoolRepository: IUserWordPoolRepository
  ) {
    this._wordRepository = wordRepository;
    this._transactionRepository = transactionRepository;
    this._userWordPoolRepository = userWordPoolRepository;
  }

  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }> {
    return this._wordRepository.addWordToUserPool(poolId, wordId);
  }

  createUserPool(userId: number, poolName: string): Promise<UserWordsPool> {
    return this._userWordPoolRepository.add(
      new UserWordsPool(userId, poolName)
    );
  }

  getUserPools(userId: number): Promise<UserWordsPool[]> {
    return this._userWordPoolRepository.getAllByUserId(userId);
  }
}
