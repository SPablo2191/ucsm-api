import { CreateAcademicProgramDto } from './dto/create-academic-program.dto';
import { UpdateAcademicProgramDto } from './dto/update-academic-program.dto';
import { AcademicProgram } from './entities/academic-program.entity';

export class AcademicProgramMapper {
  dtoToEntity(
    AcademicProgramDTO: CreateAcademicProgramDto | UpdateAcademicProgramDto,
  ): AcademicProgram {
    return new AcademicProgram(AcademicProgramDTO);
  }

  entityToDto(
    academicProgramEntity: AcademicProgram,
  ): CreateAcademicProgramDto | UpdateAcademicProgramDto {
    return new CreateAcademicProgramDto(academicProgramEntity);
  }
}
