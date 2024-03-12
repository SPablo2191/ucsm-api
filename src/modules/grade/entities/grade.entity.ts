import { StudentCommission } from 'src/modules/student-commission/entities/student-commission.entity';
import { Phase } from 'src/shared/types/phase.types';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(
    () => StudentCommission,
    (commission) => commission.student_commissions,
  )
  student_commission: StudentCommission;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  score: number;
  @Column({ type: 'enum', enum: Phase, default: Phase.FIRST })
  phase: string;
  constructor(partial: Partial<Grade>) {
    Object.assign(this, partial);
  }
}
