import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeController } from './grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { GradeMapper } from './grade.mapper';
import { GradeRepository } from './grade.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Grade])],
  controllers: [GradeController],
  providers: [GradeService, GradeMapper, GradeRepository],
})
export class GradeModule {}
