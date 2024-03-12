import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { Commission } from 'src/modules/commission/entities/commission.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';

export class CreateStudentCommissionDto {
  @ApiProperty({
    description: 'ID of the StudentCommission',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({
    description: 'Commission associated with the StudentCommission',
  })
  @Type(() => Commission)
  commission: Commission;
  @ApiProperty({
    description: 'SubjectRegistration associated with the StudentCommission',
  })
  @Type(() => SubjectRegistration)
  subject_registration: SubjectRegistration;
  constructor(partial: Partial<CreateStudentCommissionDto>) {
    Object.assign(this, partial);
  }
}
