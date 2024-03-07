import { Injectable } from '@nestjs/common';
import { CreateAcademicProgramDto } from './dto/create-academic-program.dto';
import { UpdateAcademicProgramDto } from './dto/update-academic-program.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { AcademicProgramRepository } from './academic-program.repository';
import { AcademicProgramMapper } from './academic-program.mapper';
import { AcademicProgram } from './entities/academic-program.entity';

@Injectable()
export class AcademicProgramService
  implements BaseService<CreateAcademicProgramDto | UpdateAcademicProgramDto>
{
  constructor(
    private itemsRepository: AcademicProgramRepository,
    private mapper: AcademicProgramMapper,
  ) {}
  async findAll(): Promise<
    (CreateAcademicProgramDto | UpdateAcademicProgramDto)[]
  > {
    const items: AcademicProgram[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateAcademicProgramDto,
  ): Promise<CreateAcademicProgramDto | UpdateAcademicProgramDto> {
    const newItem: AcademicProgram = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateAcademicProgramDto | UpdateAcademicProgramDto> {
    const item: AcademicProgram = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateAcademicProgramDto,
  ): Promise<UpdateAcademicProgramDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(
    id: string,
  ): Promise<CreateAcademicProgramDto | UpdateAcademicProgramDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
