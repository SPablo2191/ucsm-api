import { Enrollment } from 'src/modules/enrollment/entities/enrollment.entity';
import { StudentCommission } from 'src/modules/student-commission/entities/student-commission.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SubjectRegistration {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Subject, (subject) => subject.subject_registrations)
  subject: Subject;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  final_score: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  simulated_score: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_date: Date;
  @ManyToOne(() => Enrollment, (enrollment) => enrollment.subjectRegistrations)
  enrollment: Enrollment;
  @OneToMany(
    () => StudentCommission,
    (studentCommission) => studentCommission.subject_registration,
  )
  student_commissions: StudentCommission[];
  constructor(partial: Partial<SubjectRegistration>) {
    Object.assign(this, partial);
  }
}
