import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { ClassroomRepository } from './classroom.repository';
import { ClassroomMapper } from './classroom.mapper';
import { Classroom } from './entities/classroom.entity';
import { BaseService } from 'src/core/services/base.interface.service';

@Injectable()
export class ClassroomService
  implements BaseService<CreateClassroomDto | UpdateClassroomDto>
{
  constructor(
    private itemsRepository: ClassroomRepository,
    private mapper: ClassroomMapper,
  ) {}
  async findAll(): Promise<(CreateClassroomDto | UpdateClassroomDto)[]> {
    const items: Classroom[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateClassroomDto,
  ): Promise<CreateClassroomDto | UpdateClassroomDto> {
    const newItem: Classroom = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreateClassroomDto | UpdateClassroomDto> {
    const item: Classroom = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateClassroomDto,
  ): Promise<UpdateClassroomDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateClassroomDto | UpdateClassroomDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
