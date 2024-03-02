import { BaseRepository } from 'src/core/classes/repository.base';
import { Building } from './entities/building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BuildingMapper } from './building.mapper';
import { Repository } from 'typeorm';
import { UpdateBuildingDto } from './dto/update-building.dto';

export class BuildingRepository
  implements BaseRepository<Building | UpdateBuildingDto>
{
  constructor(
    @InjectRepository(Building)
    private itemsRepository: Repository<Building>,
    private mapper: BuildingMapper,
  ) {}
  getAll(): Promise<Building[]> {
    return this.itemsRepository.find();
  }
  create(item: Building): Promise<Building> {
    const newBuilding = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newBuilding);
  }
  getById(id: string): Promise<Building> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: Building | UpdateBuildingDto,
  ): Promise<Building | UpdateBuildingDto> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Building> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
