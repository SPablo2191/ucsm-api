import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentCommissionDto } from './create-student-commission.dto';

export class UpdateStudentCommissionDto extends PartialType(CreateStudentCommissionDto) {}
