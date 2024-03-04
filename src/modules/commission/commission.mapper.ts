import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
import { Commission } from './entities/commission.entity';

export class CommissionMapper {
  dtoToEntity(
    commissionDTO: CreateCommissionDto | UpdateCommissionDto,
  ): Commission {
    return new Commission(commissionDTO);
  }

  entityToDto(
    commissionEntity: Commission,
  ): CreateCommissionDto | UpdateCommissionDto {
    return new CreateCommissionDto(commissionEntity);
  }
}
