import { Injectable } from '@nestjs/common';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { ProfessorRepository } from './professor.repository';
import { ProfessorMapper } from './professor.mapper';

@Injectable()
export class ProfessorService
  implements BaseService<CreateProfessorDto | UpdateProfessorDto>
{
  constructor(
    private itemsRepository: ProfessorRepository,
    private mapper: ProfessorMapper,
  ) {}
  findAll(): Promise<(CreateProfessorDto | UpdateProfessorDto)[]> {
    return this.itemsRepository.getAll().then((items) => {
      return items.map((record) => this.mapper.entityToDto(record));
    });
  }
  create(
    item: CreateProfessorDto,
  ): Promise<CreateProfessorDto | UpdateProfessorDto> {
    return this.itemsRepository.create(item).then((newItem) => {
      return this.mapper.entityToDto(newItem);
    });
  }
  findOne(id: string): Promise<CreateProfessorDto | UpdateProfessorDto> {
    return this.itemsRepository.getById(id).then((item) => {
      return this.mapper.entityToDto(item);
    });
  }
  update(
    id: string,
    item: CreateProfessorDto | UpdateProfessorDto,
  ): Promise<CreateProfessorDto | UpdateProfessorDto> {
    return this.itemsRepository.update(id, item).then((updateItem) => {
      return this.mapper.entityToDto(updateItem);
    });
  }
  delete(id: string): Promise<CreateProfessorDto | UpdateProfessorDto> {
    return this.itemsRepository.delete(id).then(() => {
      return this.findOne(id);
    });
  }
}
