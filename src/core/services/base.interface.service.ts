export interface BaseService {
  findAll: () => Promise<CreateDtoType[]>;
  create: (item: CreateDtoType) => Promise<UpdateDtoType>;
  findOne: (id: string) => Promise<UpdateDtoType>;
  update: (id: string, item: UpdateDtoType) => Promise<UpdateDtoType>;
  delete: (id: string) => Promise<UpdateDtoType>;
}

export interface CreateDtoType {}
export interface UpdateDtoType {}
