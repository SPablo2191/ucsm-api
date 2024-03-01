import { Injectable } from '@nestjs/common';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { DebtRepository } from './debt.repository';
import { DebtMapper } from './debt.mapper';
import { Debt } from './entities/debt.entity';

@Injectable()
export class DebtService implements BaseService<CreateDebtDto | UpdateDebtDto> {
  constructor(
    private debtsRepository: DebtRepository,
    private mapper: DebtMapper,
  ) {}
  async findAll(): Promise<CreateDebtDto[] | UpdateDebtDto[]> {
    const debts: Debt[] = await this.debtsRepository.getAll();
    return debts.map((record) => this.mapper.entityToDto(record));
  }
  async create(item: CreateDebtDto): Promise<CreateDebtDto | UpdateDebtDto> {
    const newDebt: Debt = await this.debtsRepository.create(item);
    return this.mapper.entityToDto(newDebt);
  }

  async findOne(id: string): Promise<CreateDebtDto | UpdateDebtDto> {
    const debt: Debt = await this.debtsRepository.getById(id);
    return this.mapper.entityToDto(debt);
  }

  async update(id: string, item: UpdateDebtDto): Promise<UpdateDebtDto> {
    const updateDebt = await this.debtsRepository.update(id, item);
    return this.mapper.entityToDto(updateDebt);
  }

  async delete(id: string): Promise<CreateDebtDto | UpdateDebtDto> {
    await this.debtsRepository.delete(id);
    return this.findOne(id);
  }
}
