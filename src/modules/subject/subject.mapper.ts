import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

export class SubjectMapper {
  dtoToEntity(subjectDTO: CreateSubjectDto | UpdateSubjectDto): Subject {
    return new Subject(subjectDTO);
  }

  entityToDto(subjectEntity: Subject): CreateSubjectDto | UpdateSubjectDto {
    return new CreateSubjectDto(subjectEntity);
  }
}
