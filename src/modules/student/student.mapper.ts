import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
@Injectable()
export class StudentMapper {
  dtoToEntity(studentDTO: CreateStudentDto): Student {
    return new Student(studentDTO);
  }

  entityToDto(studentEntity: Student): CreateStudentDto {
    return new CreateStudentDto(studentEntity);
  }
}
