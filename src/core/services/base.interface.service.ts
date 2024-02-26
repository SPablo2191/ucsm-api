export interface BaseService<T> {
  findAll: () => Promise<T[]>;
  create: (item: T) => Promise<T>;
  findOne: (id: string) => Promise<T>;
  update: (id: string, item: T) => Promise<T>;
  delete: (id: string) => Promise<T>;
}
