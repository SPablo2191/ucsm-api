import { Injectable } from '@nestjs/common';
import { Installment } from './entities/installment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InstallmentMapper } from './installment.mapper';
import { Repository } from 'typeorm';
import { BaseRepository } from 'src/core/classes/repository.base';
import { UpdateInstallmentDto } from './dto/update-installment.dto';

@Injectable()
export class InstallmentRepository
  implements BaseRepository<Installment | UpdateInstallmentDto>
{
  constructor(
    @InjectRepository(Installment)
    private installmentsRepository: Repository<Installment>,
    private mapper: InstallmentMapper,
  ) {}
  getAll(): Promise<Installment[]> {
    return this.installmentsRepository.find({
      order: { register_date: 'DESC' },
    });
  }
  create(item: Installment): Promise<Installment> {
    const newInstallment = this.mapper.dtoToEntity(item);
    return this.installmentsRepository.save(newInstallment);
  }
  getById(id: string): Promise<Installment> {
    return this.installmentsRepository.findOne({ where: { id: id } });
  }
  update(
    id: string,
    item: Installment | UpdateInstallmentDto,
  ): Promise<Installment> {
    item.id = id;
    const updateInstallment = this.mapper.dtoToEntity(item);
    return this.installmentsRepository.save(updateInstallment);
  }
  delete(id: string): Promise<Installment> {
    return this.installmentsRepository
      .findOne({ where: { id: id } })
      .then((installment) => {
        return this.installmentsRepository.remove(installment);
      });
  }
}
