import { Injectable } from '@nestjs/common';
import { CreateAcademicProgramDto } from './dto/create-academic-program.dto';
import { UpdateAcademicProgramDto } from './dto/update-academic-program.dto';

@Injectable()
export class AcademicProgramService {
  create(createAcademicProgramDto: CreateAcademicProgramDto) {
    return 'This action adds a new academicProgram';
  }

  findAll() {
    return `This action returns all academicProgram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicProgram`;
  }

  update(id: number, updateAcademicProgramDto: UpdateAcademicProgramDto) {
    return `This action updates a #${id} academicProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicProgram`;
  }
}
