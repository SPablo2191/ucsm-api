import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Student } from 'src/modules/student/entities/student.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';
import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(
    () => AcademicProgram,
    (academicProgram) => academicProgram.enrollments,
  )
  academic_program: AcademicProgram;
  @OneToOne(() => Student)
  @JoinColumn()
  student: Student;
  @Column({ type: 'varchar', length: 50 })
  code: string;
  @OneToMany(
    () => SubjectRegistration,
    (subjectRegistration) => subjectRegistration.enrollment,
  )
  subjectRegistrations: SubjectRegistration[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_date: Date;
  constructor(partial: Partial<Enrollment>) {
    Object.assign(this, partial);
  }
}
