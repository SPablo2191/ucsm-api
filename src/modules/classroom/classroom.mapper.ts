import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomMapper {
  dtoToEntity(
    classroomDTO: CreateClassroomDto | UpdateClassroomDto,
  ): Classroom {
    return new Classroom(classroomDTO);
  }

  entityToDto(planEntity: Classroom): CreateClassroomDto | UpdateClassroomDto {
    return new CreateClassroomDto(planEntity);
  }
}
