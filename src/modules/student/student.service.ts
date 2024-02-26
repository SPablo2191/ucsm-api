import { Injectable } from '@nestjs/common';
import {
  BaseService,
  CreateDtoType,
  UpdateDtoType,
} from 'src/core/services/base.interface.service';

@Injectable()
export class StudentService implements BaseService {
  findAll(): Promise<CreateDtoType[]> {
    throw new Error('Method not implemented.');
  }
  create(item: CreateDtoType): Promise<CreateDtoType> {
    console.log(item);
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<UpdateDtoType> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  update(id: string, item: UpdateDtoType): Promise<UpdateDtoType> {
    console.log(id, item);
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<UpdateDtoType> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
