import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { CreateClassroomDto } from 'src/modules/classroom/dto/create-classroom.dto';

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
  @ApiProperty({ description: 'classrooms associated with the building' })
  @ValidateNested({ each: true })
  @Type(() => CreateClassroomDto)
  classrooms: CreateClassroomDto[];
  constructor(partial: Partial<CreateBuildingDto>) {
    Object.assign(this, partial);
  }
}
