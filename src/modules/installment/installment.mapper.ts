import { Injectable } from '@nestjs/common';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';
import { Installment } from './entities/installment.entity';
@Injectable()
export class InstallmentMapper {
  dtoToEntity(
    installmentDTO: CreateInstallmentDto | UpdateInstallmentDto,
  ): Installment {
    return new Installment(installmentDTO);
  }

  entityToDto(
    installmentEntity: Installment,
  ): CreateInstallmentDto | UpdateInstallmentDto {
    return new CreateInstallmentDto(installmentEntity);
  }
}
