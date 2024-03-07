import { BaseRepository } from 'src/core/classes/repository.base';
import { AcademicProgram } from './entities/academic-program.entity';
import { Repository } from 'typeorm';
import { AcademicProgramMapper } from './academic-program.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAcademicProgramDto } from './dto/update-academic-program.dto';

export class AcademicProgramRepository
  implements BaseRepository<AcademicProgram | UpdateAcademicProgramDto>
{
  constructor(
    @InjectRepository(AcademicProgram)
    private itemsRepository: Repository<AcademicProgram>,
    private mapper: AcademicProgramMapper,
  ) {}
  getAll(): Promise<AcademicProgram[]> {
    return this.itemsRepository.find();
  }
  create(item: AcademicProgram): Promise<AcademicProgram> {
    const newAcademicProgram = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newAcademicProgram);
  }
  getById(id: string): Promise<AcademicProgram> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: UpdateAcademicProgramDto | AcademicProgram,
  ): Promise<AcademicProgram> {
    item.id = id;
    const updateAcademicProgram = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updateAcademicProgram);
  }
  delete(id: string): Promise<AcademicProgram> {
    return this.itemsRepository
      .findOne({ where: { id: id } })
      .then((academicProgram) => {
        return this.itemsRepository.remove(academicProgram);
      });
  }
}
