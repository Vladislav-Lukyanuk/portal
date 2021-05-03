export interface IRepository<T> {
  get(sql: string, params: (number | string)[]): Promise<T[]>;
}
