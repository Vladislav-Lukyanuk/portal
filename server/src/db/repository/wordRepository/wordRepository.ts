import { injectable } from "inversify";

import { DbAdapter } from "@app/db/adapter/dbAdapter";
import { Word } from "@app/model/word";

import { IWordRepository } from "./IWordRepository";
import { Category } from "@app/model/category";
import { UserWordsPool } from "@app/model/userWordsPool";

@injectable()
export class WordRepository implements IWordRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  getALl(): Promise<Word[]> {
    return this.dbAdapter.query("select * from words", []);
  }

  add(obj: Word): Promise<Word> {
    return Promise.resolve(undefined);
  }

  get(id: number): Promise<Word> {
    return Promise.resolve(undefined);
  }

  changeWordStatistic(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }> {
    return Promise.resolve(undefined);
  }

  getUserCategories(userId: number): Promise<Category> {
    return Promise.resolve(undefined);
  }

  getUserPools(userId: number): Promise<UserWordsPool> {
    return Promise.resolve(undefined);
  }

  getWordByCategory(categoryId: number): Promise<Word[]> {
    return Promise.resolve([]);
  }

  getWordsByPool(
    poolId: number
  ): Promise<(Word & { accept_number: number })[]> {
    return Promise.resolve([]);
  }

  addWordToUserPool(
    poolId: number,
    wordId: number
  ): Promise<Word & { accept_number: number }> {
    return Promise.resolve(undefined);
  }

  async createUserPool(
    userId: number,
    poolName: string
  ): Promise<UserWordsPool> {
    const [pool] = await this.dbAdapter.query<UserWordsPool>(
      "insert into user_words_pools" +
        " (user_id, name, learned_number, total_number)" +
        " values ($1, $2, $3, $4)" +
        " RETURNING id, user_id, name, learned_number, total_number",
      [userId, poolName, 0, 0]
    );

    return pool;
  }
}
