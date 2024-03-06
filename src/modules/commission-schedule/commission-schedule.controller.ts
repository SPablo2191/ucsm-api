import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommissionScheduleService } from './commission-schedule.service';
import { CreateCommissionScheduleDto } from './dto/create-commission-schedule.dto';
import { UpdateCommissionScheduleDto } from './dto/update-commission-schedule.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Commission Schedule')
@Controller('commission-schedule')
export class CommissionScheduleController {
  constructor(
    private readonly commissionScheduleService: CommissionScheduleService,
  ) {}

  @Post()
  create(@Body() createCommissionScheduleDto: CreateCommissionScheduleDto) {
    return this.commissionScheduleService.create(createCommissionScheduleDto);
  }

  @Get()
  findAll() {
    return this.commissionScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commissionScheduleService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommissionScheduleDto: UpdateCommissionScheduleDto,
  ) {
    return this.commissionScheduleService.update(
      id,
      updateCommissionScheduleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commissionScheduleService.delete(id);
  }
}
