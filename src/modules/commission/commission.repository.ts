import { BaseRepository } from 'src/core/classes/repository.base';
import { Commission } from './entities/commission.entity';
import { UpdateCommissionDto } from './dto/update-commission.dto';
import { CommissionMapper } from './commission.mapper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
export class CommissionRepository
  implements BaseRepository<Commission | UpdateCommissionDto>
{
  constructor(
    @InjectRepository(Commission)
    private itemsRepository: Repository<Commission>,
    private mapper: CommissionMapper,
  ) {}
  getAll(): Promise<Commission[]> {
    return this.itemsRepository.find();
  }
  create(item: Commission): Promise<Commission> {
    const newCommision = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(newCommision);
  }
  getById(id: string): Promise<Commission> {
    return this.itemsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: Commission | UpdateCommissionDto,
  ): Promise<Commission> {
    item.id = id;
    const updateCommision = this.mapper.dtoToEntity(item);
    return this.itemsRepository.save(updateCommision);
  }
  delete(id: string): Promise<Commission> {
    return this.itemsRepository.findOne({ where: { id: id } }).then((debt) => {
      return this.itemsRepository.remove(debt);
    });
  }
}
