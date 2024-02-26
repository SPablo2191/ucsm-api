import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
@Injectable()
export class StudentMapper {
  dtoToEntity(studentDTO: UpdateStudentDto): Student {
    return new Student(studentDTO);
  }

  entityToDto(studentEntity: Student): UpdateStudentDto {
    return new UpdateStudentDto(studentEntity);
  }
}
