import { Word } from "model/word";

import { DbAdapter } from "./adapter/dbAdapter";
import { ICRUDRepository } from "./ICRUDRepository";

export class WordRepository implements ICRUDRepository<Word> {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  getALl(): Promise<Word[]> {
    return this.dbAdapter.query("select * from words", []);
  }
}
