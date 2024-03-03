import { Test, TestingModule } from '@nestjs/testing';
import { CommissionScheduleService } from './commission-schedule.service';

describe('CommissionScheduleService', () => {
  let service: CommissionScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionScheduleService],
    }).compile();

    service = module.get<CommissionScheduleService>(CommissionScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
