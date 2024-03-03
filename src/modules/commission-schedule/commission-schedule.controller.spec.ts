import { Test, TestingModule } from '@nestjs/testing';
import { CommissionScheduleController } from './commission-schedule.controller';
import { CommissionScheduleService } from './commission-schedule.service';

describe('CommissionScheduleController', () => {
  let controller: CommissionScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionScheduleController],
      providers: [CommissionScheduleService],
    }).compile();

    controller = module.get<CommissionScheduleController>(CommissionScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
