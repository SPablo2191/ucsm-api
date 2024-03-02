import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

export class ProfessorMapper {
  dtoToEntity(
    professorDTO: CreateProfessorDto | UpdateProfessorDto,
  ): Professor {
    return new Professor(professorDTO);
  }

  entityToDto(
    professorEntity: Professor,
  ): CreateProfessorDto | UpdateProfessorDto {
    return new CreateProfessorDto(professorEntity);
  }
}
