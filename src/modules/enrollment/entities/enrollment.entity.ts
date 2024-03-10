import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Student } from 'src/modules/student/entities/student.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';
import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class Enrollment {
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
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_date: Date;
  subjectRegistrations: SubjectRegistration[];
  constructor(partial: Partial<Enrollment>) {
    Object.assign(this, partial);
  }
}
