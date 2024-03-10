import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { Subject } from './entities/subject.entity';
import { SubjectRepository } from './subject.repository';
import { SubjectMapper } from './subject.mapper';

@Injectable()
export class SubjectService
  implements BaseService<CreateSubjectDto | UpdateSubjectDto>
{
  constructor(
    private itemsRepository: SubjectRepository,
    private mapper: SubjectMapper,
  ) {}
  async findAll(): Promise<(CreateSubjectDto | UpdateSubjectDto)[]> {
    const items: Subject[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateSubjectDto,
  ): Promise<CreateSubjectDto | UpdateSubjectDto> {
    const newItem: Subject = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreateSubjectDto | UpdateSubjectDto> {
    const item: Subject = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(id: string, item: UpdateSubjectDto): Promise<UpdateSubjectDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateSubjectDto | UpdateSubjectDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
