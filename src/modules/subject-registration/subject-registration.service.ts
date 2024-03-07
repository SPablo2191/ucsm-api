import { Injectable } from '@nestjs/common';
import { CreateSubjectRegistrationDto } from './dto/create-subject-registration.dto';
import { UpdateSubjectRegistrationDto } from './dto/update-subject-registration.dto';

@Injectable()
export class SubjectRegistrationService {
  create(createSubjectRegistrationDto: CreateSubjectRegistrationDto) {
    return 'This action adds a new subjectRegistration';
  }

  findAll() {
    return `This action returns all subjectRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subjectRegistration`;
  }

  update(id: number, updateSubjectRegistrationDto: UpdateSubjectRegistrationDto) {
    return `This action updates a #${id} subjectRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} subjectRegistration`;
  }
}
