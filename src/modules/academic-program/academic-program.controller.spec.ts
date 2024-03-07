import { Test, TestingModule } from '@nestjs/testing';
import { AcademicProgramController } from './academic-program.controller';
import { AcademicProgramService } from './academic-program.service';

describe('AcademicProgramController', () => {
  let controller: AcademicProgramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicProgramController],
      providers: [AcademicProgramService],
    }).compile();

    controller = module.get<AcademicProgramController>(AcademicProgramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
