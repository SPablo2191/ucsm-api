import { Module } from '@nestjs/common';
import { StudentCommissionService } from './student-commission.service';
import { StudentCommissionController } from './student-commission.controller';

@Module({
  controllers: [StudentCommissionController],
  providers: [StudentCommissionService],
})
export class StudentCommissionModule {}
