import { CommissionRepository } from './commission.repository';

describe('CommissionRepository', () => {
  it('should be defined', () => {
    expect(new CommissionRepository()).toBeDefined();
  });
});
