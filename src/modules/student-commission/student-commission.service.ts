import { Injectable } from '@nestjs/common';
import { CreateStudentCommissionDto } from './dto/create-student-commission.dto';
import { UpdateStudentCommissionDto } from './dto/update-student-commission.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { StudentCommissionRepository } from './student-commission.repository';
import { StudentCommissionMapper } from './student-commission.mapper';
import { StudentCommission } from './entities/student-commission.entity';

@Injectable()
export class StudentCommissionService
  implements
    BaseService<CreateStudentCommissionDto | UpdateStudentCommissionDto>
{
  constructor(
    private itemsRepository: StudentCommissionRepository,
    private mapper: StudentCommissionMapper,
  ) {}
  async findAll(): Promise<
    (CreateStudentCommissionDto | UpdateStudentCommissionDto)[]
  > {
    const items: StudentCommission[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateStudentCommissionDto,
  ): Promise<CreateStudentCommissionDto | UpdateStudentCommissionDto> {
    const newItem: StudentCommission = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateStudentCommissionDto | UpdateStudentCommissionDto> {
    const item: StudentCommission = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateStudentCommissionDto,
  ): Promise<UpdateStudentCommissionDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(
    id: string,
  ): Promise<CreateStudentCommissionDto | UpdateStudentCommissionDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
