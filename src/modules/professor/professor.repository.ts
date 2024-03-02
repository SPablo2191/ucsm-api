import { BaseRepository } from 'src/core/classes/repository.base';
import { Professor } from './entities/professor.entity';
import { ProfessorMapper } from './professor.mapper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePlanDto } from '../plan/dto/update-plan.dto';

export class ProfessorRepository implements BaseRepository<Professor> {
  constructor(
    @InjectRepository(Professor)
    private itemsRepository: Repository<Professor>,
    private mapper: ProfessorMapper,
  ) {}
  getAll(): Promise<Professor[]> {
    return this.itemsRepository.find({
      order: { register_date: 'DESC' },
    });
  }
  create(item: Professor): Promise<Professor> {
    const newProfessor = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newProfessor);
  }
  getById(id: string): Promise<Professor> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: Professor | UpdatePlanDto): Promise<Professor> {
    item.id = id;
    const updateProfessor = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updateProfessor);
  }
  delete(id: string): Promise<Professor> {
    return this.itemsRepository
      .findOne({ where: { id: id } })
      .then((professor) => {
        return this.itemsRepository.remove(professor);
      });
  }
}
