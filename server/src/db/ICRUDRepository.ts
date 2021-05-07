export interface ICRUDRepository<T> {
  add: (obj: T) => Promise<void>;
  getALl: () => Promise<T[]>;
}
