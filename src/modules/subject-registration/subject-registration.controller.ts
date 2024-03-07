import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectRegistrationService } from './subject-registration.service';
import { CreateSubjectRegistrationDto } from './dto/create-subject-registration.dto';
import { UpdateSubjectRegistrationDto } from './dto/update-subject-registration.dto';

@Controller('subject-registration')
export class SubjectRegistrationController {
  constructor(private readonly subjectRegistrationService: SubjectRegistrationService) {}

  @Post()
  create(@Body() createSubjectRegistrationDto: CreateSubjectRegistrationDto) {
    return this.subjectRegistrationService.create(createSubjectRegistrationDto);
  }

  @Get()
  findAll() {
    return this.subjectRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectRegistrationDto: UpdateSubjectRegistrationDto) {
    return this.subjectRegistrationService.update(+id, updateSubjectRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectRegistrationService.remove(+id);
  }
}
