import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCommissionScheduleDto } from './dto/update-commission-schedule.dto';
import { CommissionSchedule } from './entities/commission-schedule.entity';
import { Repository } from 'typeorm';
import { CommissionScheduleMapper } from './commission-schedule.mapper';
import { BaseRepository } from 'src/core/classes/repository.base';

export class CommissionScheduleRepository
  implements BaseRepository<CommissionSchedule | UpdateCommissionScheduleDto>
{
  constructor(
    @InjectRepository(CommissionSchedule)
    private itemsRepository: Repository<CommissionSchedule>,
    private mapper: CommissionScheduleMapper,
  ) {}
  getAll(): Promise<CommissionSchedule[]> {
    return this.itemsRepository.find();
  }
  create(item: CommissionSchedule): Promise<CommissionSchedule> {
    const newCommisionSchedule = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newCommisionSchedule);
  }
  getById(id: string): Promise<CommissionSchedule> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: CommissionSchedule | UpdateCommissionScheduleDto,
  ): Promise<CommissionSchedule> {
    item.id = id;
    const updateCommisionSchedule = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updateCommisionSchedule);
  }
  delete(id: string): Promise<CommissionSchedule> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
