import { Pool } from "pg";

import { IDBAdapter } from "./IDBAdapter";

export class DbAdapter implements IDBAdapter {
  private static instance: DbAdapter;
  private pool: Pool;

  private constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
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
