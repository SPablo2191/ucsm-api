import { Test, TestingModule } from '@nestjs/testing';
import { SubjectRegistrationController } from './subject-registration.controller';
import { SubjectRegistrationService } from './subject-registration.service';

describe('SubjectRegistrationController', () => {
  let controller: SubjectRegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectRegistrationController],
      providers: [SubjectRegistrationService],
    }).compile();

    controller = module.get<SubjectRegistrationController>(SubjectRegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
