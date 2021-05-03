import { injectable } from "inversify";

import { DbAdapter } from "@app/db/adapter/dbAdapter";
import { Word } from "@app/model/word";

import { IWordRepository } from "./IWordRepository";

@injectable()
export class WordRepository implements IWordRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  getALl(): Promise<Word[]> {
    return this.dbAdapter.query("select * from words", []);
  }
}
