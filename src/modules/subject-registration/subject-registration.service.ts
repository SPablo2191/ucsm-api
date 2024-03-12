import { Injectable } from '@nestjs/common';
import { CreateSubjectRegistrationDto } from './dto/create-subject-registration.dto';
import { UpdateSubjectRegistrationDto } from './dto/update-subject-registration.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { SubjectRegistrationRepository } from './subject-registration.repository';
import { SubjectRegistrationMapper } from './subject-registration.mapper';
import { SubjectRegistration } from './entities/subject-registration.entity';

@Injectable()
export class SubjectRegistrationService
  implements
    BaseService<CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto>
{
  constructor(
    private itemsRepository: SubjectRegistrationRepository,
    private mapper: SubjectRegistrationMapper,
  ) {}
  async findAll(): Promise<
    (CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto)[]
  > {
    const items: SubjectRegistration[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateSubjectRegistrationDto,
  ): Promise<CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto> {
    const newItem: SubjectRegistration =
      await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto> {
    const item: SubjectRegistration = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateSubjectRegistrationDto,
  ): Promise<UpdateSubjectRegistrationDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(
    id: string,
  ): Promise<CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
