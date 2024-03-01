import { BaseRepository } from 'src/core/classes/repository.base';
import { Debt } from './entities/debt.entity';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DebtMapper } from './debt.mapper';
@Injectable()
export class DebtRepository implements BaseRepository<Debt | UpdateDebtDto> {
  constructor(
    @InjectRepository(Debt)
    private debtsRepository: Repository<Debt>,
    private mapper: DebtMapper,
  ) {}
  getAll(): Promise<Debt[]> {
    return this.debtsRepository.find({
      order: { register_date: 'DESC' },
    });
  }
  create(item: Debt): Promise<Debt> {
    const newDebt = this.mapper.dtoToEntity(item);
    return this.debtsRepository.save(newDebt);
  }
  getById(id: string): Promise<Debt> {
    return this.debtsRepository.findOne({ where: { id: id } });
  }
  update(id: string, item: Debt | UpdateDebtDto): Promise<Debt> {
    item.id = id;
    const updateDebt = this.mapper.dtoToEntity(item);
    return this.debtsRepository.save(updateDebt);
  }
  delete(id: string): Promise<Debt | UpdateDebtDto> {
    return this.debtsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.debtsRepository.remove(debt);
    });
  }
}
