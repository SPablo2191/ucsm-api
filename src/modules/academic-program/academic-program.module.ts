import { Module } from '@nestjs/common';
import { AcademicProgramService } from './academic-program.service';
import { AcademicProgramController } from './academic-program.controller';

@Module({
  controllers: [AcademicProgramController],
  providers: [AcademicProgramService],
})
export class AcademicProgramModule {}
