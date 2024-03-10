import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { SubjectMapper } from './subject.mapper';
import { BaseRepository } from 'src/core/classes/repository.base';

export class SubjectRepository
  implements BaseRepository<Subject | UpdateSubjectDto>
{
  constructor(
    @InjectRepository(Subject)
    private itemsRepository: Repository<Subject>,
    private mapper: SubjectMapper,
  ) {}
  getAll(): Promise<Subject[]> {
    return this.itemsRepository.find();
  }
  create(item: Subject): Promise<Subject> {
    const newSubject = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newSubject);
  }
  getById(id: string): Promise<Subject> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: UpdateSubjectDto | Subject): Promise<Subject> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Subject> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
