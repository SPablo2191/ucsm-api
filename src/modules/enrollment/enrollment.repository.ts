import { BaseRepository } from 'src/core/classes/repository.base';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EnrollmentMapper } from './enrollment.mapper';
import { Repository } from 'typeorm';

export class EnrollmentRepository
  implements BaseRepository<Enrollment | UpdateEnrollmentDto>
{
  constructor(
    @InjectRepository(Enrollment)
    private itemsRepository: Repository<Enrollment>,
    private mapper: EnrollmentMapper,
  ) {}
  getAll(): Promise<Enrollment[]> {
    return this.itemsRepository.find();
  }
  create(item: Enrollment): Promise<Enrollment> {
    const newEnrollment = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newEnrollment);
  }
  getById(id: string): Promise<Enrollment> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: UpdateEnrollmentDto | Enrollment,
  ): Promise<Enrollment> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<Enrollment> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
