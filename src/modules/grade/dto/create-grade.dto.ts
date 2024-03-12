import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { StudentCommission } from 'src/modules/student-commission/entities/student-commission.entity';
import { Phase } from 'src/shared/types/phase.types';

export class CreateGradeDto {
  @ApiProperty({
    description: 'ID of the Grade',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({
    description: 'Commission associated with the grades',
  })
  @Type(() => StudentCommission)
  student_commission: StudentCommission;
  @ApiProperty({
    description: 'phase of grades',
    enum: Phase,
    default: Phase.FIRST,
  })
  @IsEnum(Phase)
  @IsNotEmpty()
  phase: string;
  constructor(partial: Partial<CreateGradeDto>) {
    Object.assign(this, partial);
  }
}
