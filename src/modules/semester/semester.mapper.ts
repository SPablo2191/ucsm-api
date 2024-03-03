import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { Semester } from './entities/semester.entity';

export class SemesterMapper {
  dtoToEntity(SemesterDTO: CreateSemesterDto | UpdateSemesterDto): Semester {
    return new Semester(SemesterDTO);
  }

  entityToDto(SemesterEntity: Semester): CreateSemesterDto | UpdateSemesterDto {
    return new CreateSemesterDto(SemesterEntity);
  }
}
