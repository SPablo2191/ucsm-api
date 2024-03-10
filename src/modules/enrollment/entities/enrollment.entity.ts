import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { ManyToOne } from 'typeorm';

export class Enrollment {
  @ManyToOne(
    () => AcademicProgram,
    (academicProgram) => academicProgram.enrollments,
  )
  academic_program: AcademicProgram;
}
