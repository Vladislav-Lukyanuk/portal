import { injectable } from "inversify";

import { ITransactionRepository } from "@app/db/ITransactionRepository";
import { DbAdapter } from "@app/db/adapter/dbAdapter";

@injectable()
export class TransactionRepository implements ITransactionRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async commitTransaction(): Promise<void> {
    await this.dbAdapter.query("COMMIT", []);

    return;
  }

  async rollbackTransaction(): Promise<void> {
    await this.dbAdapter.query("ROLLBACK", []);

    return;
  }

  async startTransaction(): Promise<void> {
    await this.dbAdapter.query("BEGIN", []);

    return;
  }
}
