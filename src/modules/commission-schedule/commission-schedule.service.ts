import { Injectable } from '@nestjs/common';
import { CreateCommissionScheduleDto } from './dto/create-commission-schedule.dto';
import { UpdateCommissionScheduleDto } from './dto/update-commission-schedule.dto';

@Injectable()
export class CommissionScheduleService {
  create(createCommissionScheduleDto: CreateCommissionScheduleDto) {
    return 'This action adds a new commissionSchedule';
  }

  findAll() {
    return `This action returns all commissionSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commissionSchedule`;
  }

  update(id: number, updateCommissionScheduleDto: UpdateCommissionScheduleDto) {
    return `This action updates a #${id} commissionSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} commissionSchedule`;
  }
}
