import { Commission } from 'src/modules/commission/entities/commission.entity';
import { Grade } from 'src/modules/grade/entities/grade.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class StudentCommission {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Commission, (commission) => commission.student_commissions)
  commission: Commission;
  @ManyToOne(
    () => SubjectRegistration,
    (commission) => commission.student_commissions,
  )
  subject_registration: SubjectRegistration;
  @OneToMany(() => Grade, (grade) => grade.student_commission)
  student_commissions: Grade[];
  constructor(partial: Partial<StudentCommission>) {
    Object.assign(this, partial);
  }
}
