import { StudentMapper } from './student.mapper';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

describe('StudentMapper', () => {
  let mapper: StudentMapper;

  beforeEach(() => {
    mapper = new StudentMapper();
  });

  describe('dtoToEntity', () => {
    it('should convert CreateStudentDto to Student entity', () => {
      const createStudentDto: CreateStudentDto = {
        id: '1',
        first_name: 'John',
        middle_name: 'Adam',
        last_name: 'Doe',
        second_last_name: 'Smith',
        birth_date: new Date('2000-01-01'),
        email: 'john@example.com',
        phone_number: '1234567890',
        address: '123 Main St',
        identification_document: 'ABC123',
        password: 'Password123',
      };

      const result: Student = mapper.dtoToEntity(createStudentDto);

      expect(result).toBeInstanceOf(Student);
      expect(result.id).toBe('1');
      expect(result.first_name).toBe('John');
      expect(result.middle_name).toBe('Adam');
      expect(result.last_name).toBe('Doe');
      expect(result.second_last_name).toBe('Smith');
      expect(result.birth_date).toEqual(new Date('01/01/2000'));
      expect(result.register_date).toEqual(new Date('01/01/2022'));
      expect(result.email).toBe('john@example.com');
      expect(result.phone_number).toBe('1234567890');
      expect(result.address).toBe('123 Main St');
      expect(result.identification_document).toBe('ABC123');
      expect(result.password).toBe('Password123');
    });

    it('should convert UpdateStudentDto to Student entity', () => {
      const updateStudentDto: UpdateStudentDto = {
        id: '1',
        first_name: 'Jane',
        middle_name: 'Eve',
        last_name: 'Smith',
        second_last_name: 'Doe',
        birth_date: new Date('01/01/2001'),
        email: 'jane@example.com',
        phone_number: '9876543210',
        address: '456 Elm St',
        identification_document: 'XYZ789',
        password: 'Password456',
      };

      const result: Student = mapper.dtoToEntity(updateStudentDto);

      expect(result).toBeInstanceOf(Student);
      expect(result.id).toBe('1');
      expect(result.first_name).toBe('Jane');
      expect(result.middle_name).toBe('Eve');
      expect(result.last_name).toBe('Smith');
      expect(result.second_last_name).toBe('Doe');
      expect(result.birth_date).toEqual(new Date('01/01/2000'));
      expect(result.register_date).toEqual(new Date('01/01/2023'));
      expect(result.email).toBe('jane@example.com');
      expect(result.phone_number).toBe('9876543210');
      expect(result.address).toBe('456 Elm St');
      expect(result.identification_document).toBe('XYZ789');
      expect(result.password).toBe('Password456');
    });
  });

  describe('entityToDto', () => {
    it('should convert Student entity to CreateStudentDto', () => {
      const student: Student = {
        id: '1',
        first_name: 'John',
        middle_name: 'Adam',
        last_name: 'Doe',
        second_last_name: 'Smith',
        birth_date: new Date('01/01/2000'),
        register_date: new Date('01/01/2022'),
        email: 'john@example.com',
        phone_number: '1234567890',
        address: '123 Main St',
        identification_document: 'ABC123',
        password: 'Password123',
        status: 'ACTIVE',
      };

      const result: CreateStudentDto | UpdateStudentDto =
        mapper.entityToDto(student);

      expect(result).toBeInstanceOf(CreateStudentDto);
      expect(result.id).toBe('1');
      expect(result.first_name).toBe('John');
      expect(result.middle_name).toBe('Adam');
      expect(result.last_name).toBe('Doe');
      expect(result.second_last_name).toBe('Smith');
      expect(result.birth_date).toEqual(new Date('01/01/2000'));
      expect(result.email).toBe('john@example.com');
      expect(result.phone_number).toBe('1234567890');
      expect(result.address).toBe('123 Main St');
      expect(result.identification_document).toBe('ABC123');
      expect(result.password).toBe('Password123');
    });

    it('should convert Student entity to UpdateStudentDto', () => {
      const student: Student = {
        id: '1',
        first_name: 'Jane',
        middle_name: 'Eve',
        last_name: 'Smith',
        second_last_name: 'Doe',
        birth_date: new Date('01/01/2001'),
        register_date: new Date('01/01/2023'),
        email: 'jane@example.com',
        phone_number: '9876543210',
        address: '456 Elm St',
        identification_document: 'XYZ789',
        password: 'Password456',
        status: 'ACTIVE',
      };

      const result: UpdateStudentDto = mapper.entityToDto(student);

      expect(result).toBeInstanceOf(UpdateStudentDto);
      expect(result.id).toBe('1');
      expect(result.first_name).toBe('Jane');
      expect(result.middle_name).toBe('Eve');
      expect(result.last_name).toBe('Smith');
      expect(result.second_last_name).toBe('Doe');
      expect(result.birth_date).toEqual(new Date('01/01/2001'));
      expect(result.email).toBe('jane@example.com');
      expect(result.phone_number).toBe('9876543210');
      expect(result.address).toBe('456 Elm St');
      expect(result.identification_document).toBe('XYZ789');
      expect(result.password).toBe('Password456');
    });
  });
});
