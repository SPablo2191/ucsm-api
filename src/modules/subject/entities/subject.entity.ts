import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Semester } from 'src/modules/semester/entities/semester.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  @OneToMany(
    () => SubjectRegistration,
    (subjectRegistration) => subjectRegistration.subject,
  )
  subject_registrations: SubjectRegistration[];
  constructor(partial: Partial<Subject>) {
    Object.assign(this, partial);
  }
}
