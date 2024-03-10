import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { EnrollmentRepository } from './enrollment.repository';
import { EnrollmentMapper } from './enrollment.mapper';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentService
  implements BaseService<CreateEnrollmentDto | UpdateEnrollmentDto>
{
  constructor(
    private itemsRepository: EnrollmentRepository,
    private mapper: EnrollmentMapper,
  ) {}
  async findAll(): Promise<(CreateEnrollmentDto | UpdateEnrollmentDto)[]> {
    const items: Enrollment[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateEnrollmentDto,
  ): Promise<CreateEnrollmentDto | UpdateEnrollmentDto> {
    const newItem: Enrollment = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateEnrollmentDto | UpdateEnrollmentDto> {
    const item: Enrollment = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateEnrollmentDto,
  ): Promise<UpdateEnrollmentDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateEnrollmentDto | UpdateEnrollmentDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
