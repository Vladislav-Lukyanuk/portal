import { QueryResult } from "pg";

export interface IRepository<T> {
  query(sql: string, params: (number | string)[]): Promise<QueryResult<T>>;
}
