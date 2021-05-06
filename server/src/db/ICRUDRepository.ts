export interface ICRUDRepository<T> {
  add: (obj: T) => Promise<T>;
  getALl: () => Promise<T[]>;
}
