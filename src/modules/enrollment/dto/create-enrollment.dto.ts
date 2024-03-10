import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Student } from 'src/modules/student/entities/student.entity';

export class CreateEnrollmentDto {
  @ApiProperty({ description: 'ID of enrollment' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Enrollment associate to subject registrations' })
  @Type(() => AcademicProgram)
  @ValidateNested()
  academic_program: AcademicProgram;

  @ApiProperty({ description: 'Student associated with the enrollment' })
  @Type(() => Student)
  student: Student;

  @ApiProperty({ description: 'Enrollment Code', maxLength: 50 })
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Registration Date' })
  @IsDateString()
  register_date: Date;

  @ApiProperty({ description: 'Update Date' })
  @IsDateString()
  update_date: Date;
  constructor(partial: Partial<CreateEnrollmentDto>) {
    Object.assign(this, partial);
  }
}
