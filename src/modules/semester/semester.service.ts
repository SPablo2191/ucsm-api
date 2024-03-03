import { Injectable } from '@nestjs/common';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { SemesterRepository } from './semester.repository';
import { SemesterMapper } from './semester.mapper';
import { Semester } from './entities/semester.entity';

@Injectable()
export class SemesterService
  implements BaseService<CreateSemesterDto | UpdateSemesterDto>
{
  constructor(
    private itemsRepository: SemesterRepository,
    private mapper: SemesterMapper,
  ) {}
  async findAll(): Promise<(CreateSemesterDto | UpdateSemesterDto)[]> {
    const items: Semester[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateSemesterDto,
  ): Promise<CreateSemesterDto | UpdateSemesterDto> {
    const newItem: Semester = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreateSemesterDto | UpdateSemesterDto> {
    const item: Semester = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateSemesterDto,
  ): Promise<UpdateSemesterDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateSemesterDto | UpdateSemesterDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
