import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Semester } from 'src/modules/semester/entities/semester.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @ManyToOne(
    () => AcademicProgram,
    (academicProgram) => academicProgram.subjects,
  )
  academic_program: AcademicProgram;
  @ManyToOne(() => Semester, (semester) => semester.subjects)
  semester: Semester;
  constructor(partial: Partial<Subject>) {
    Object.assign(this, partial);
  }
}
