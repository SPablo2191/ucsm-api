import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a student', async () => {
      const createStudentDto: CreateStudentDto = {
        id: '1',
        first_name: 'John',
        middle_name: 'Doe',
        last_name: 'Smith',
        second_last_name: '',
        birth_date: new Date('1990-01-01'),
        email: 'john@example.com',
        phone_number: '1234567890',
        address: '123 Main St',
        identification_document: '123456789',
        password: 'Password123!',
      };
      const expectedResult = createStudentDto;

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      expect(await controller.create(createStudentDto)).toBe(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of students', async () => {
      const students = [{ id: '1', first_name: 'John' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(students);

      expect(await controller.findAll()).toBe(students);
    });
  });

  describe('findOne', () => {
    it('should return a student by id', async () => {
      const id = '1';
      const student = { id: '1', first_name: 'John' };
      jest.spyOn(service, 'findOne').mockResolvedValue(student);

      expect(await controller.findOne(id)).toBe(student);
    });
  });

  describe('update', () => {
    it('should update a student by id', async () => {
      const id = '1';
      const updateStudentDto: CreateStudentDto = {
        id: '1',
        first_name: 'Jane',
        middle_name: 'Doe',
        last_name: 'Smith',
        second_last_name: '',
        birth_date: new Date('1990-01-01'),
        email: 'jane@example.com',
        phone_number: '1234567890',
        address: '123 Main St',
        identification_document: '123456789',
        password: 'Password123!',
      };
      const updatedStudent = { id: '1', first_name: 'Jane' };
      jest.spyOn(service, 'update').mockResolvedValue(updatedStudent);

      expect(await controller.update(id, updateStudentDto)).toBe(
        updatedStudent,
      );
    });
  });

  describe('delete', () => {
    it('should delete a student by id', async () => {
      const id = '1';
      const deletedStudent = { id: '1', first_name: 'John' };
      jest.spyOn(service, 'delete').mockResolvedValue(deletedStudent);

      expect(await controller.delete(id)).toBe(deletedStudent);
    });
  });
});
