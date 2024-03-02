import { BaseRepository } from 'src/core/classes/repository.base';
import { Plan } from './entities/plan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanMapper } from './plan.mapper';
import { UpdatePlanDto } from './dto/update-plan.dto';

export class PlanRepository implements BaseRepository<Plan | UpdatePlanDto> {
  constructor(
    @InjectRepository(Plan)
    private itemsRepository: Repository<Plan>,
    private mapper: PlanMapper,
  ) {}
  getAll(): Promise<Plan[]> {
    return this.itemsRepository.find({
      order: { register_date: 'DESC' },
    });
  }
  create(item: Plan): Promise<Plan> {
    const newPlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newPlan);
  }
  getById(id: string): Promise<Plan> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: Plan | UpdatePlanDto,
  ): Promise<Plan | UpdatePlanDto> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Plan> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
