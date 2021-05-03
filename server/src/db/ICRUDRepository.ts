export interface ICRUDRepository<T> {
  getALl: () => Promise<T[]>;
}
