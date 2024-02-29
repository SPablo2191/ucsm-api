export interface BaseRepository<T> {
  getAll: () => Promise<T[]>;
  create: (item: T) => Promise<T>;
  getById: (id: string) => Promise<T>;
  update: (id: string, item: T) => Promise<T>;
  delete: (id: string) => Promise<T>;
}
