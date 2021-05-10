import { UserWordsPool } from "@app/model/userWordsPool";
import { Word } from "@app/model/word";

export interface IWordService {
  createUserPool(userId: number, poolName: string): Promise<UserWordsPool>;
  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }>;
}
