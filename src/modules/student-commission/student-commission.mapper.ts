import { Injectable } from '@nestjs/common';
import { CreateStudentCommissionDto } from './dto/create-student-commission.dto';
import { UpdateStudentCommissionDto } from './dto/update-student-commission.dto';
import { StudentCommission } from './entities/student-commission.entity';
@Injectable()
export class StudentCommissionMapper {
  dtoToEntity(
    planDTO: CreateStudentCommissionDto | UpdateStudentCommissionDto,
  ): StudentCommission {
    return new StudentCommission(planDTO);
  }

  entityToDto(
    planEntity: StudentCommission,
  ): CreateStudentCommissionDto | UpdateStudentCommissionDto {
    return new CreateStudentCommissionDto(planEntity);
  }
}
