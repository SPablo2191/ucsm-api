import { DebtRepository } from './debt.repository';

describe('DebtRepository', () => {
  it('should be defined', () => {
    expect(new DebtRepository()).toBeDefined();
  });
});
