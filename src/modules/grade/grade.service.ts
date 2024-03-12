import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { GradeRepository } from './grade.repository';
import { GradeMapper } from './grade.mapper';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradeService
  implements BaseService<CreateGradeDto | UpdateGradeDto>
{
  constructor(
    private itemsRepository: GradeRepository,
    private mapper: GradeMapper,
  ) {}
  async findAll(): Promise<(CreateGradeDto | UpdateGradeDto)[]> {
    const items: Grade[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(item: CreateGradeDto): Promise<CreateGradeDto | UpdateGradeDto> {
    const newItem: Grade = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreateGradeDto | UpdateGradeDto> {
    const item: Grade = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(id: string, item: UpdateGradeDto): Promise<UpdateGradeDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateGradeDto | UpdateGradeDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
