import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingMapper {
  dtoToEntity(planDTO: CreateBuildingDto | UpdateBuildingDto): Building {
    return new Building(planDTO);
  }

  entityToDto(planEntity: Building): CreateBuildingDto | UpdateBuildingDto {
    return new CreateBuildingDto(planEntity);
  }
}
