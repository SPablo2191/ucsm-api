import { UpdateStudentCommissionDto } from './dto/update-student-commission.dto';
import { StudentCommissionMapper } from './student-commission.mapper';
import { StudentCommission } from './entities/student-commission.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/core/classes/repository.base';
@Injectable()
export class StudentCommissionRepository
  implements BaseRepository<StudentCommission | UpdateStudentCommissionDto>
{
  constructor(
    @InjectRepository(StudentCommission)
    private itemsRepository: Repository<StudentCommission>,
    private mapper: StudentCommissionMapper,
  ) {}
  getAll(): Promise<StudentCommission[]> {
    return this.itemsRepository.find();
  }
  create(item: StudentCommission): Promise<StudentCommission> {
    const newStudentCommission = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newStudentCommission);
  }
  getById(id: string): Promise<StudentCommission> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: UpdateStudentCommissionDto | StudentCommission,
  ): Promise<StudentCommission> {
    item.id = id;
    const updatePlan = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updatePlan);
  }
  delete(id: string): Promise<StudentCommission> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
