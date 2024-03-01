import { Module } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtController } from './debt.controller';
import { DebtMapper } from './debt.mapper';
import { DebtRepository } from './debt.repository';
import { Debt } from './entities/debt.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Debt])],
  controllers: [DebtController],
  providers: [DebtService, DebtMapper, DebtRepository],
})
export class DebtModule {}
