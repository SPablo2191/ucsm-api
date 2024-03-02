import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.interface.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import { PlanRepository } from './plan.repository';
import { PlanMapper } from './plan.mapper';

@Injectable()
export class PlanService implements BaseService<CreatePlanDto | UpdatePlanDto> {
  constructor(
    private itemsRepository: PlanRepository,
    private mapper: PlanMapper,
  ) {}
  async findAll(): Promise<(CreatePlanDto | UpdatePlanDto)[]> {
    const items: Plan[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(item: CreatePlanDto): Promise<CreatePlanDto | UpdatePlanDto> {
    const newItem: Plan = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreatePlanDto | UpdatePlanDto> {
    const item: Plan = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(id: string, item: UpdatePlanDto): Promise<UpdatePlanDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreatePlanDto | UpdatePlanDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
