import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Enrollment } from 'src/modules/enrollment/entities/enrollment.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';

export class CreateSubjectRegistrationDto {
  @ApiProperty({ description: 'ID of the subject registration' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Subject associate to subject registrations' })
  @Type(() => Subject)
  @ValidateNested()
  subject: Subject;
  @ApiProperty({
    description: 'Final score of the subject registration',
    required: false,
  })
  @IsOptional()
  final_score: number;

  @ApiProperty({
    description: 'Simulated score of the subject registration',
    required: false,
  })
  @IsOptional()
  simulated_score: number;

  @ApiProperty({
    description: 'Date when the subject registration was created',
  })
  @IsDateString()
  register_date: Date;

  @ApiProperty({
    description: 'Date when the subject registration was last updated',
  })
  @IsDateString()
  update_date: Date;
  @ApiProperty({ description: 'Enrollment associate to subject registrations' })
  @Type(() => Enrollment)
  @ValidateNested()
  enrollment: Enrollment;
  constructor(partial: Partial<CreateSubjectRegistrationDto>) {
    Object.assign(this, partial);
  }
}
