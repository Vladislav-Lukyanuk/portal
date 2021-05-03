import { Pool } from "pg";

import { IDBAdapter } from "./IDBAdapter";

export class DbAdapter implements IDBAdapter {
  private static instance: DbAdapter;
  private pool: Pool;

  private constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "teach-me",
      password: "1234password",
      port: 5432,
    });
  }

  public static getInstance(): DbAdapter {
    if (!this.instance) {
      this.instance = new DbAdapter();
    }

    return this.instance;
  }

  public async query<T>(
    sql: string,
    params: (number | string)[]
  ): Promise<T[]> {
    const { rows } = await this.pool.query(sql, params);

    return rows;
  }
}
