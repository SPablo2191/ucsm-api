import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentStatus } from 'src/shared/types/status.types';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    private mapper: StudentMapper,
  ) {}
  getAllStudents(): Promise<Student[]> {
    return this.studentsRepository.find({
      order: { register_date: 'DESC' },
      where: { status: StudentStatus.ACTIVE },
    });
  }

  getstudentById(studentId: string): Promise<Student> {
    return this.studentsRepository.findOne({ where: { id: studentId } });
  }

  newStudent(studentDTO: CreateStudentDto): Promise<Student> {
    const newstudent = this.mapper.dtoToEntity(studentDTO);
    return this.studentsRepository.save(newstudent);
  }

  async updateStudent(
    id: string,
    studentDTO: UpdateStudentDto,
  ): Promise<Student> {
    studentDTO.id = id;
    const updatestudent = this.mapper.dtoToEntity(studentDTO);
    await this.studentsRepository.update(id, updatestudent);
    return this.studentsRepository.findOne({ where: { id: id } });
  }

  deleteStudent(id: string): Promise<DeleteResult> {
    return this.studentsRepository.delete(id);
  }
}
