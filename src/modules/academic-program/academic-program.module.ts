import { Module } from '@nestjs/common';
import { AcademicProgramService } from './academic-program.service';
import { AcademicProgramController } from './academic-program.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcademicProgram } from './entities/academic-program.entity';
import { AcademicProgramMapper } from './academic-program.mapper';
import { AcademicProgramRepository } from './academic-program.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AcademicProgram])],
  controllers: [AcademicProgramController],
  providers: [
    AcademicProgramService,
    AcademicProgramMapper,
    AcademicProgramRepository,
  ],
})
export class AcademicProgramModule {}
