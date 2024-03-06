import { Injectable } from '@nestjs/common';
import { CreateCommissionScheduleDto } from './dto/create-commission-schedule.dto';
import { UpdateCommissionScheduleDto } from './dto/update-commission-schedule.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { CommissionScheduleMapper } from './commission-schedule.mapper';
import { CommissionScheduleRepository } from './commission-schedule.repository';
import { CommissionSchedule } from './entities/commission-schedule.entity';

@Injectable()
export class CommissionScheduleService
  implements
    BaseService<CreateCommissionScheduleDto | UpdateCommissionScheduleDto>
{
  constructor(
    private itemsRepository: CommissionScheduleRepository,
    private mapper: CommissionScheduleMapper,
  ) {}
  async findAll(): Promise<
    (CreateCommissionScheduleDto | UpdateCommissionScheduleDto)[]
  > {
    const items: CommissionSchedule[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateCommissionScheduleDto,
  ): Promise<CreateCommissionScheduleDto | UpdateCommissionScheduleDto> {
    const newItem: CommissionSchedule = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateCommissionScheduleDto | UpdateCommissionScheduleDto> {
    const item: CommissionSchedule = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateCommissionScheduleDto,
  ): Promise<UpdateCommissionScheduleDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(
    id: string,
  ): Promise<CreateCommissionScheduleDto | UpdateCommissionScheduleDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
