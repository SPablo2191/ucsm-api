import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { UpdateDtoType } from 'src/core/services/base.interface.service';

export class UpdateStudentDto
  extends PartialType(CreateStudentDto)
  implements UpdateDtoType {}
