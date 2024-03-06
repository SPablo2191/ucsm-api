import { CreateCommissionScheduleDto } from './dto/create-commission-schedule.dto';
import { UpdateCommissionScheduleDto } from './dto/update-commission-schedule.dto';
import { CommissionSchedule } from './entities/commission-schedule.entity';

export class CommissionScheduleMapper {
  dtoToEntity(
    commissionScheduleDTO:
      | CreateCommissionScheduleDto
      | UpdateCommissionScheduleDto,
  ): CommissionSchedule {
    return new CommissionSchedule(commissionScheduleDTO);
  }

  entityToDto(
    commissionScheduleEntity: CommissionSchedule,
  ): CreateCommissionScheduleDto | UpdateCommissionScheduleDto {
    return new CreateCommissionScheduleDto(commissionScheduleEntity);
  }
}
