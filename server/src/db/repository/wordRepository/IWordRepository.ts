import { Word } from "@app/model/word";

import { ICRUDRepository } from "../../ICRUDRepository";
import { UserWordsPool } from "@app/model/userWordsPool";
import { Category } from "@app/model/category";

export interface IWordRepository extends ICRUDRepository<Word> {
  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }>;
  getUserPools(userId: number): Promise<UserWordsPool>;
  getWordsByPool(poolId: number): Promise<(Word & { accept_number: number })[]>;
  getUserCategories(userId: number): Promise<Category>;
  getWordByCategory(categoryId: number): Promise<Word[]>;
  changeWordStatistic(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }>;
}
