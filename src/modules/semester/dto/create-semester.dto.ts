import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateSemesterDto {
  @ApiProperty({
    description: 'ID of the semester',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Name of the semester', example: 'Spring 2022' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Start date of the semester',
    example: '2022-01-01',
    type: String,
    format: 'date',
  })
  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @ApiProperty({
    description: 'End date of the semester',
    example: '2022-05-31',
    type: String,
    format: 'date',
  })
  @IsDateString()
  @IsNotEmpty()
  end_date: Date;

  constructor(partial: Partial<CreateSemesterDto>) {
    Object.assign(this, partial);
  }
}
