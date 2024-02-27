/* eslint-disable @typescript-eslint/ban-types */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { StudentRepository } from './student.repository';
import { Student } from './entities/student.entity';
import { StudentMapper } from './student.mapper';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentStatus } from 'src/shared/types/status.types';
import { UpdateStudentDto } from './dto/update-student.dto';

describe('StudentRepository', () => {
  let repository: StudentRepository;
  let repositoryMock: MockType<Repository<Student>>;
  let mapper: StudentMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentRepository,
        StudentMapper,
        {
          provide: getRepositoryToken(Student),
          useFactory: () => repositoryMock,
        },
      ],
    }).compile();

    repository = module.get<StudentRepository>(StudentRepository);
    mapper = module.get<StudentMapper>(StudentMapper);
    repositoryMock = module.get(getRepositoryToken(Student));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getAllStudents', () => {
    it('should return all active students ordered by register_date', async () => {
      const students: Student[] = [{}, {}] as Student[];
      repositoryMock.find.mockReturnValue(Promise.resolve(students));

      const result = await repository.getAllStudents();

      expect(result).toEqual(students);
      expect(repositoryMock.find).toHaveBeenCalledWith({
        order: { register_date: 'DESC' },
        where: { status: StudentStatus.ACTIVE },
      });
    });
  });

  describe('getstudentById', () => {
    it('should return a student by ID', async () => {
      const student: Student = {} as Student;
      const id = '1';
      repositoryMock.findOne.mockReturnValue(Promise.resolve(student));

      const result = await repository.getstudentById(id);

      expect(result).toEqual(student);
      expect(repositoryMock.findOne).toHaveBeenCalledWith({ where: { id } });
    });
  });

  describe('newStudent', () => {
    it('should create a new student', async () => {
      const studentDto: CreateStudentDto = {} as CreateStudentDto;
      const student: Student = {} as Student;
      jest.spyOn(mapper, 'dtoToEntity').mockReturnValue(student);

      await repository.newStudent(studentDto);

      expect(mapper.dtoToEntity).toHaveBeenCalledWith(studentDto);
      expect(repositoryMock.save).toHaveBeenCalledWith(student);
    });
  });

  describe('updateStudent', () => {
    it('should update a student', async () => {
      const id = '1';
      const studentDto: UpdateStudentDto = { id } as UpdateStudentDto;
      const student: Student = {} as Student;
      jest.spyOn(mapper, 'dtoToEntity').mockReturnValue(student);
      repositoryMock.update.mockReturnValue(Promise.resolve());

      await repository.updateStudent(id, studentDto);

      expect(mapper.dtoToEntity).toHaveBeenCalledWith(studentDto);
      expect(repositoryMock.update).toHaveBeenCalledWith(id, student);
      expect(repositoryMock.findOne).toHaveBeenCalledWith({ where: { id } });
    });
  });

  describe('deleteStudent', () => {
    it('should delete a student', async () => {
      const id = '1';
      const deleteResult = {} as DeleteResult;
      repositoryMock.delete.mockReturnValue(Promise.resolve(deleteResult));

      const result = await repository.deleteStudent(id);

      expect(result).toEqual(deleteResult);
      expect(repositoryMock.delete).toHaveBeenCalledWith(id);
    });
  });
});

type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};
