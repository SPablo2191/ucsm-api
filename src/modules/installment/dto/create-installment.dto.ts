import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDecimal, IsUUID, IsString, IsDateString } from 'class-validator';
import { UpdateInstallmentDto } from './update-installment.dto';
import { Debt } from 'src/modules/debt/entities/debt.entity';
export class CreateInstallmentDto {
  @ApiProperty({
    description: 'ID of the installment',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({ description: 'Balance of the installment', example: 1000.5 })
  @IsDecimal({ decimal_digits: '2' })
  total_amount: number;

  @ApiProperty({
    description: 'Date when the debt was registered',
    example: '2022-02-24',
  })
  @IsDateString()
  register_date: Date;

  @ApiProperty({
    description: 'amount of the installment paid',
    example: 1000.5,
  })
  @IsDecimal({ decimal_digits: '2' })
  paid_amount: number;

  @ApiProperty({
    description: 'amount of the installment owed',
    example: 1000.5,
  })
  @IsDecimal({ decimal_digits: '2' })
  owed_amount: number;

  @ApiProperty({
    description: 'code of installment',
  })
  @IsString()
  code: string;

  @ApiProperty({ description: 'Debt associated with the isntallment' })
  @Type(() => Debt)
  debt: Debt;
  constructor(partial: Partial<CreateInstallmentDto | UpdateInstallmentDto>) {
    Object.assign(this, partial);
  }
}
