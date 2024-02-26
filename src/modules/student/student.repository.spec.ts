import { StudentRepository } from './student.repository';

describe('StudentRepository', () => {
  it('should be defined', () => {
    expect(new StudentRepository()).toBeDefined();
  });
});
