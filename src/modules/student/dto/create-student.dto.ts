import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { dateRegEx } from 'src/core/consts/date.regex';
import { passwordRegEx } from 'src/core/consts/password.regex';

export class CreateStudentDto {
  @ApiProperty({
    description: 'Id Student',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  id: string;
  @ApiProperty({
    description: 'The first name of the student',
    minLength: 2,
    type: String,
  })
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({
    description: 'The middle name of the student',
    required: false,
    default: '',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  middle_name: string;

  @ApiProperty({ description: 'The last name of the student', type: String })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({
    description: 'The second last name of the student',
    required: false,
    default: '',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  second_last_name: string;

  @ApiProperty({
    description: 'The birth date of the student in YYYY-MM-DD format',
    type: String,
  })
  @IsString()
  @Matches(dateRegEx, {
    message: 'Birth date must be in YYYY-MM-DD format',
  })
  birth_date: Date;

  @ApiProperty({
    description: 'The email address of the student',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The phone number of the student', type: String })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({ description: 'The address of the student', type: String })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'The identification document of the student',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  identification_document: string;

  @ApiProperty({ description: 'The password of the student', type: String })
  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;
  @ApiProperty({
    description: 'Role of user',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  role: string;
  constructor(partial: Partial<CreateStudentDto>) {
    Object.assign(this, partial);
  }
}
