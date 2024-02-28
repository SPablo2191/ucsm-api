import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDecimal,
  IsUUID,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { CreateInstallmentDto } from 'src/modules/installment/dto/create-installment.dto';
import { CreateStudentDto } from 'src/modules/student/dto/create-student.dto';
export class CreateDebtDto {
  @ApiProperty({
    description: 'ID of the debt',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Balance of the debt', example: 1000.5 })
  @IsDecimal({ decimal_digits: '2' })
  balance: number;

  @ApiProperty({
    description: 'Date when the debt was registered',
    example: '2022-02-24',
  })
  @IsDateString()
  register_date: Date;
  @ApiProperty({
    description: 'Date when the debt was last updated',
    example: '2022-02-24T12:00:00Z',
  })
  @IsDateString()
  updated_date: Date;
  @ApiProperty({ description: 'Installments associated with the debt' })
  @ValidateNested({ each: true })
  @Type(() => CreateInstallmentDto)
  installments: CreateInstallmentDto[];

  @ApiProperty({ description: 'Student associated with the debt' })
  @Type(() => CreateStudentDto)
  student: CreateStudentDto;
  constructor(partial: Partial<CreateDebtDto>) {
    Object.assign(this, partial);
  }
}
