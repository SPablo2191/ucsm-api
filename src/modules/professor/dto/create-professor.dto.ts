import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProfessorDto {
  @ApiProperty({
    description: 'ID of the professor',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'First name of the professor',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    description: 'Middle name of the professor',
    example: 'Doe',
    required: false,
    default: '',
  })
  @IsString()
  middle_name: string;

  @ApiProperty({
    description: 'Last name of the professor',
    example: 'Smith',
  })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description: 'Second last name of the professor',
    example: 'Johnson',
    required: false,
    default: '',
  })
  @IsString()
  second_last_name: string;

  @ApiProperty({
    description: 'Email address of the professor',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Date when the professor was registered',
    example: '2022-02-24',
  })
  @IsDateString()
  register_date: Date;

  constructor(partial: Partial<CreateProfessorDto>) {
    Object.assign(this, partial);
  }
}