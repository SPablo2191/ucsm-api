import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';

export class EnrollmentMapper {
  dtoToEntity(
    enrollmentDTO: CreateEnrollmentDto | UpdateEnrollmentDto,
  ): Enrollment {
    return new Enrollment(enrollmentDTO);
  }

  entityToDto(
    enrollmentEntity: Enrollment,
  ): CreateEnrollmentDto | UpdateEnrollmentDto {
    return new CreateEnrollmentDto(enrollmentEntity);
  }
}
