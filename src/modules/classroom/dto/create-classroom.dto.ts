import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Building } from 'src/modules/building/entities/building.entity';
import { Commission } from 'src/modules/commission/entities/commission.entity';

export class CreateClassroomDto {
  @ApiProperty({
    description: 'ID of the Classroom',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;
  @ApiProperty({
    description: 'Name of the building',
    example: 'Pabellon L',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Building associated with the classroom' })
  @Type(() => Building)
  building: Building;
  @ApiProperty({ description: 'Commissions associated with the classroom' })
  @ValidateNested({ each: true })
  @Type(() => Commission)
  commissions: Commission[];
  constructor(partial: Partial<CreateClassroomDto>) {
    Object.assign(this, partial);
  }
}
