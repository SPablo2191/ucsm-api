import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Semester } from 'src/modules/semester/entities/semester.entity';

export class CreateSubjectDto {
  @ApiProperty({
    description: 'ID of the Subject',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({
    description: 'Name of the Subject',
    example: 'Human Resources',
  })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'Academic Program associate to subject' })
  @Type(() => AcademicProgram)
  @ValidateNested()
  academic_program: AcademicProgram;

  @ApiProperty({ description: 'Semester associate to subject' })
  @Type(() => Semester)
  @ValidateNested()
  semester: Semester;
  constructor(partial: Partial<CreateSubjectDto>) {
    Object.assign(this, partial);
  }
}
