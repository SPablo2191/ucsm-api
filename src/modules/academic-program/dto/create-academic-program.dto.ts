import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsUUID, IsString, IsNotEmpty } from 'class-validator';
export class CreateAcademicProgramDto {
  @ApiProperty({
    description: 'ID of the Academic Program',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({
    description: 'Name of the academic program',
    example: 'Computer Science',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Code of the academic program',
    example: 'CS101',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Associated plan for the academic program' })
  @Type(() => Debt)
  plan: Plan;
  constructor(partial: Partial<CreateAcademicProgramDto>) {
    Object.assign(this, partial);
  }
}
