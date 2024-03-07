import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicProgramService } from './academic-program.service';
import { CreateAcademicProgramDto } from './dto/create-academic-program.dto';
import { UpdateAcademicProgramDto } from './dto/update-academic-program.dto';

@Controller('academic-program')
export class AcademicProgramController {
  constructor(private readonly academicProgramService: AcademicProgramService) {}

  @Post()
  create(@Body() createAcademicProgramDto: CreateAcademicProgramDto) {
    return this.academicProgramService.create(createAcademicProgramDto);
  }

  @Get()
  findAll() {
    return this.academicProgramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicProgramService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicProgramDto: UpdateAcademicProgramDto) {
    return this.academicProgramService.update(+id, updateAcademicProgramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicProgramService.remove(+id);
  }
}
