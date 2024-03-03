import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { ClassroomMapper } from './classroom.mapper';
import { ClassroomRepository } from './classroom.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  controllers: [ClassroomController],
  providers: [ClassroomService, ClassroomMapper, ClassroomRepository],
})
export class ClassroomModule {}
