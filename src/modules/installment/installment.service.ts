import { Injectable } from '@nestjs/common';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { BaseService } from 'src/core/services/base.interface.service';
import { InstallmentRepository } from './installment.repository';
import { InstallmentMapper } from './installment.mapper';
import { Installment } from './entities/installment.entity';

@Injectable()
export class InstallmentService
  implements BaseService<CreateInstallmentDto | UpdateInstallmentDto>
{
  constructor(
    private installmentsRepository: InstallmentRepository,
    private mapper: InstallmentMapper,
  ) {}
  async findAll(): Promise<CreateInstallmentDto[] | UpdateInstallmentDto[]> {
    const installments: Installment[] =
      await this.installmentsRepository.getAll();
    return installments.map((record) => this.mapper.entityToDto(record));
  }
  async create(
    item: CreateInstallmentDto,
  ): Promise<CreateInstallmentDto | UpdateInstallmentDto> {
    const newInstallment: Installment =
      await this.installmentsRepository.create(item);
    return this.mapper.entityToDto(newInstallment);
  }

  async findOne(
    id: string,
  ): Promise<CreateInstallmentDto | UpdateInstallmentDto> {
    const installment: Installment =
      await this.installmentsRepository.getById(id);
    return this.mapper.entityToDto(installment);
  }

  async update(
    id: string,
    item: UpdateInstallmentDto,
  ): Promise<UpdateInstallmentDto> {
    const updateInstallment = await this.installmentsRepository.update(
      id,
      item,
    );
    return this.mapper.entityToDto(updateInstallment);
  }

  async delete(
    id: string,
  ): Promise<CreateInstallmentDto | UpdateInstallmentDto> {
    await this.installmentsRepository.delete(id);
    return this.findOne(id);
  }
}
