import { PartialType } from '@nestjs/mapped-types';
import { CreateCommissionScheduleDto } from './create-commission-schedule.dto';

export class UpdateCommissionScheduleDto extends PartialType(CreateCommissionScheduleDto) {}
