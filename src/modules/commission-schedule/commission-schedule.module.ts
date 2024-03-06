import { Module } from '@nestjs/common';
import { CommissionScheduleService } from './commission-schedule.service';
import { CommissionScheduleController } from './commission-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommissionSchedule } from './entities/commission-schedule.entity';
import { CommissionScheduleMapper } from './commission-schedule.mapper';
import { CommissionScheduleRepository } from './commission-schedule.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CommissionSchedule])],
  controllers: [CommissionScheduleController],
  providers: [
    CommissionScheduleService,
    CommissionScheduleMapper,
    CommissionScheduleRepository,
  ],
})
export class CommissionScheduleModule {}
