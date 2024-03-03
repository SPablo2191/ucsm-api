import { Module } from '@nestjs/common';
import { CommissionScheduleService } from './commission-schedule.service';
import { CommissionScheduleController } from './commission-schedule.controller';

@Module({
  controllers: [CommissionScheduleController],
  providers: [CommissionScheduleService],
})
export class CommissionScheduleModule {}
