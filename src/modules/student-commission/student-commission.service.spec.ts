import { Test, TestingModule } from '@nestjs/testing';
import { StudentCommissionService } from './student-commission.service';

describe('StudentCommissionService', () => {
  let service: StudentCommissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentCommissionService],
    }).compile();

    service = module.get<StudentCommissionService>(StudentCommissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
