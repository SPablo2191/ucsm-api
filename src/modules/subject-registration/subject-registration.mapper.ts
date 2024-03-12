import { Injectable } from '@nestjs/common';
import { CreateSubjectRegistrationDto } from './dto/create-subject-registration.dto';
import { UpdateSubjectRegistrationDto } from './dto/update-subject-registration.dto';
import { SubjectRegistration } from './entities/subject-registration.entity';

@Injectable()
export class SubjectRegistrationMapper {
  dtoToEntity(
    subjectRegistrationDTO:
      | CreateSubjectRegistrationDto
      | UpdateSubjectRegistrationDto,
  ): SubjectRegistration {
    return new SubjectRegistration(subjectRegistrationDTO);
  }

  entityToDto(
    subjectRegistrationEntity: SubjectRegistration,
  ): CreateSubjectRegistrationDto | UpdateSubjectRegistrationDto {
    return new CreateSubjectRegistrationDto(subjectRegistrationEntity);
  }
}
