import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectRegistrationDto } from './create-subject-registration.dto';

export class UpdateSubjectRegistrationDto extends PartialType(CreateSubjectRegistrationDto) {}
