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

  findOne(id: string): Promise<CreateStudentDto> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  update(id: string, item: CreateStudentDto): Promise<CreateStudentDto> {
    console.log(id, item);
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<CreateStudentDto> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
}
