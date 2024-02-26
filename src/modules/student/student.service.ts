import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.interface.service';
import { StudentRepository } from './student.repository';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService implements BaseService<CreateStudentDto> {
  constructor(
    private studentsRepository: StudentRepository,
    private mapper: StudentMapper,
  ) {}
  async findAll(): Promise<CreateStudentDto[]> {
    const students: Student[] = await this.studentsRepository.getAllStudents();
    return students.map((record) => this.mapper.entityToDto(record));
  }
  async create(item: CreateStudentDto): Promise<CreateStudentDto> {
    const newStudent: Student = await this.studentsRepository.newStudent(item);
    return this.mapper.entityToDto(newStudent);
  }

  async findOne(id: string): Promise<CreateStudentDto> {
    const student: Student = await this.studentsRepository.getstudentById(id);
    return this.mapper.entityToDto(student);
  }

  async update(id: string, item: CreateStudentDto): Promise<CreateStudentDto> {
    const updateStudent = await this.studentsRepository.updateStudent(id, item);
    return this.mapper.entityToDto(updateStudent);
  }

  async delete(id: string): Promise<CreateStudentDto> {
    await this.studentsRepository.deleteStudent(id);
    return this.findOne(id);
  }
}
