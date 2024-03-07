import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCommissionService } from './student-commission.service';
import { CreateStudentCommissionDto } from './dto/create-student-commission.dto';
import { UpdateStudentCommissionDto } from './dto/update-student-commission.dto';

@Controller('student-commission')
export class StudentCommissionController {
  constructor(private readonly studentCommissionService: StudentCommissionService) {}

  @Post()
  create(@Body() createStudentCommissionDto: CreateStudentCommissionDto) {
    return this.studentCommissionService.create(createStudentCommissionDto);
  }

  @Get()
  findAll() {
    return this.studentCommissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCommissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCommissionDto: UpdateStudentCommissionDto) {
    return this.studentCommissionService.update(+id, updateStudentCommissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCommissionService.remove(+id);
  }
}
