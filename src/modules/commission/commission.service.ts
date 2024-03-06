import { Injectable } from '@nestjs/common';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { CommissionRepository } from './commission.repository';
import { CommissionMapper } from './commission.mapper';
import { Commission } from './entities/commission.entity';

@Injectable()
export class CommissionService
  implements BaseService<CreateCommissionDto | UpdateCommissionDto>
{
  constructor(
    private itemsRepository: CommissionRepository,
    private mapper: CommissionMapper,
  ) {}
  async findAll(): Promise<(CreateCommissionDto | UpdateCommissionDto)[]> {
    const items: Commission[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateCommissionDto,
  ): Promise<CreateCommissionDto | UpdateCommissionDto> {
    const newItem: Commission = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(
    id: string,
  ): Promise<CreateCommissionDto | UpdateCommissionDto> {
    const item: Commission = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateCommissionDto,
  ): Promise<UpdateCommissionDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateCommissionDto | UpdateCommissionDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
