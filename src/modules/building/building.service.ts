import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { BuildingRepository } from './building.repository';
import { BuildingMapper } from './building.mapper';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingService
  implements BaseService<CreateBuildingDto | UpdateBuildingDto>
{
  constructor(
    private itemsRepository: BuildingRepository,
    private mapper: BuildingMapper,
  ) {}
  async findAll(): Promise<(CreateBuildingDto | UpdateBuildingDto)[]> {
    const items: Building[] = await this.itemsRepository.getAll();
    return items.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateBuildingDto,
  ): Promise<CreateBuildingDto | UpdateBuildingDto> {
    const newItem: Building = await this.itemsRepository.create(item);
    return this.mapper.entityToDto(newItem);
  }
  async findOne(id: string): Promise<CreateBuildingDto | UpdateBuildingDto> {
    const item: Building = await this.itemsRepository.getById(id);
    return this.mapper.entityToDto(item);
  }
  async update(
    id: string,
    item: UpdateBuildingDto,
  ): Promise<UpdateBuildingDto> {
    const updateItem = await this.itemsRepository.update(id, item);
    return this.mapper.entityToDto(updateItem);
  }
  async delete(id: string): Promise<CreateBuildingDto | UpdateBuildingDto> {
    await this.itemsRepository.delete(id);
    return this.findOne(id);
  }
}
