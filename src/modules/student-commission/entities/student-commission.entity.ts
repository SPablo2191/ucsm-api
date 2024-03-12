import { Commission } from 'src/modules/commission/entities/commission.entity';
import { SubjectRegistration } from 'src/modules/subject-registration/entities/subject-registration.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  constructor(partial: Partial<StudentCommission>) {
    Object.assign(this, partial);
  }
}
