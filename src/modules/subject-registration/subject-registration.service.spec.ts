import { Test, TestingModule } from '@nestjs/testing';
import { SubjectRegistrationService } from './subject-registration.service';

describe('SubjectRegistrationService', () => {
  let service: SubjectRegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectRegistrationService],
    }).compile();

    service = module.get<SubjectRegistrationService>(SubjectRegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
