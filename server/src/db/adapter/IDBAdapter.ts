export interface IDBAdapter {
  query<T>(sql: string, params: (number | string)[]): Promise<T[]>;
}
