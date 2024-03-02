import { ProfessorRepository } from './professor.repository';

describe('ProfessorRepository', () => {
  it('should be defined', () => {
    expect(new ProfessorRepository()).toBeDefined();
  });
});
