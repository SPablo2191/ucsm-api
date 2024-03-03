import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Building } from 'src/modules/building/entities/building.entity';

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
  constructor(partial: Partial<CreateClassroomDto>) {
    Object.assign(this, partial);
  }
}
