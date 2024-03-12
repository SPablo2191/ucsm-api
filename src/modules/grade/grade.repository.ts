import { BaseRepository } from 'src/core/classes/repository.base';
import { Grade } from './entities/grade.entity';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Repository } from 'typeorm';
import { GradeMapper } from './grade.mapper';
import { InjectRepository } from '@nestjs/typeorm';

export class GradeRepository implements BaseRepository<Grade | UpdateGradeDto> {
  constructor(
    @InjectRepository(Grade)
    private itemsRepository: Repository<Grade>,
    private mapper: GradeMapper,
  ) {}
  getAll(): Promise<Grade[]> {
    return this.itemsRepository.find();
  }
  create(item: Grade): Promise<Grade> {
    const newGrade = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newGrade);
  }
  getById(id: string): Promise<Grade> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: UpdateGradeDto | Grade): Promise<Grade> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Grade> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
