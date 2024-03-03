import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { Classroom } from 'src/modules/classroom/entities/classroom.entity';
import { CommissionSchedule } from 'src/modules/commission-schedule/entities/commission-schedule.entity';
import { Professor } from 'src/modules/professor/entities/professor.entity';

export class CreateCommissionDto {
  @ApiProperty({
    description: 'ID of the Commission',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({ description: 'Professor associate to commission' })
  @Type(() => Professor)
  @ValidateNested()
  professor: Professor;

  @ApiProperty({ description: 'Classroom associate to commission' })
  @Type(() => Classroom)
  @ValidateNested()
  classroom: Classroom;

  @ApiProperty({ description: 'schedule of commission' })
  @Type(() => CommissionSchedule)
  @ValidateNested()
  commission_schedule: CommissionSchedule;
}
