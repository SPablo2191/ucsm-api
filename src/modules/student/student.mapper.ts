import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
@Injectable()
export class StudentMapper {
  dtoToEntity(studentDTO: CreateStudentDto | UpdateStudentDto): Student {
    return new Student(studentDTO);
  }

  entityToDto(studentEntity: Student): CreateStudentDto | UpdateStudentDto {
    return new CreateStudentDto(studentEntity);
  }
}
