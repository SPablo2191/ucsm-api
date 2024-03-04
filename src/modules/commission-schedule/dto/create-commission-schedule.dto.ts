import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Days } from 'src/shared/types/days.types';

export class CreateCommissionScheduleDto {
  @ApiProperty({
    description: 'ID of the Commission Schedule',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Start time of the commission',
    example: '08:00:00',
  })
  @IsString()
  @IsNotEmpty()
  start_time: string;

  @ApiProperty({
    description: 'End time of the commission',
    example: '10:00:00',
  })
  @IsString()
  @IsNotEmpty()
  end_time: string;

  @ApiProperty({
    description: 'Day of the week of the commission',
    enum: Days,
    default: Days.MONDAY,
  })
  @IsEnum(Days)
  @IsNotEmpty()
  day: string;
  constructor(partial: Partial<CreateCommissionScheduleDto>) {
    Object.assign(this, partial);
  }
}
