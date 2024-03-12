import { Module } from '@nestjs/common';
import { StudentCommissionService } from './student-commission.service';
import { StudentCommissionController } from './student-commission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCommission } from './entities/student-commission.entity';
import { StudentCommissionMapper } from './student-commission.mapper';
import { StudentCommissionRepository } from './student-commission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCommission])],
  controllers: [StudentCommissionController],
  providers: [
    StudentCommissionService,
    StudentCommissionMapper,
    StudentCommissionRepository,
  ],
})
export class StudentCommissionModule {}
