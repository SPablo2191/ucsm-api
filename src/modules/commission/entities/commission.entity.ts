import { Classroom } from 'src/modules/classroom/entities/classroom.entity';
import { CommissionSchedule } from 'src/modules/commission-schedule/entities/commission-schedule.entity';
import { Professor } from 'src/modules/professor/entities/professor.entity';
import { StudentCommission } from 'src/modules/student-commission/entities/student-commission.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Commission {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Professor, (professor) => professor.commissions)
  professor: Professor;
  @ManyToOne(() => Classroom, (classroom) => classroom.commissions)
  classroom: Classroom;
  @OneToOne(() => CommissionSchedule)
  @JoinColumn()
  commission_schedule: CommissionSchedule;
  @OneToMany(
    () => StudentCommission,
    (studentCommission) => studentCommission.commission,
  )
  student_commissions: StudentCommission[];
  constructor(partial: Partial<Commission>) {
    Object.assign(this, partial);
  }
}
