import { Pool } from "pg";

import { IRepository } from "./IRepository";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teach-me",
  password: "1234password",
  port: 5432,
});

export abstract class Repository<T> implements IRepository<T> {
  async get(sql: string, params: (number | string)[]): Promise<T[]> {
    const { rows } = await pool.query(sql, params);

    return rows;
  }
}
