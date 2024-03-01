import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { InstallmentMapper } from './installment.mapper';
import { InstallmentRepository } from './installment.repository';
import { Installment } from './entities/installment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Installment])],
  controllers: [InstallmentController],
  providers: [InstallmentService, InstallmentMapper, InstallmentRepository],
})
export class InstallmentModule {}
