import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBuildingDto {
  @ApiProperty({
    description: 'ID of the building',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Name of the building',
    example: 'Pabellon L',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(partial: Partial<CreateBuildingDto>) {
    Object.assign(this, partial);
  }
}
