import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSubjectRegistrationDto } from './dto/update-subject-registration.dto';
import { SubjectRegistration } from './entities/subject-registration.entity';
import { BaseRepository } from 'src/core/classes/repository.base';
import { Repository } from 'typeorm';
import { SubjectRegistrationMapper } from './subject-registration.mapper';

export class SubjectRegistrationRepository
  implements BaseRepository<SubjectRegistration | UpdateSubjectRegistrationDto>
{
  constructor(
    @InjectRepository(SubjectRegistration)
    private itemsRepository: Repository<SubjectRegistration>,
    private mapper: SubjectRegistrationMapper,
  ) {}
  getAll(): Promise<SubjectRegistration[]> {
    return this.itemsRepository.find();
  }
  create(item: SubjectRegistration): Promise<SubjectRegistration> {
    const newSubjectRegistration = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newSubjectRegistration);
  }
  getById(id: string): Promise<SubjectRegistration> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: UpdateSubjectRegistrationDto | SubjectRegistration,
  ): Promise<SubjectRegistration> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<SubjectRegistration> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
