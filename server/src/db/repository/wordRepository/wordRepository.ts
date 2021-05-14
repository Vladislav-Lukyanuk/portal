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
}
