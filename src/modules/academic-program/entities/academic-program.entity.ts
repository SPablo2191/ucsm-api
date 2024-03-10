import { Enrollment } from 'src/modules/enrollment/entities/enrollment.entity';
import { Plan } from 'src/modules/plan/entities/plan.entity';
import { Subject } from 'src/modules/subject/entities/subject.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AcademicProgram {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'varchar', length: 50 })
  code: string;
  @ManyToOne(() => Plan, (plan) => plan.academic_programs)
  plan: Plan;
  @OneToMany(() => Subject, (subject) => subject.academic_program)
  subjects: Subject[];
  @OneToMany(() => Enrollment, (enrollment) => enrollment.academic_program)
  enrollments: Enrollment[];
  constructor(partial: Partial<AcademicProgram>) {
    Object.assign(this, partial);
  }
}
