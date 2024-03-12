import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { Grade } from './entities/grade.entity';

@Injectable()
export class GradeMapper {
  dtoToEntity(planDTO: CreateGradeDto | UpdateGradeDto): Grade {
    return new Grade(planDTO);
  }

  entityToDto(planEntity: Grade): CreateGradeDto | UpdateGradeDto {
    return new CreateGradeDto(planEntity);
  }
}
