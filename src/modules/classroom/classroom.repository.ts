import { BaseRepository } from 'src/core/classes/repository.base';
import { Classroom } from './entities/classroom.entity';
import { Repository } from 'typeorm';
import { ClassroomMapper } from './classroom.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

export class ClassroomRepository
  implements BaseRepository<UpdateClassroomDto | Classroom>
{
  constructor(
    @InjectRepository(Classroom)
    private itemsRepository: Repository<Classroom>,
    private mapper: ClassroomMapper,
  ) {}

  getAll(): Promise<Classroom[]> {
    return this.itemsRepository.find();
  }
  create(item: Classroom): Promise<Classroom> {
    const newClassroom = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newClassroom);
  }
  getById(id: string): Promise<Classroom> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: UpdateClassroomDto | Classroom): Promise<Classroom> {
    item.id = id;
    const updateClassroom = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updateClassroom);
  }
  delete(id: string): Promise<Classroom> {
    return this.itemsRepository
      .findOne({ where: { id: id } })
      .then((classroom) => {
        return this.itemsRepository.remove(classroom);
      });
  }
}
