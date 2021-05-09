export interface ICRUDRepository<T> {
  get(id: number): Promise<T>;
  add(obj: T): Promise<T>;
  getALl(): Promise<T[]>;
}
