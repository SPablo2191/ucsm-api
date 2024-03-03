import { BaseRepository } from 'src/core/classes/repository.base';
import { Semester } from './entities/semester.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SemesterMapper } from './semester.mapper';
import { Repository } from 'typeorm';
import { UpdateSemesterDto } from './dto/update-semester.dto';

export class SemesterRepository
  implements BaseRepository<Semester | UpdateSemesterDto>
{
  constructor(
    @InjectRepository(Semester)
    private itemsRepository: Repository<Semester>,
    private mapper: SemesterMapper,
  ) {}
  getAll(): Promise<Semester[]> {
    return this.itemsRepository.find();
  }
  create(item: Semester): Promise<Semester> {
    const newSemester = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newSemester);
  }
  getById(id: string): Promise<Semester> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: UpdateSemesterDto | Semester): Promise<Semester> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Semester> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
