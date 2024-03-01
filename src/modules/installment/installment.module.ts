import { Module } from '@nestjs/common';
import { InstallmentService } from './installment.service';
import { InstallmentController } from './installment.controller';
import { InstallmentMapper } from './installment.mapper';
import { InstallmentRepository } from './installment.repository';

@Module({
  controllers: [InstallmentController],
  providers: [InstallmentService, InstallmentMapper, InstallmentRepository],
})
export class InstallmentModule {}
