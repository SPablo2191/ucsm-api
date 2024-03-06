import { Module } from '@nestjs/common';
import { CommissionService } from './commission.service';
import { CommissionController } from './commission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commission } from './entities/commission.entity';
import { CommissionMapper } from './commission.mapper';
import { CommissionRepository } from './commission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Commission])],
  controllers: [CommissionController],
  providers: [CommissionService, CommissionMapper, CommissionRepository],
})
export class CommissionModule {}
