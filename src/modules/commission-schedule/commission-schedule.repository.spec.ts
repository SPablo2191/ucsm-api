import { CommissionScheduleRepository } from './commission-schedule.repository';

describe('CommissionScheduleRepository', () => {
  it('should be defined', () => {
    expect(new CommissionScheduleRepository()).toBeDefined();
  });
});
