import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreatePlanDto {
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
  constructor(partial: Partial<CreatePlanDto>) {
    Object.assign(this, partial);
  }
}
