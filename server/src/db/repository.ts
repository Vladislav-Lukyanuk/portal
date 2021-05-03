import { Pool, QueryResult } from "pg";
import { IRepository } from "./IRepository";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teach-me",
  password: "1234password",
  port: 5432,
});

export abstract class Repository<T> implements IRepository<T> {
  query(sql: string, params: (number | string)[]): Promise<QueryResult> {
    return pool.query(sql, params);
  }
}
