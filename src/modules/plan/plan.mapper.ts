import { Injectable } from '@nestjs/common';
import { Plan } from './entities/plan.entity';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { CreatePlanDto } from './dto/create-plan.dto';

@Injectable()
export class PlanMapper {
  dtoToEntity(planDTO: CreatePlanDto | UpdatePlanDto): Plan {
    return new Plan(planDTO);
  }

  entityToDto(planEntity: Plan): CreatePlanDto | UpdatePlanDto {
    return new CreatePlanDto(planEntity);
  }
}
