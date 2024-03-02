import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { Plan } from './entities/plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanMapper } from './plan.mapper';
import { PlanRepository } from './plan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  controllers: [PlanController],
  providers: [PlanService, PlanMapper, PlanRepository],
})
export class PlanModule {}
