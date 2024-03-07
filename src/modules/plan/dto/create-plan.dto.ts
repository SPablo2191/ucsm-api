import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateAcademicProgramDto } from 'src/modules/academic-program/dto/create-academic-program.dto';

export class CreatePlanDto {
  @ApiProperty({
    description: 'ID of the plan',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({ description: 'Start year of the plan', example: '2022-01-01' })
  @IsDateString()
  @IsNotEmpty()
  start_year: Date;

  @ApiProperty({ description: 'End year of the plan', example: '2023-12-31' })
  @IsDateString()
  @IsNotEmpty()
  end_year: Date;

  @ApiProperty({
    description: 'Name of the plan',
    example: '2022-2023 Academic Year',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: 'Date when the plan was registered',
    example: '2022-02-24',
  })
  @IsDateString()
  register_date: Date;
  @ApiProperty({ description: 'Academic Programs associated with the Plan' })
  @ValidateNested({ each: true })
  @Type(() => CreateAcademicProgramDto)
  academic_programs: CreateAcademicProgramDto[];
  constructor(partial: Partial<CreatePlanDto>) {
    Object.assign(this, partial);
  }
}
