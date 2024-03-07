import { Injectable } from '@nestjs/common';
import { CreateStudentCommissionDto } from './dto/create-student-commission.dto';
import { UpdateStudentCommissionDto } from './dto/update-student-commission.dto';

@Injectable()
export class StudentCommissionService {
  create(createStudentCommissionDto: CreateStudentCommissionDto) {
    return 'This action adds a new studentCommission';
  }

  findAll() {
    return `This action returns all studentCommission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCommission`;
  }

  update(id: number, updateStudentCommissionDto: UpdateStudentCommissionDto) {
    return `This action updates a #${id} studentCommission`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCommission`;
  }
}
