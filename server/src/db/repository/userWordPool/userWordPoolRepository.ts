import { injectable } from "inversify";

import { UserWordsPool } from "@app/model/userWordsPool";
import { DbAdapter } from "@app/db/adapter/dbAdapter";
import { IUserWordPoolRepository } from "@app/db/repository/userWordPool/IUserWordPoolRepository";

@injectable()
export class UserWordPoolRepository implements IUserWordPoolRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async add(obj: UserWordsPool): Promise<UserWordsPool> {
    const [pool] = await this.dbAdapter.query<UserWordsPool>(
      "insert into user_words_pools" +
        " (user_id, name, learned_number, total_number)" +
        " values ($1, $2, $3, $4)" +
        " RETURNING id, user_id, name, learned_number, total_number",
      [obj.user_id, obj.name, obj.learned_number, obj.total_number]
    );

    return pool;
  }

  get(id: number): Promise<UserWordsPool> {
    return Promise.resolve(undefined);
  }

  getALl(): Promise<UserWordsPool[]> {
    return Promise.resolve([]);
  }
}
