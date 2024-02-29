import { Injectable } from '@nestjs/common';
import { Debt } from './entities/debt.entity';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
@Injectable()
export class DebtMapper {
  dtoToEntity(debtDTO: CreateDebtDto | UpdateDebtDto): Debt {
    return new Debt(debtDTO);
  }

  entityToDto(debtEntity: Debt): CreateDebtDto | UpdateDebtDto {
    return new CreateDebtDto(debtEntity);
  }
}
