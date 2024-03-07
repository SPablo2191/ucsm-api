import { Test, TestingModule } from '@nestjs/testing';
import { StudentCommissionController } from './student-commission.controller';
import { StudentCommissionService } from './student-commission.service';

describe('StudentCommissionController', () => {
  let controller: StudentCommissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentCommissionController],
      providers: [StudentCommissionService],
    }).compile();

    controller = module.get<StudentCommissionController>(StudentCommissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
