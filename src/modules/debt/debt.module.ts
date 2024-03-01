import { Module } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtController } from './debt.controller';
import { DebtMapper } from './debt.mapper';
import { DebtRepository } from './debt.repository';

@Module({
  controllers: [DebtController],
  providers: [DebtService, DebtMapper, DebtRepository],
})
export class DebtModule {}
